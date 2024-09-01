import { ThemeProvider } from "@mui/material";
import theme from "./helpers/theme";
import { AnimatedText } from "./components/Animation";
import "./App.css";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card"; // Add this import statement

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedText />
      </div>
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ bgcolor: "black", color: "white", borderColor: "white" }}
        >
          <Grid>
            <Card variant="outlined">
              <h3>Yash Sethuraman</h3>
            </Card>
          </Grid>
          <Grid>
            <Card variant="outlined">
              <h3>Yash Sethuraman</h3>
            </Card>
          </Grid>
          <Grid>
            <Card variant="outlined">
              <h3>Yash Sethuraman</h3>
            </Card>
          </Grid>
          <Grid>
            <Card variant="outlined">
              <h3>Yash Sethuraman</h3>
            </Card>
          </Grid>
          <Grid>
            <Card variant="outlined">
              <h3>Yash Sethuraman</h3>
            </Card>
          </Grid>
          <Grid>
            <Card variant="outlined">
              <h3>Yash Sethuraman</h3>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
