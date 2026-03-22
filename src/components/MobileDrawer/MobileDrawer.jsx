import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { setSidebarOpen } from '../../store/slices/appSlice'
import CloseIcon from '@mui/icons-material/Close'
import ExtensionIcon from '@mui/icons-material/Extension'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MapIcon from '@mui/icons-material/Map'
import PeopleIcon from '@mui/icons-material/People'
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const menuItems = [
  { text: 'Возможности', icon: <ExtensionIcon />, path: '/brokerAssist' },
  { text: 'Тарифы', icon: <AttachMoneyIcon />, path: '/pricing' },
  { text: 'Дорожная карта', icon: <MapIcon />, path: '/roadmap' },
  { text: 'Разработчики', icon: <PeopleIcon />, path: '/developers' },
  { text: 'Установка', icon: <InstallDesktopIcon />, path: '/installation' },
  { text: 'Поддержка', icon: <SupportAgentIcon />, path: '/support' },
]

const MobileDrawer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const sidebarOpen = useSelector((state) => state.app.sidebarOpen)
  const theme = useTheme()

  const handleNavigation = (path) => {
    navigate(path)
    dispatch(setSidebarOpen(false))
  }

  const handleClose = () => {
    dispatch(setSidebarOpen(false))
  }

  return (
    <Drawer
      anchor="left"
      open={sidebarOpen}
      onClose={handleClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
        },
      }}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="/vite.svg" alt="logo" style={{ width: 32, height: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Trading Extension
          </Typography>
        </Box>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={location.pathname === item.path}
              sx={{
                mx: 1,
                borderRadius: '12px',
                '&.Mui-selected': {
                  bgcolor: 'rgba(0,113,227,0.1)',
                  '&:hover': { bgcolor: 'rgba(0,113,227,0.15)' },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 48, color: location.pathname === item.path ? '#0071e3' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  sx: { fontWeight: location.pathname === item.path ? 600 : 400 },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default MobileDrawer