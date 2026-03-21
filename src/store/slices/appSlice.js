import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarOpen: false, // по умолчанию закрыт
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
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      )
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
  removeNotification,
} = appSlice.actions

export default appSlice.reducer