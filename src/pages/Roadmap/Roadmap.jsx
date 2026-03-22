import { Container, Grid, Paper, Typography, Box, Chip, Stepper, Step, StepLabel, StepContent, useTheme, useMediaQuery } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SpeedIcon from '@mui/icons-material/Speed'
import SecurityIcon from '@mui/icons-material/Security'
import ApiIcon from '@mui/icons-material/Api'
import BarChartIcon from '@mui/icons-material/BarChart'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import './Roadmap.css'
import PeopleIcon from '@mui/icons-material/People'

const roadmapData = [
  {
    quarter: 'Q2 2026',
    period: 'Апрель - Июнь 2026',
    status: 'current',
    items: [
      {
        title: 'Расширенный парсинг новостей',
        description: 'Добавление поддержки новостных агрегаторов и AI-аналитика тональности',
        icon: <PsychologyIcon />,
        completed: true,
      },
      {
        title: 'Улучшенные сканеры',
        description: 'Новые алгоритмы поиска паттернов и объемного анализа',
        icon: <TrendingUpIcon />,
        completed: true,
      },
      {
        title: 'Интеграция с TradingView',
        description: 'Прямая интеграция разметки в графики TradingView',
        icon: <BarChartIcon />,
        completed: false,
      },
      {
        title: 'Мобильное приложение',
        description: 'MVP версия для iOS и Android с базовым функционалом',
        icon: <SmartToyIcon />,
        completed: false,
      },
    ],
  },
  {
    quarter: 'Q3 2026',
    period: 'Июль - Сентябрь 2026',
    status: 'upcoming',
    items: [
      {
        title: 'API для разработчиков',
        description: 'Открытое API для создания собственных индикаторов и скриптов',
        icon: <ApiIcon />,
        completed: false,
      },
      {
        title: 'AI-ассистент',
        description: 'Искусственный интеллект для прогнозирования и рекомендаций',
        icon: <SmartToyIcon />,
        completed: false,
      },
      {
        title: 'Социальный трейдинг',
        description: 'Возможность копирования сделок успешных трейдеров',
        icon: <PeopleIcon />,
        completed: false,
      },
      {
        title: 'Расширенная аналитика',
        description: 'Детальные отчеты и статистика по эффективности торговли',
        icon: <BarChartIcon />,
        completed: false,
      },
    ],
  },
  {
    quarter: 'Q4 2026',
    period: 'Октябрь - Декабрь 2026',
    status: 'planned',
    items: [
      {
        title: 'Кроссплатформенность',
        description: 'Поддержка Firefox, Safari и других браузеров',
        icon: <SpeedIcon />,
        completed: false,
      },
      {
        title: 'Автоматическая торговля',
        description: 'Торговые роботы и автоматическое исполнение стратегий',
        icon: <PsychologyIcon />,
        completed: false,
      },
      {
        title: 'Новые брокеры',
        description: 'Добавление поддержки брокеров: ВТБ, Открытие, БКС',
        icon: <SecurityIcon />,
        completed: false,
      },
      {
        title: 'Криптовалютные биржи',
        description: 'Интеграция с Binance, Bybit, OKX',
        icon: <TrendingUpIcon />,
        completed: false,
      },
    ],
  },
  {
    quarter: 'Q1 2027',
    period: 'Январь - Март 2027',
    status: 'planned',
    items: [
      {
        title: 'Десктопное приложение',
        description: 'Нативное приложение для Windows, macOS, Linux',
        icon: <SpeedIcon />,
        completed: false,
      },
      {
        title: 'Корпоративные решения',
        description: 'Тарифы для трейдерских команд и проп-фирм',
        icon: <PeopleIcon />,
        completed: false,
      },
      {
        title: 'Обучение и вебинары',
        description: 'Платформа с курсами и живыми вебинарами от экспертов',
        icon: <PsychologyIcon />,
        completed: false,
      },
      {
        title: 'Блокчейн интеграция',
        description: 'Верификация сделок и NFT достижения',
        icon: <SecurityIcon />,
        completed: false,
      },
    ],
  },
]

const Roadmap = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const getStatusColor = (status) => {
    switch(status) {
      case 'current': return '#0071e3'
      case 'upcoming': return '#34c759'
      default: return '#8e8e93'
    }
  }

  const getStatusText = (status) => {
    switch(status) {
      case 'current': return 'В разработке'
      case 'upcoming': return 'Запланировано'
      default: return 'В планах'
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
        Дорожная карта
      </Typography>
      <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 1 }}>
        Наше видение развития продукта
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Мы постоянно работаем над улучшением расширения. Вот что нас ждет в ближайший год
      </Typography>

      {/* Desktop Timeline */}
      {!isMobile && (
        <Timeline position="alternate">
          {roadmapData.map((quarter, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: getStatusColor(quarter.status), boxShadow: `0 0 0 4px ${getStatusColor(quarter.status)}20` }}>
                  {quarter.status === 'current' ? <TrendingUpIcon /> : <RadioButtonUncheckedIcon />}
                </TimelineDot>
                {index < roadmapData.length - 1 && <TimelineConnector sx={{ bgcolor: 'rgba(0,0,0,0.1)' }} />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, mb: 2, background: 'rgba(255,255,255,0.9)', borderRadius: '20px' }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {quarter.quarter}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {quarter.period}
                    </Typography>
                    <Chip
                      label={getStatusText(quarter.status)}
                      size="small"
                      sx={{
                        bgcolor: `${getStatusColor(quarter.status)}20`,
                        color: getStatusColor(quarter.status),
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                  <Grid container spacing={2}>
                    {quarter.items.map((item, itemIndex) => (
                      <Grid item xs={12} sm={6} md={12} lg={6} key={itemIndex}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box sx={{ color: item.completed ? '#34c759' : '#8e8e93' }}>
                            {item.completed ? <CheckCircleIcon /> : item.icon}
                          </Box>
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}

      {/* Mobile Cards */}
      {isMobile && (
        <Grid container spacing={3}>
          {roadmapData.map((quarter, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={0} sx={{ p: 3, background: 'rgba(255,255,255,0.9)', borderRadius: '20px' }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {quarter.quarter}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {quarter.period}
                  </Typography>
                  <Chip
                    label={getStatusText(quarter.status)}
                    size="small"
                    sx={{
                      bgcolor: `${getStatusColor(quarter.status)}20`,
                      color: getStatusColor(quarter.status),
                      fontWeight: 500,
                    }}
                  />
                </Box>
                <Grid container spacing={2}>
                  {quarter.items.map((item, itemIndex) => (
                    <Grid item xs={12} key={itemIndex}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box sx={{ color: item.completed ? '#34c759' : '#8e8e93' }}>
                          {item.completed ? <CheckCircleIcon /> : item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Bottom Note */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Paper elevation={0} sx={{ p: 4, background: 'rgba(0,113,227,0.05)', borderRadius: '20px' }}>
          <Typography variant="h6" gutterBottom>
            💡 Есть идеи?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Мы открыты к предложениям и feedback от сообщества
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Свяжитесь с нами через раздел поддержки или напишите на roadmap@trading-extension.com
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}

export default Roadmap