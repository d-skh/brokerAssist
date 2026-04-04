import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Chip,
  IconButton,
  InputAdornment,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArticleIcon from "@mui/icons-material/Article";
import KeyIcon from "@mui/icons-material/Key";
import "./News.css";

// ВАШИ ДЕФОЛТНЫЕ КЛЮЧИ - ВСТАВЬТЕ СВОИ ЗНАЧЕНИЯ
const DEFAULT_API_KEY = "PKIMDQF6SOGUV65G56TSIFOGHB";
const DEFAULT_API_SECRET = "5MS9xjSzrsJYCfpkW1GZeaf3jnWqrD5ydTcrZT8bwepB";

const News = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [symbol, setSymbol] = useState("AAPL");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiConfigured, setApiConfigured] = useState(false);

  // Дефолтные новости (если API не настроен)
  const defaultNews = [
    {
      id: 1,
      headline: "Рынки открылись ростом на фоне позитивных данных",
      summary:
        "Американские индексы демонстрируют положительную динамику после публикации статистики по занятости.",
      created_at: new Date().toISOString(),
      url: "#",
      author: "Reuters",
      symbols: ["SPY", "QQQ"], // Добавьте эту строку
    },
    {
      id: 2,
      headline: "Технологический сектор лидирует в росте",
      summary:
        "Акции технологических компаний показывают уверенный рост на фоне сильных квартальных отчетов.",
      created_at: new Date().toISOString(),
      url: "#",
      author: "Bloomberg",
      symbols: ["AAPL", "MSFT", "GOOGL"], // Добавьте эту строку
    },
    {
      id: 3,
      headline: "ФРС сохраняет ключевую ставку без изменений",
      summary:
        "Регулятор отметил устойчивость экономики, но оставил возможность для будущих корректировок.",
      created_at: new Date().toISOString(),
      url: "#",
      author: "WSJ",
      symbols: [], // Пустой массив - бадж не отобразится
    },
  ];

  const saveApiKeys = (key, secret) => {
    if (key && secret) {
      localStorage.setItem("alpaca_api_key", key);
      localStorage.setItem("alpaca_api_secret", secret);
      setApiConfigured(true);
      fetchNews(key, secret);
    }
  };

  // Использовать дефолтные ключи
  const useDefaultKeys = () => {
    if (DEFAULT_API_KEY && DEFAULT_API_SECRET) {
      setApiKey(DEFAULT_API_KEY);
      setApiSecret(DEFAULT_API_SECRET);
      saveApiKeys(DEFAULT_API_KEY, DEFAULT_API_SECRET);
    } else {
      setError("Дефолтные ключи не настроены. Обратитесь к разработчику.");
    }
  };

  const loadSavedKeys = () => {
    const savedKey = localStorage.getItem("alpaca_api_key");
    const savedSecret = localStorage.getItem("alpaca_api_secret");
    if (savedKey && savedSecret) {
      setApiKey(savedKey);
      setApiSecret(savedSecret);
      setApiConfigured(true);
      fetchNews(savedKey, savedSecret);
    }
  };

  const fetchNews = async (key = apiKey, secret = apiSecret) => {
    if (!key || !secret) {
      setNews(defaultNews);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Alpaca News API endpoint
      const response = await fetch(
        `https://data.alpaca.markets/v1beta1/news?symbols=${symbol}&limit=12`,
        {
          headers: {
            "APCA-API-KEY-ID": key,
            "APCA-API-SECRET-KEY": secret,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Ошибка загрузки новостей");
      }

      const data = await response.json();
      const formattedNews = (data.news || []).map((item) => ({
        ...item,
        symbols: item.symbols || [], //确保 symbols  всегда массив
      }));
      setNews(formattedNews);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Не удалось загрузить новости. Используются демо-данные.");
      setNews(defaultNews);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSavedKeys();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 2 }}
      >
        Новости рынка
      </Typography>
      <Typography
        variant="h6"
        component="p"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Актуальные новости по тикерам через Alpaca API
      </Typography>

      {/* API Configuration Panel */}
      <Card
        sx={{
          mb: 4,
          p: 3,
          background: "rgba(255,255,255,0.9)",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <ArticleIcon color="primary" />
          Настройка Alpaca API
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Введите ваши API ключи от Alpaca Markets для получения реальных
          новостей. Если ключи не указаны, будут отображаться демо-новости.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Введите API Key"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="API Secret"
              value={apiSecret}
              onChange={(e) => setApiSecret(e.target.value)}
              placeholder="Введите API Secret"
              type="password"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              fullWidth
              label="Тикер"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              placeholder="AAPL"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => saveApiKeys(apiKey, apiSecret)}
              sx={{ height: "40px" }}
            >
              Сохранить
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<KeyIcon />}
            onClick={useDefaultKeys}
            size="small"
            sx={{
              borderColor: "#0071e3",
              color: "#0071e3",
              "&:hover": {
                borderColor: "#005bb5",
                bgcolor: "rgba(0,113,227,0.05)",
              },
            }}
          >
            Использовать дефолтные ключи
          </Button>

          {apiConfigured && (
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={() => fetchNews()}
              size="small"
            >
              Обновить новости
            </Button>
          )}
        </Box>
      </Card>

      {/* News List */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress />
        </Box>
      ) : error && !news.length ? (
        <Alert severity="warning" sx={{ borderRadius: "16px" }}>
          {error}
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {news.map((item, index) => (
            <Grid item xs={12} md={6} key={item.id || index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "20px",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    {item.symbols && item.symbols.length > 0 ? (
                      <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                        {item.symbols.slice(0, 3).map((sym, idx) => (
                          <Chip
                            key={idx}
                            label={sym}
                            size="small"
                            sx={{
                              bgcolor: "#0071e3 !important",
                              color: "#ffffff !important",
                              fontWeight: 600,
                              borderRadius: "12px",
                              height: "24px",
                              fontSize: "0.7rem",
                              "& .MuiChip-label": {
                                px: 1,
                                py: 0,
                                color: "#ffffff !important",
                              },
                            }}
                          />
                        ))}
                        {item.symbols.length > 3 && (
                          <Chip
                            label={`+${item.symbols.length - 3}`}
                            size="small"
                            sx={{
                              bgcolor: "rgba(0,113,227,0.1)",
                              color: "#0071e3",
                              fontWeight: 500,
                              borderRadius: "12px",
                              height: "24px",
                            }}
                          />
                        )}
                      </Box>
                    ) : null}
                    <Typography variant="caption" color="text.secondary">
                      {formatDate(item.created_at)}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {item.headline}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {item.summary}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {item.author || "Alpaca News"}
                    </Typography>
                    <IconButton
                      size="small"
                      href={item.url}
                      target="_blank"
                      sx={{
                        color: "#0071e3",
                        "&:hover": { bgcolor: "rgba(0,113,227,0.05)" },
                      }}
                    >
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {news.length === 0 && !loading && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="body1" color="text.secondary">
            Нет новостей для отображения. Попробуйте другой тикер или настройте
            API.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default News;
