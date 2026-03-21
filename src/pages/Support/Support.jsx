import { Container, Grid, TextField, Button, Paper, Typography, Box, Alert, Card, CardContent, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNotification } from '../../store/slices/appSlice'
import SendIcon from '@mui/icons-material/Send'
import ChatIcon from '@mui/icons-material/Chat'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import './Support.css'

const faqs = [
  {
    question: 'Как начать использовать расширение?',
    answer: 'После установки расширения, зайдите на сайт вашего брокера и нажмите на иконку расширения в панели инструментов. Расширение автоматически определит тикер и покажет актуальные новости.',
  },
  {
    question: 'Поддерживает ли расширение мобильные устройства?',
    answer: 'На данный момент расширение доступно только для десктопных версий браузеров на базе Chromium.',
  },
  {
    question: 'Безопасно ли использовать расширение?',
    answer: 'Да, расширение не передает ваши данные третьим лицам. Вся обработка информации происходит локально на вашем устройстве.',
  },
  {
    question: 'Как отменить подписку?',
    answer: 'Вы можете отменить подписку в любое время в личном кабинете или написав в службу поддержки.',
  },
]

const Support = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Support request:', formData)
    dispatch(addNotification({
      id: Date.now(),
      message: 'Ваше сообщение отправлено в поддержку',
      type: 'success',
    }))
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
        Поддержка
      </Typography>
      <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Мы всегда готовы помочь вам
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Контакты
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChatIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Онлайн-чат" secondary="24/7" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Email" secondary="support@trading-extension.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Телефон" secondary="+7 (495) 123-45-67" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ScheduleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Время работы" secondary="Пн-Пт: 10:00 - 19:00 (МСК)" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Напишите нам
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Сообщение"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{ mt: 2 }}
                fullWidth
              >
                Отправить сообщение
              </Button>
              {submitted && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon />
                    <span>Сообщение отправлено! Мы свяжемся с вами в ближайшее время.</span>
                  </Box>
                </Alert>
              )}
            </form>
          </Paper>
        </Grid>

        {/* FAQ Section */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4, mb: 3 }}>
            Часто задаваемые вопросы
          </Typography>
          <Grid container spacing={3}>
            {faqs.map((faq, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Среднее время ответа: до 2 часов в рабочее время
        </Typography>
      </Box>
    </Container>
  )
}

export default Support