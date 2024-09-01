import { ThemeProvider, Typography } from "@mui/material";
import theme from "./theme";
import { AnimatedText } from "./components/Animation";
import "./App.css";
import { useMediaQuery } from "@mui/material";

function App() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: matches ? "calc(50vh - 32px)" : "calc(100vh - 64px)",
          display: "flex",
          alignItems: matches ? "flex-start" : "center", // Adjust this value
          justifyContent: matches ? "flex-start" : "center", // Adjust this value
        }}
      >
        <AnimatedText />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Portfolio</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
