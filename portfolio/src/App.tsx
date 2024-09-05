import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import theme from "./helpers/theme";
import fetch from "./helpers/fetch";
import { AnimatedText } from "./components/Animation";
import "./App.css";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface UserData {
  username: string;
  avatarUrl: string;
  totalContributions: number;
  publicRepositories: string[];
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    fetch().then((data) => setUserData(data));
  }, []);

  if (userData === null) {
    return <div>Loading...</div>;
  }
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
      <Card variant="outlined" sx={{ marginTop: 20 }}>
        <CardHeader
          avatar={<Avatar alt="Portfolio" src={userData.avatarUrl} />}
          title={<h2>{userData.username}</h2>}
        />
        <CardContent>
          <h3>Total Contributions: {userData.totalContributions}</h3>
          {userData.publicRepositories.map((repo, index) => (
            <h2
              key={index}
              ref={`https://github.com/${userData.username}/${repo}`}
            >
              {repo}
            </h2>
          ))}
        </CardContent>
        <CardActions>
          <IconButton aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default App;
