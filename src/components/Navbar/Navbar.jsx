import { AppBar, Toolbar, IconButton, Typography, Box, Button, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../store/slices/appSlice'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector((state) => state.app.notifications)

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => dispatch(toggleSidebar())}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Trading Extension
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" href="/pricing">
            Тарифы
          </Button>
          <Button color="inherit" href="/support">
            Поддержка
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar