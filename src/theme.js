import { createTheme } from "@mui/material/styles";

// Базовые компоненты с CSS переменными
const baseComponents = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
    },
  },
};

// Светлая тема
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0071e3" },
    secondary: { main: "#dc004e" },
    background: { default: "#f5f7fa", paper: "#ffffff" },
    text: { primary: "#1d1d1f", secondary: "#6e6e73" },
  },
  components: {
    ...baseComponents,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "--bg-gradient": "linear-gradient(135deg, #f5f7fa 0%, #f8f9fc 100%)",
          "--drawer-bg": "rgba(255,255,255,0.95)",
          "--appbar-bg": "rgba(255,255,255,0.95)",
          "--card-bg": "rgba(255,255,255,0.9)",
          "--paper-bg": "rgba(255,255,255,0.9)",
          "--border-color": "rgba(0,0,0,0.05)",
          "--border-color-light": "rgba(255,255,255,0.3)",
          "--text-primary": "#1d1d1f",
          "--text-secondary": "#6e6e73",
          "--text-gradient":
            "linear-gradient(135deg, #1d1d1f 0%, #434344 100%)",
          "--primary-main": "#0071e3",
          "--primary-hover": "#0077ed",
          "--primary-light": "rgba(0,113,227,0.1)",
          "--primary-shadow": "rgba(0,113,227,0.2)",
          "--secondary-main": "#dc004e",
          "--secondary-light": "rgba(220,0,78,0.1)",
          "--chip-bg": "#0071e3",
          "--chip-color": "#ffffff",
          "--avatar-gradient":
            "linear-gradient(135deg, #0071e3 0%, #005bb5 100%)",
          "--alert-info-bg": "rgba(0,113,227,0.1)",
          "--alert-info-color": "#0071e3",
          "--alert-warning-bg": "rgba(255,149,0,0.1)",
          "--alert-warning-color": "#ff9500",
          "--alert-success-bg": "rgba(52,199,89,0.1)",
          "--alert-success-color": "#34c759",
          "--badge-bg": "#ff3b30",
          "--step-active": "#0071e3",
          "--step-completed": "#34c759",
          "--scrollbar-track": "rgba(0,0,0,0.05)",
          "--scrollbar-thumb": "rgba(0,0,0,0.2)",
          "--scrollbar-thumb-hover": "rgba(0,0,0,0.3)",
          "--hover-bg": "rgba(0,0,0,0.05)",
          "--selected-bg": "rgba(0,113,227,0.1)",
          "--selected-color": "#0071e3",
        },
      },
    },
  },
});

// Темная тема
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0a84ff" },
    secondary: { main: "#ff375f" },
    background: { default: "#1c1c1e", paper: "#2c2c2e" },
    text: { primary: "#ffffff", secondary: "#98989d" },
  },
  components: {
    ...baseComponents,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "--bg-gradient": "linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%)",
          "--drawer-bg": "rgba(28,28,30,0.98)",
          "--appbar-bg": "rgba(28,28,30,0.98)",
          "--card-bg": "rgba(44,44,46,0.95)",
          "--paper-bg": "rgba(44,44,46,0.95)",
          "--border-color": "rgba(255,255,255,0.1)",
          "--border-color-light": "rgba(255,255,255,0.15)",
          "--text-primary": "#ffffff",
          "--text-secondary": "#98989d",
          "--text-gradient":
            "linear-gradient(135deg, #ffffff 0%, #98989d 100%)",
          "--primary-main": "#0a84ff",
          "--primary-hover": "#409cff",
          "--primary-light": "rgba(10,132,255,0.15)",
          "--primary-shadow": "rgba(10,132,255,0.3)",
          "--secondary-main": "#ff375f",
          "--secondary-light": "rgba(255,55,95,0.15)",
          "--chip-bg": "#0a84ff",
          "--chip-color": "#ffffff",
          "--avatar-gradient":
            "linear-gradient(135deg, #0a84ff 0%, #0055aa 100%)",
          "--alert-info-bg": "rgba(10,132,255,0.15)",
          "--alert-info-color": "#0a84ff",
          "--alert-warning-bg": "rgba(255,149,0,0.15)",
          "--alert-warning-color": "#ff9f0a",
          "--alert-success-bg": "rgba(52,199,89,0.15)",
          "--alert-success-color": "#34c759",
          "--badge-bg": "#ff453a",
          "--step-active": "#0a84ff",
          "--step-completed": "#34c759",
          "--scrollbar-track": "rgba(255,255,255,0.05)",
          "--scrollbar-thumb": "rgba(255,255,255,0.2)",
          "--scrollbar-thumb-hover": "rgba(255,255,255,0.3)",
          "--hover-bg": "rgba(255,255,255,0.08)",
          "--selected-bg": "rgba(10,132,255,0.15)",
          "--selected-color": "#0a84ff",
        },
      },
    },
  },
});

