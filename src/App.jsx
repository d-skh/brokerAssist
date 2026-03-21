import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/Layout/Layout'
import Pricing from './pages/Pricing/Pricing'
import Features from './pages/Features/Features'
import Developers from './pages/Developers/Developers'
import Installation from './pages/Installation/Installation'
import Support from './pages/Support/Support'
import Roadmap from './pages/Roadmap/Roadmap'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0071e3',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
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
            <Route path="/roadmap" element={<Roadmap />} />
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