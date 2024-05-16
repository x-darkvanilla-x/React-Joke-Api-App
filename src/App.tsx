import { Stack } from "@mui/material";
import { Jokes } from "./Jokes";

export const App = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100svh",
        backgroundColor: "#A020F0",
      }}
    >
      <Jokes />
    </Stack>
  );
};
