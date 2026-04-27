import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Pricing from "./pages/Pricing/Pricing";
import Features from "./pages/Features/Features";
import Developers from "./pages/Developers/Developers";
import Installation from "./pages/Installation/Installation";
import Support from "./pages/Support/Support";
import Roadmap from "./pages/Roadmap/Roadmap";
import News from "./pages/News/News";
import { lightTheme, darkTheme } from "./theme";
import { Box } from "@mui/material";

function App() {
  const currentTheme = useSelector((state) => state.app.theme);

  const getTheme = () => {
    switch (currentTheme) {
      case "dark":
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "var(--bg-gradient)",
          transition: "background 0.3s ease",
        }}
      >
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/features" replace />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/news" element={<News />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<Navigate to="/features" replace />} />
            </Routes>
          </Layout>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
