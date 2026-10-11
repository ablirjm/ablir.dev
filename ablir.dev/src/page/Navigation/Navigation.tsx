import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as RouterLink, useLocation } from "react-router-dom";

const links = [
  { to: "/homepage", label: "Home" },
  { to: "/projects", label: "Projects" },
];

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "black", borderBottom: "1px solid rgba(255,140,0,0.25)" }}>
      <Toolbar sx={{ maxWidth: 1100, width: "100%", mx: "auto" }}>
        <Typography
          component={RouterLink}
          to="/homepage"
          variant="h6"
          sx={{ flexGrow: 1, color: "#ff8c00", textDecoration: "none", letterSpacing: "0.04em" }}
        >
          Ablir
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          {links.map((l) => {
            const active = pathname.startsWith(l.to);
            return (
              <Typography
                key={l.to}
                component={RouterLink}
                to={l.to}
                sx={{
                  color: active ? "#ff8c00" : "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: "0.95rem",
                  borderBottom: active ? "2px solid #ff8c00" : "2px solid transparent",
                  pb: 0.25,
                  "&:hover": { color: "#ff8c00" },
                }}
              >
                {l.label}
              </Typography>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
