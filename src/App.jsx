import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/Layout/Layout'
import Pricing from './pages/Pricing/Pricing'
import Features from './pages/Features/Features'
import Developers from './pages/Developers/Developers'
import Installation from './pages/Installation/Installation'
import Support from './pages/Support/Support'
import { AnimatePresence } from 'framer-motion' // опционально, для анимаций

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  transitions: {
    duration: {
      enteringScreen: 300,
      leavingScreen: 300,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App