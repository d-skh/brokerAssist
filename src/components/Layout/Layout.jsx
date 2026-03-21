import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

const Layout = ({ children }) => {
  const sidebarOpen = useSelector((state) => state.app.sidebarOpen)

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: '64px',
          transition: 'margin-left 0.3s ease-in-out',
          backgroundColor: '#f5f5f5',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Layout