# Orient Logic Backend — Yandex Cloud Function

Backend для обработки формы обратной связи сайта Orient Logic.

## 🔧 Технологии

- **Runtime:** Node.js 18+
- **Platform:** Yandex Cloud Functions
- **API:** Yandex API Gateway
- **Notifications:** Telegram Bot API

## 📦 Структура

```
backend/
├── index.js              # Основной handler функции
├── package.json          # Зависимости проекта
├── api-gateway.yaml      # OpenAPI спецификация для API Gateway
└── README.md             # Документация
```

## 🚀 Локальная разработка

### Установка зависимостей

```bash
npm install
```

### Тестирование локально

Создайте файл `test.js`:

```javascript
const { handler } = require('./index');

// Установите переменные окружения
process.env.TELEGRAM_BOT_TOKEN = 'your_bot_token';
process.env.TELEGRAM_CHAT_ID = 'your_chat_id';

// Тестовое событие
const event = {
  httpMethod: 'POST',
  body: JSON.stringify({
    name: 'Test User',
    contact: '+7 999 123 45 67',
    message: 'Test message'
  }),
  isBase64Encoded: false
};

// Запуск handler
handler(event, {}).then(response => {
  console.log('Response:', JSON.stringify(response, null, 2));
}).catch(error => {
  console.error('Error:', error);
});
```

Запустите:
```bash
node test.js
```

## 📤 Развертывание

### Шаг 1: Создание функции

```bash
yc serverless function create --name orient-logic-contact-form
```

### Шаг 2: Загрузка кода

```bash
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<your_token> \
  --environment TELEGRAM_CHAT_ID=<your_chat_id> \
  --environment NODE_ENV=production
```

### Шаг 3: Сделать функцию публичной

```bash
yc serverless function allow-unauthenticated-invoke orient-logic-contact-form
```

### Шаг 4: Создать API Gateway

```bash
yc serverless api-gateway create \
  --name orient-logic-api \
  --spec api-gateway.yaml
```

## 🔐 Переменные окружения

| Переменная | Описание | Пример |
|------------|----------|--------|
| `TELEGRAM_BOT_TOKEN` | Токен Telegram бота от [@BotFather](https://t.me/BotFather) | `1234567890:ABCdef...` |
| `TELEGRAM_CHAT_ID` | ID чата для уведомлений | `123456789` |
| `NODE_ENV` | Окружение (production/development) | `production` |

## 📝 API Specification

### POST /contact

Отправка формы обратной связи.

**Request Body:**
```json
{
  "name": "Иван Иванов",
  "contact": "+7 (999) 123-45-67",
  "message": "Интересует доставка груза из Гуанчжоу"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Your request has been submitted successfully"
}
```

**Response (400 Bad Request):**
```json
{
  "error": "Missing required fields: name, contact, or message"
}
```

**Response (500 Internal Server Error):**
```json
{
  "error": "Internal server error"
}
```

## 🧪 Тестирование

### Через curl

```bash
curl -X POST https://your-api-gateway.apigw.yandexcloud.net/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "contact": "+7 999 123 45 67",
    "message": "Test message"
  }'
```

### Через Yandex CLI

```bash
# Создайте файл test-payload.json
echo '{
  "httpMethod": "POST",
  "body": "{\"name\":\"Test\",\"contact\":\"+7 999 123 45 67\",\"message\":\"Test\"}",
  "isBase64Encoded": false
}' > test-payload.json

# Вызовите функцию
yc serverless function invoke orient-logic-contact-form \
  --data-file test-payload.json
```

## 📊 Мониторинг

### Просмотр логов

```bash
# Последние логи
yc serverless function logs orient-logic-contact-form

# В реальном времени
yc serverless function logs orient-logic-contact-form --follow

# За последний час
yc serverless function logs orient-logic-contact-form --since 1h
```

### Метрики

Метрики доступны в веб-консоли:
```
https://console.cloud.yandex.ru/folders/<folder-id>/serverless-functions
```

## 🔄 Обновление функции

```bash
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<your_token> \
  --environment TELEGRAM_CHAT_ID=<your_chat_id>
```

## 🐛 Troubleshooting

### Функция возвращает 500 ошибку

1. Проверьте логи:
   ```bash
   yc serverless function logs orient-logic-contact-form
   ```

2. Убедитесь, что переменные окружения установлены:
   ```bash
   yc serverless function version list --function-name orient-logic-contact-form
   ```

### Не приходят уведомления в Telegram

1. Проверьте токен бота (отправьте запрос к API Telegram):
   ```bash
   curl https://api.telegram.org/bot<TOKEN>/getMe
   ```

2. Убедитесь, что вы написали боту первое сообщение

3. Проверьте Chat ID (должен быть числом, не username)

### CORS ошибки

Убедитесь, что в `api-gateway.yaml` есть обработчик OPTIONS запроса и установлены правильные CORS заголовки.

## 📞 Поддержка

- Email: orientlogic@bk.ru
- Telegram: [@orientlogic](https://t.me/+79186798706)

---

**Made with ❤️ for Orient Logic**
