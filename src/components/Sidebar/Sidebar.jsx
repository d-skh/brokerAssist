import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { setSidebarOpen } from '../../store/slices/appSlice'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExtensionIcon from '@mui/icons-material/Extension'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MapIcon from '@mui/icons-material/Map'
import PeopleIcon from '@mui/icons-material/People'
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const menuItems = [
  { text: 'Возможности', icon: <ExtensionIcon />, path: '/features' },
  { text: 'Тарифы', icon: <AttachMoneyIcon />, path: '/pricing' },
  { text: 'Дорожная карта', icon: <MapIcon />, path: '/roadmap' },
  { text: 'Разработчики', icon: <PeopleIcon />, path: '/developers' },
  { text: 'Установка', icon: <InstallDesktopIcon />, path: '/installation' },
  { text: 'Поддержка', icon: <SupportAgentIcon />, path: '/support' },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const sidebarOpen = useSelector((state) => state.app.sidebarOpen)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleNavigation = (path) => {
    navigate(path)
  }

  const toggleSidebar = () => {
    dispatch(setSidebarOpen(!sidebarOpen))
  }

  // Мобильная версия - не рендерим здесь
  if (isMobile) {
    return null
  }

  // Десктопная версия
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 12,
        left: 12,
        bottom: 12,
        width: sidebarOpen ? 280 : 80,
        bgcolor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        border: '1px solid rgba(255,255,255,0.3)',
        overflow: 'hidden',
        zIndex: 1100,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center',
          height: 72,
        }}
      >
        {sidebarOpen ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src="/vite.svg" alt="logo" style={{ width: 32, height: 32 }} />
              <Box sx={{ fontWeight: 600, fontSize: 16, whiteSpace: 'nowrap' }}>Trading Extension</Box>
            </Box>
            <IconButton onClick={toggleSidebar} size="small">
              <ChevronLeftIcon />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={toggleSidebar} size="small">
            <ChevronRightIcon />
          </IconButton>
        )}
      </Box>

      {/* Menu */}
      <List sx={{ flex: 1, pt: 2, overflowY: 'auto' }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Tooltip title={!sidebarOpen ? item.text : ''} placement="right">
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  mx: 1,
                  borderRadius: '12px',
                  justifyContent: sidebarOpen ? 'initial' : 'center',
                  px: sidebarOpen ? 2 : 1.5,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(0,113,227,0.1)',
                    '&:hover': { bgcolor: 'rgba(0,113,227,0.15)' },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: sidebarOpen ? 2 : 'auto',
                    justifyContent: 'center',
                    color: location.pathname === item.path ? '#0071e3' : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {sidebarOpen && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: { fontWeight: location.pathname === item.path ? 600 : 400 },
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid rgba(0,0,0,0.05)',
          textAlign: 'center',
          fontSize: 12,
          color: '#8e8e93',
        }}
      >
        {sidebarOpen ? '© 2024 Trading Extension' : '©'}
      </Box>
    </Box>
  )
}

export default Sidebar