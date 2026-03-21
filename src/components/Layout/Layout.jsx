import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMobile from '../NavbarMobile/NavbarMobile'
import MobileDrawer from '../MobileDrawer/MobileDrawer'

const Layout = ({ children }) => {
  const sidebarOpen = useSelector((state) => state.app.sidebarOpen)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {!isMobile && <Sidebar />}
      {isMobile && <NavbarMobile />}
      {isMobile && <MobileDrawer />}
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: !isMobile ? (sidebarOpen ? '292px' : '92px') : 0,
          marginTop: isMobile ? '64px' : 0,
          transition: 'margin-left 0.3s ease',
          backgroundColor: '#f5f7fa',
          minHeight: '100vh',
          p: { xs: 2, md: 3 },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout