import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, useTheme, useMediaQuery, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSidebarOpen, setCurrentPage } from '../../store/slices/appSlice'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ExtensionIcon from '@mui/icons-material/Extension'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PeopleIcon from '@mui/icons-material/People'
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const menuItems = [
  { text: 'Возможности', icon: <ExtensionIcon />, path: '/features' },
  { text: 'Тарифы', icon: <AttachMoneyIcon />, path: '/pricing' },
  { text: 'Разработчики', icon: <PeopleIcon />, path: '/developers' },
  { text: 'Установка', icon: <InstallDesktopIcon />, path: '/installation' },
  { text: 'Поддержка', icon: <SupportAgentIcon />, path: '/support' },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const sidebarOpen = useSelector((state) => state.app.sidebarOpen)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => {
    dispatch(setSidebarOpen(false))
  }

  const handleNavigation = (path, text) => {
    navigate(path)
    dispatch(setCurrentPage(text.toLowerCase()))
    if (isMobile) {
      dispatch(setSidebarOpen(false))
    }
  }

  // Для мобильных устройств используем временный Drawer (слева)
  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={handleClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            marginTop: '64px',
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleNavigation(item.path, item.text)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    )
  }

  // Для десктопа используем временный Drawer (такой же как на мобильных)
  // Это проще и не создает лишних элементов
  return (
    <Drawer
      anchor="left"
      open={sidebarOpen}
      onClose={handleClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          marginTop: '64px',
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <Box sx={{ 
        overflow: 'auto', 
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(item.path, item.text)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar