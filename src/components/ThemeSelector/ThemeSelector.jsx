import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../store/slices/appSlice'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const ThemeSelector = ({ expanded = false }) => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state) => state.app.theme)
  const isDark = currentTheme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'
  const currentThemeLabel = isDark ? 'Темная' : 'Светлая'

  return (
    <Tooltip title={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}>
      <ListItemButton
        onClick={() => dispatch(setTheme(nextTheme))}
        sx={{
          width: '100%',
          mx: 1,
          borderRadius: '12px',
          justifyContent: expanded ? 'initial' : 'center',
          px: expanded ? 2 : 1.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: expanded ? 2 : 'auto',
            justifyContent: 'center',
          }}
        >
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </ListItemIcon>
        <ListItemText
          primary={`Тема: ${currentThemeLabel}`}
          primaryTypographyProps={{
            sx: {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          }}
          sx={{
            flex: expanded ? 1 : 0,
            maxWidth: expanded ? '200px' : 0,
            opacity: expanded ? 1 : 0,
            transform: expanded ? 'translateX(0)' : 'translateX(-6px)',
            transition: expanded
              ? 'max-width 0.25s ease, opacity 0.2s ease 0.15s, transform 0.2s ease 0.15s'
              : 'max-width 0.2s ease, opacity 0.12s ease, transform 0.12s ease',
            overflow: 'hidden',
          }}
        />
      </ListItemButton>
    </Tooltip>
  )
}

export default ThemeSelector