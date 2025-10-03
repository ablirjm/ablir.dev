import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

const Navigation = ()=> {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left Side - App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ablir
        </Typography>

        {/* Right Side - Thumbnail Avatar */}
        <IconButton edge="end" color="inherit">
          <Avatar
            alt="User Thumbnail"
            src="https://via.placeholder.com/40" // replace with your image URL
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;