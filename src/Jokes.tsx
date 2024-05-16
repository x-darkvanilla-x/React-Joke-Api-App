import { ContentCopy, Refresh } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const link = "https://official-joke-api.appspot.com/jokes/random";

export const Jokes = () => {
  const [joke, setJoke] = useState<any>({});
  const [copy, setCopy] = useState("Copy");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(link);
    const data = await result.json();
    setJoke(data);
    setCopy("Copy");
  };

  const handleCopy = () => {
    const textToCopy = `${joke.setup} ${joke.punchline}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopy("Copied");
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  return (
      <Card sx={{ width: "300px", padding: "20px", justifyContent: "center"}}>
        <CardContent>
          {joke.setup && joke.punchline && (
            <Stack sx={{textAlign: "center", alignItems: "center"}} gap={2}>
              {/*<Typography>{joke.setup} {joke.punchline}</Typography>*/}
              <Typography variant="body1">{joke.setup}</Typography>
              <Typography variant="body2">{joke.punchline}</Typography>
            </Stack>
          )}
        </CardContent>
        <CardActions>
          <Stack sx={{display:"flex", flexDirection:"row", justifyContent: "space-evenly", width: "100%"}}>
            <Button startIcon={<ContentCopy />} style={{ backgroundColor: '#32CD32', color: 'white' }} variant="contained" onClick={handleCopy} >{copy}</Button>
            <Button startIcon={<Refresh />} style={{ backgroundColor: '#FFA500', color: 'white' }} variant="contained" onClick={fetchData}>New Joke</Button>
          </Stack>
        </CardActions>
      </Card>
  );
};
