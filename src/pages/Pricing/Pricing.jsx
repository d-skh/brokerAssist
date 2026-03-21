import { Container, Grid, Card, CardContent, CardActions, Typography, Button, Box, Chip, Divider } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarIcon from '@mui/icons-material/Star'
import './Pricing.css'

const plans = [
  {
    name: 'Базовый',
    price: '0',
    period: 'месяц',
    features: [
      'Парсинг новостей по тикеру',
      'Базовые сканеры',
      'Ограниченная разметка графиков',
      'Поддержка 1 брокера',
      'Email поддержка',
    ],
    recommended: false,
    buttonText: 'Начать бесплатно',
  },
  {
    name: 'Профессиональный',
    price: '999',
    period: 'месяц',
    features: [
      'Все функции Базового',
      'Расширенные сканеры',
      'Полная разметка графиков',
      'Поддержка всех брокеров',
      'Приоритетная поддержка',
      'Уведомления в реальном времени',
      'API доступ',
    ],
    recommended: true,
    buttonText: 'Купить сейчас',
  },
  {
    name: 'Безлимитный',
    price: '2499',
    period: 'месяц',
    features: [
      'Все функции Профессионального',
      'Неограниченные запросы API',
      'Персональный менеджер',
      'Кастомные индикаторы',
      'Эксклюзивные сигналы',
      'Обучение и консультации',
    ],
    recommended: false,
    buttonText: 'Связаться с нами',
  },
]

const Pricing = () => {
  const handlePurchase = (planName) => {
    // Здесь будет логика перехода к покупке
    window.open('https://your-payment-link.com', '_blank')
    console.log(`Переход к покупке тарифа: ${planName}`)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
        Выберите тариф
      </Typography>
      <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Идеальный план для трейдеров любого уровня
      </Typography>

      <Grid container spacing={4} alignItems="flex-end">
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.name}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                },
                ...(plan.recommended && {
                  border: '2px solid',
                  borderColor: 'primary.main',
                  mt: 2, // Добавляем отступ сверху для карточки с рекомендацией
                }),
                overflow: 'visible', // Убираем обрезание содержимого
              }}
            >
              {plan.recommended && (
                <Chip
                  icon={<StarIcon />}
                  label="Рекомендуемый"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: -16, // Поднимаем выше, чтобы свисал над карточкой
                    right: 20,
                    zIndex: 1, // Убеждаемся, что чип поверх остальных элементов
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1, pt: plan.recommended ? 3 : 2 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.name}
                </Typography>
                <Box sx={{ my: 2 }}>
                  <Typography variant="h3" component="span">
                    {plan.price} ₽
                  </Typography>
                  <Typography variant="subtitle1" component="span" color="text.secondary">
                    /{plan.period}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                {plan.features.map((feature, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CheckCircleIcon color="success" sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant={plan.recommended ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => handlePurchase(plan.name)}
                  size="large"
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          * Все тарифы включают 14-дневную гарантию возврата средств
        </Typography>
      </Box>
    </Container>
  )
}

export default Pricing