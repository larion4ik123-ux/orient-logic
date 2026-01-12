# 🚀 Быстрый старт Orient Logic

Пошаговое руководство для быстрого запуска проекта.

## ⚡ Локальная разработка (5 минут)

```bash
# 1. Установите зависимости
npm install

# 2. Запустите dev-сервер
npm run dev

# 3. Откройте браузер
# http://localhost:3000
```

✅ **Готово!** Сайт работает локально.

## ☁️ Развертывание в Yandex Cloud (30 минут)

### Шаг 1: Подготовка (5 минут)

1. **Создайте Telegram бота:**
   - Напишите [@BotFather](https://t.me/BotFather)
   - Команда: `/newbot`
   - Сохраните токен

2. **Получите Chat ID:**
   - Напишите [@userinfobot](https://t.me/userinfobot)
   - Сохраните ваш Chat ID

3. **Установите Yandex CLI:**
   ```bash
   # macOS/Linux
   curl https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash
   
   # Windows
   # Скачайте с cloud.yandex.ru/docs/cli/quickstart
   
   # Инициализация
   yc init
   ```

### Шаг 2: Backend (10 минут)

```bash
cd backend

# Создайте функцию
yc serverless function create --name orient-logic-contact-form

# Загрузите код (замените токены!)
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<ВАШ_ТОКЕН> \
  --environment TELEGRAM_CHAT_ID=<ВАШ_CHAT_ID>

# Сделайте публичной
yc serverless function allow-unauthenticated-invoke orient-logic-contact-form

# Получите Function ID
yc serverless function get orient-logic-contact-form
```

### Шаг 3: API Gateway (5 минут)

```bash
# 1. Отредактируйте api-gateway.yaml
# Замените <YOUR_FUNCTION_ID> на ваш Function ID

# 2. Создайте API Gateway
yc serverless api-gateway create \
  --name orient-logic-api \
  --spec api-gateway.yaml

# 3. Получите URL
yc serverless api-gateway get orient-logic-api
# Сохраните domain (например: xxx.apigw.yandexcloud.net)
```

### Шаг 4: Frontend (10 минут)

```bash
cd ..

# 1. Создайте .env.local
echo "NEXT_PUBLIC_API_GATEWAY_URL=https://xxx.apigw.yandexcloud.net/contact" > .env.local

# 2. Соберите проект
npm run build

# 3. Создайте бакет
yc storage bucket create orient-logic-site --public-read

# 4. Настройте хостинг
yc storage bucket update orient-logic-site \
  --website-settings '{"index": "index.html"}'

# 5. Загрузите файлы (требуется AWS CLI)
aws s3 sync ./out/ s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --acl public-read
```

### Шаг 5: Проверка

```bash
# URL сайта:
http://orient-logic-site.website.yandexcloud.net

# Тест формы:
curl -X POST https://xxx.apigw.yandexcloud.net/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","contact":"+7 999 999 99 99","message":"Test"}'
```

## 🌐 Настройка домена (опционально)

В настройках домена `orientlogic.ru` добавьте:

```
Тип: CNAME
Имя: @
Значение: orient-logic-site.website.yandexcloud.net
```

## 📋 Чеклист

- [ ] Node.js 18+ установлен
- [ ] Yandex CLI установлен и настроен
- [ ] Telegram бот создан
- [ ] Chat ID получен
- [ ] Cloud Function создана
- [ ] API Gateway создан
- [ ] Object Storage настроен
- [ ] Файлы загружены
- [ ] Сайт работает
- [ ] Форма отправляет в Telegram

## 🆘 Проблемы?

### Форма не работает
```bash
# Проверьте логи функции
yc serverless function logs orient-logic-contact-form
```

### Не приходят уведомления
- Проверьте токен и Chat ID
- Напишите боту первое сообщение

### Сайт не открывается
- Проверьте настройки бакета (public-read)
- Подождите 5-10 минут

## 📚 Полная документация

- [README.md](README.md) — Основная документация
- [DEPLOYMENT.md](DEPLOYMENT.md) — Детальная инструкция
- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) — Структура проекта

## 💬 Поддержка

- Email: orientlogic@bk.ru
- Telegram: [@orientlogic](https://t.me/+79186798706)

---

**Время развертывания: ~30 минут | Стоимость: ~150₽/мес**
