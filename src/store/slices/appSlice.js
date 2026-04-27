import { createSlice } from '@reduxjs/toolkit'

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('app_theme')
  return savedTheme === 'dark' ? 'dark' : 'light'
}

const initialState = {
  sidebarOpen: false,
  currentPage: 'features',
  user: null,
  notifications: [],
  theme: getInitialTheme(), // 'light', 'dark'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload)
    },
    clearNotifications: (state) => {
      state.notifications = []
    },
    setTheme: (state, action) => {
      const nextTheme = action.payload === 'dark' ? 'dark' : 'light'
      state.theme = nextTheme
      localStorage.setItem('app_theme', nextTheme)
    },
  },
})

export const {
  toggleSidebar,
  setSidebarOpen,
  setCurrentPage,
  setUser,
  addNotification,
  clearNotifications,
  setTheme,
} = appSlice.actions

export default appSlice.reducer