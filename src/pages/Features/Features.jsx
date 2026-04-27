import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Paper,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NewsIcon from "@mui/icons-material/Newspaper";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsightsIcon from "@mui/icons-material/Insights";
import "./Features.css";

const brokers = [
  { name: "Т-Банк", color: "#ffdd2d", textColor: "#1d1d1f" },
  { name: "Альфа-Банк", color: "#ef3124", textColor: "#ffffff" },
  { name: "БКС", color: "#0047ff", textColor: "#ffffff" },
  { name: "Алор", color: "#00a651", textColor: "#ffffff" },
  { name: "Финам", color: "#57a8ff", textColor: "#ffffff" },
];

const features = [
  {
    icon: <NewsIcon sx={{ fontSize: 40 }} />,
    title: "Актуальные новости",
    description:
      "Парсинг и отображение актуальных новостей по выбранному тикеру из надежных источников в реальном времени",
  },
  {
    icon: <TimelineIcon sx={{ fontSize: 40 }} />,
    title: "Множество сканеров",
    description:
      "Профессиональные сканеры рынка для поиска лучших торговых возможностей",
  },
  {
    icon: <ShowChartIcon sx={{ fontSize: 40 }} />,
    title: "Расширенная разметка",
    description:
      "Дополнительная разметка для графиков: уровни, тренды, паттерны и индикаторы",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Высокая скорость",
    description:
      "Мгновенная обработка данных и минимальная задержка при парсинге информации",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 40 }} />,
    title: "Аналитика в реальном времени",
    description:
      "Отслеживание рыночных движений и получение сигналов в реальном времени",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Безопасность данных",
    description:
      "Ваши данные надежно защищены, вся информация обрабатывается локально",
  },
];

const Features = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 2 }}
      >
        Возможности расширения
      </Typography>
      <Typography
        variant="h6"
        component="p"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Всё необходимое для успешной торговли в одном месте
      </Typography>

      {/* Brokers Section - Светлый фон */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 6,
          bgcolor: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, mb: 3, color: "#1d1d1f" }}
        >
          Поддерживаемые брокеры
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {brokers.map((broker) => (
            <Grid item key={broker.name}>
              <Chip
                label={broker.name}
                sx={{
                  bgcolor: `${broker.color} !important`,
                  color: `${broker.textColor} !important`,
                  fontSize: "1rem",
                  fontWeight: "bold !important",
                  px: 2,
                  py: 3,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-2px) scale(1.01)",
                    filter: "brightness(1.02)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  },
                  "&:active": {
                    transform: "translateY(0) scale(0.98)",
                  },
                  "& .MuiChip-label": {
                    px: 2,
                    color: "inherit !important",
                    fontWeight: "bold !important",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Features Grid */}
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    color: "primary.main",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  align="center"
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Info */}
      <Box sx={{ mt: 6, p: 4, bgcolor: "background.paper", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom align="center">
          Почему трейдеры выбирают нас?
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Наше расширение объединяет мощные аналитические инструменты с
          интуитивно понятным интерфейсом, позволяя вам сосредоточиться на том,
          что действительно важно - успешной торговле.
        </Typography>
      </Box>
    </Container>
  );
};

export default Features;
