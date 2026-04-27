import { Container, Grid, Card, CardContent, Avatar, Typography, Box, Chip, Link, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
import LanguageIcon from '@mui/icons-material/Language'
import CodeIcon from '@mui/icons-material/Code'
import BarChartIcon from '@mui/icons-material/BarChart'
import './Developers.css'

const developers = [
  {
    name: 'Данила Сухоревский',
    role: 'Программист',
    description: 'Full-stack разработчик с опытом создания высоконагруженных систем. Специализируется на React, Node.js и интеграции с брокерскими API. Отвечает за архитектуру и разработку расширения.',
    icon: <CodeIcon />,
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'WebSocket'],
    contacts: {
      github: 'https://github.com/d-skh',
      telegram: 'tg://resolve?domain=d_skh',
      vk: 'https://vk.com/d_skh',
    },
  },
  {
    name: 'Алексей Булавский',
    role: 'Аналитик и трейдер',
    description: 'Профессиональный трейдер с 10-летним опытом на финансовых рынках. Разрабатывает торговые стратегии и аналитические алгоритмы. Отвечает за функциональность и аналитику расширения.',
    icon: <BarChartIcon />,
    skills: ['Технический анализ', 'Алгоритмическая торговля', 'Управление рисками', 'Python', 'Data Science'],
    contacts: {
      telegram: 'tg://resolve?domain=Alexey_Bulavskiy_is_39',
      vk: 'https://vk.com/id329161366',
    },
  },
]

const Developers = () => {
  const roleChipSx = {
    mb: 2,
    bgcolor: "var(--chip-bg) !important",
    color: "var(--chip-color) !important",
    fontWeight: 700,
    borderRadius: "12px",
    height: "28px",
    "& .MuiChip-label": {
      px: 1.5,
      color: "var(--chip-color) !important",
      fontWeight: 700,
    },
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
        Команда разработчиков
      </Typography>
      <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Мы создаем лучшие инструменты для трейдеров
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {developers.map((dev, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      bgcolor: index === 0 ? 'primary.main' : 'secondary.main',
                      fontSize: 40,
                      color: '#ffffff',
                      '& .MuiSvgIcon-root': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    {dev.icon}
                  </Avatar>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {dev.name}
                  </Typography>
                  <Chip
                    label={dev.role}
                    sx={roleChipSx}
                  />
                  <Typography variant="body1" align="center" color="text.secondary" paragraph>
                    {dev.description}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    Ключевые навыки:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {dev.skills.map((skill, idx) => (
                      <Chip key={idx} label={skill} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                    Контакты:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    {dev.contacts.github && (
                      <IconButton
                        component={Link}
                        href={dev.contacts.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                      >
                        <GitHubIcon />
                      </IconButton>
                    )}
                    {dev.contacts.telegram && (
                      <IconButton
                        component={Link}
                        href={dev.contacts.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                      >
                        <TelegramIcon />
                      </IconButton>
                    )}
                    {dev.contacts.vk && (
                      <IconButton
                        component={Link}
                        href={dev.contacts.vk}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                      >
                        <LanguageIcon />
                      </IconButton>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2026 Trading Extension. Все права защищены.
        </Typography>
      </Box>
    </Container>
  )
}

export default Developers