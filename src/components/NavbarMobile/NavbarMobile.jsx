import { AppBar, Toolbar, IconButton, Typography, Box, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../store/slices/appSlice'
import NotificationsIcon from '@mui/icons-material/Notifications'

const NavbarMobile = () => {
  const dispatch = useDispatch()
  const notifications = useSelector((state) => state.app.notifications)

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: 1200,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
        color: '#1d1d1f',
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Trading Extension
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarMobile