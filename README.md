# Jokes Component

The `Jokes` component is a React component that fetches and displays a random joke from the [Official Joke API](https://official-joke-api.appspot.com/). It allows users to copy the joke to their clipboard and fetch a new joke.

## Features
- Fetches a random joke on component mount and on user request.
- Displays the joke setup and punchline in a card.
- Allows users to copy the joke to their clipboard.
- Stylish buttons for copying the joke and fetching a new joke.

## Installation
To use the `Jokes` component in your project, follow these steps:

1. Install the necessary dependencies:
   ```bash
   npm install @mui/icons-material @mui/material react
   ```

2. Import the `Jokes` component into your project:
   ```javascript
   import { Jokes } from "./Jokes";
   ```

3. Add the `Jokes` component to your JSX:
   ```jsx
   <Jokes />
   ```

## Usage
Simply add the `<Jokes />` component to any part of your React application where you want to display a random joke.

## Example
```jsx
import React from "react";
import { Jokes } from "./Jokes";

function App() {
  return (
    <div className="App">
      <Jokes />
    </div>
  );
}

export default App;
```

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.

---