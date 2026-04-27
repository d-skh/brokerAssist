import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/appSlice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const NavbarMobile = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.app.notifications);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1200,
        background: "var(--appbar-bg)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 1px 0 var(--border-color)",
        color: "var(--text-primary)",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => dispatch(toggleSidebar())}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          Trading Extension
        </Typography>

        {/* ДОБАВИТЬ КНОПКУ ТЕМЫ */}
        <ThemeSelector />

        <IconButton color="inherit">
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarMobile;
