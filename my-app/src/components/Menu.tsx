import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";

export function Menu() {
  useEffect(() => {
    document.title = "Portfolio"; // Change this to your desired tab title
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          href="https://chat.openai.com"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
  );
}
