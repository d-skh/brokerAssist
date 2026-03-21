import { Container, Grid, Card, CardContent, Avatar, Typography, Box, Chip, Link, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import CodeIcon from '@mui/icons-material/Code'
import BarChartIcon from '@mui/icons-material/BarChart'
import './Developers.css'

const developers = [
  {
    name: 'Данила Сухоревский',
    role: 'Программист',
    description: 'Full-stack разработчик с опытом создания высоконагруженных систем. Специализируется на React, Node.js и интеграции с брокерскими API. Отвечает за архитектуру и разработку расширения.',
    avatar: 'https://via.placeholder.com/150/1976d2/ffffff?text=DS',
    icon: <CodeIcon />,
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'WebSocket'],
    contacts: {
      github: 'https://github.com/danila',
      telegram: 'https://t.me/danila',
      linkedin: 'https://linkedin.com/in/danila',
    },
  },
  {
    name: 'Алексей Булавский',
    role: 'Аналитик и трейдер',
    description: 'Профессиональный трейдер с 10-летним опытом на финансовых рынках. Разрабатывает торговые стратегии и аналитические алгоритмы. Отвечает за функциональность и аналитику расширения.',
    avatar: 'https://via.placeholder.com/150/dc004e/ffffff?text=AB',
    icon: <BarChartIcon />,
    skills: ['Технический анализ', 'Алгоритмическая торговля', 'Управление рисками', 'Python', 'Data Science'],
    contacts: {
      github: 'https://github.com/alexey',
      telegram: 'https://t.me/alexey',
      linkedin: 'https://linkedin.com/in/alexey',
    },
  },
]

const Developers = () => {
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
                    src={dev.avatar}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      bgcolor: index === 0 ? 'primary.main' : 'secondary.main',
                      fontSize: 40,
                    }}
                  >
                    {dev.icon}
                  </Avatar>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {dev.name}
                  </Typography>
                  <Chip
                    label={dev.role}
                    color={index === 0 ? 'primary' : 'secondary'}
                    sx={{ mb: 2 }}
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
                    <IconButton
                      component={Link}
                      href={dev.contacts.github}
                      target="_blank"
                      color="inherit"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      component={Link}
                      href={dev.contacts.telegram}
                      target="_blank"
                      color="inherit"
                    >
                      <TelegramIcon />
                    </IconButton>
                    <IconButton
                      component={Link}
                      href={dev.contacts.linkedin}
                      target="_blank"
                      color="inherit"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 Trading Extension. Все права защищены.
        </Typography>
      </Box>
    </Container>
  )
}

export default Developers