import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarOpen: false, // по умолчанию закрыт на всех устройствах
  currentPage: 'features',
  user: null,
  notifications: [],
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
  },
})

export const {
  toggleSidebar,
  setSidebarOpen,
  setCurrentPage,
  setUser,
  addNotification,
  clearNotifications,
} = appSlice.actions

export default appSlice.reducer