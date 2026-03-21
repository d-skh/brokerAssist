import { Container, Stepper, Step, StepLabel, StepContent, Paper, Typography, Box, Button, Alert, Link } from '@mui/material'
import { useState } from 'react'
import ExtensionIcon from '@mui/icons-material/Extension'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import './Installation.css'

const steps = [
  {
    label: 'Откройте Chrome Web Store',
    description: 'Перейдите в официальный магазин расширений Chrome',
    icon: <ChromeReaderModeIcon />,
    link: 'https://chrome.google.com/webstore',
  },
  {
    label: 'Найдите наше расширение',
    description: 'Введите в поиске "Trading Extension" или перейдите по прямой ссылке',
    icon: <ExtensionIcon />,
  },
  {
    label: 'Нажмите "Установить"',
    description: 'Нажмите кнопку "Установить" и подтвердите установку расширения',
    icon: <CheckCircleIcon />,
  },
  {
    label: 'Закрепите расширение',
    description: 'После установки закрепите расширение на панели инструментов для быстрого доступа',
    icon: <ExtensionIcon />,
  },
]

const Installation = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 2 }}>
        Установка расширения
      </Typography>
      <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Всего 4 простых шага для установки
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={() => step.icon}>
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {step.link && (
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      component={Link}
                      href={step.link}
                      target="_blank"
                      startIcon={<ChromeReaderModeIcon />}
                    >
                      Перейти в Chrome Web Store
                    </Button>
                  </Box>
                )}
                <Box sx={{ mb: 2, mt: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Завершить' : 'Далее'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Назад
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>Установка завершена! Теперь вы можете использовать расширение.</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Сбросить
            </Button>
          </Paper>
        )}
      </Paper>

      <Alert severity="info" sx={{ mb: 3 }}>
        <Typography variant="body2">
          <strong>Примечание:</strong> Расширение доступно только для браузеров на базе Chromium (Google Chrome, Яндекс.Браузер, Edge, Opera и др.)
        </Typography>
      </Alert>

      <Alert severity="warning">
        <Typography variant="body2">
          <strong>Важно:</strong> После установки расширения необходимо перезагрузить страницы с биржевыми терминалами для активации функционала.
        </Typography>
      </Alert>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Возникли проблемы? Обратитесь в{' '}
          <Link href="/support" color="primary">
            службу поддержки
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Installation