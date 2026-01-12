# ⚡ Быстрые команды

Все команды для работы с проектом Orient Logic в одном месте.

---

## 🚀 Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
# → http://localhost:3000

# Сборка проекта
npm run build

# Запуск production-сервера (для теста)
npm run start

# Проверка кода
npm run lint
```

---

## 📦 Проверка проекта

```bash
# Проверка TypeScript
npx tsc --noEmit

# Проверка всех файлов
npm run lint

# Форматирование кода (если установлен Prettier)
npx prettier --write "src/**/*.{ts,tsx,css}"
```

---

## ☁️ Yandex Cloud CLI

### Установка и настройка

```bash
# Установка CLI (macOS/Linux)
curl https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash

# Установка CLI (Windows PowerShell)
iex (New-Object System.Net.WebClient).DownloadString('https://storage.yandexcloud.net/yandexcloud-yc/install.ps1')

# Инициализация
yc init

# Проверка версии
yc version

# Список каталогов
yc resource-manager folder list
```

### Cloud Functions

```bash
# Создание функции
yc serverless function create --name orient-logic-contact-form

# Загрузка версии функции
cd backend
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<TOKEN> \
  --environment TELEGRAM_CHAT_ID=<CHAT_ID>

# Публичный доступ
yc serverless function allow-unauthenticated-invoke orient-logic-contact-form

# Получение информации
yc serverless function get orient-logic-contact-form

# Просмотр логов
yc serverless function logs orient-logic-contact-form

# Логи в реальном времени
yc serverless function logs orient-logic-contact-form --follow

# Вызов функции для теста
yc serverless function invoke orient-logic-contact-form \
  --data-file test-payload.json

# Список всех функций
yc serverless function list

# Удаление функции (осторожно!)
# yc serverless function delete orient-logic-contact-form
```

### API Gateway

```bash
# Создание API Gateway
yc serverless api-gateway create \
  --name orient-logic-api \
  --spec backend/api-gateway.yaml \
  --description "API Gateway for Orient Logic"

# Получение информации
yc serverless api-gateway get orient-logic-api

# Обновление спецификации
yc serverless api-gateway update orient-logic-api \
  --spec backend/api-gateway.yaml

# Список всех API Gateway
yc serverless api-gateway list

# Удаление (осторожно!)
# yc serverless api-gateway delete orient-logic-api
```

### Object Storage

```bash
# Создание бакета
yc storage bucket create orient-logic-site \
  --public-read \
  --public-list

# Настройка веб-хостинга
yc storage bucket update orient-logic-site \
  --website-settings '{"index": "index.html", "error": "404.html"}'

# Получение информации
yc storage bucket get orient-logic-site

# Список всех бакетов
yc storage bucket list

# Удаление бакета (осторожно!)
# yc storage bucket delete orient-logic-site
```

---

## 🗄️ AWS CLI (для S3)

### Установка

```bash
# macOS
brew install awscli

# Linux
pip install awscli

# Windows
# Скачайте с https://aws.amazon.com/cli/

# Проверка версии
aws --version
```

### Настройка

```bash
# Настройка профиля для Yandex Cloud
aws configure --profile yc

# Введите:
# AWS Access Key ID: <ваш key_id>
# AWS Secret Access Key: <ваш secret>
# Default region name: ru-central1
# Default output format: json
```

### Загрузка файлов

```bash
# Загрузка всех файлов из out/
aws s3 sync ./out/ s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --acl public-read

# Загрузка с удалением старых файлов
aws s3 sync ./out/ s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --acl public-read \
  --delete

# Список файлов в бакете
aws s3 ls s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --recursive

# Удаление всех файлов (осторожно!)
# aws s3 rm s3://orient-logic-site --recursive \
#   --endpoint-url=https://storage.yandexcloud.net \
#   --profile yc
```

---

## 🧪 Тестирование

### Тест формы (curl)

```bash
# POST запрос к API Gateway
curl -X POST https://YOUR_GATEWAY.apigw.yandexcloud.net/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "contact": "+7 999 123 45 67",
    "message": "Test message"
  }'
```

### Тест через скрипт

```bash
# Сделайте скрипт исполняемым
chmod +x scripts/*.sh

# Запустите тест
./scripts/test-api.sh
```

---

## 📤 Деплой

### Автоматический деплой

```bash
# Frontend в Object Storage
./scripts/deploy-to-s3.sh

# Backend Cloud Function
./scripts/deploy-function.sh

# Тест API
./scripts/test-api.sh
```

### Ручной деплой

```bash
# 1. Сборка frontend
npm run build

# 2. Загрузка в Object Storage
aws s3 sync ./out/ s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --acl public-read \
  --delete

# 3. Обновление функции
cd backend
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<TOKEN> \
  --environment TELEGRAM_CHAT_ID=<CHAT_ID>
```

---

## 🔍 Диагностика

### Проверка сервисов

```bash
# Проверка функции
yc serverless function get orient-logic-contact-form

# Проверка API Gateway
yc serverless api-gateway get orient-logic-api

# Проверка бакета
yc storage bucket get orient-logic-site

# Логи функции (последние 100 строк)
yc serverless function logs orient-logic-contact-form --limit 100

# Логи за последний час
yc serverless function logs orient-logic-contact-form --since 1h
```

### Тест Telegram бота

```bash
# Получение информации о боте
curl https://api.telegram.org/bot<TOKEN>/getMe

# Получение обновлений
curl https://api.telegram.org/bot<TOKEN>/getUpdates

# Отправка тестового сообщения
curl -X POST https://api.telegram.org/bot<TOKEN>/sendMessage \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": "<CHAT_ID>",
    "text": "Test message from Orient Logic"
  }'
```

---

## 🛠️ Управление зависимостями

```bash
# Установка зависимостей
npm install

# Обновление зависимостей
npm update

# Проверка устаревших пакетов
npm outdated

# Установка конкретной версии
npm install package-name@version

# Удаление пакета
npm uninstall package-name

# Очистка кэша
npm cache clean --force

# Пересоздание lock-файла
rm package-lock.json
npm install
```

---

## 📊 Полезные команды

```bash
# Размер node_modules
du -sh node_modules

# Количество файлов в проекте
find . -type f | wc -l

# Строки кода (без node_modules)
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l

# Открыть в VS Code
code .

# Открыть документацию
open README.md

# Открыть сайт локально
open http://localhost:3000
```

---

## 🧹 Очистка

```bash
# Удаление зависимостей
rm -rf node_modules

# Удаление сборки
rm -rf .next out

# Полная очистка
rm -rf node_modules .next out package-lock.json

# Переустановка
npm install
npm run build
```

---

## 📝 Git команды

```bash
# Инициализация репозитория
git init

# Добавление всех файлов
git add .

# Коммит
git commit -m "Initial commit"

# Добавление удаленного репозитория
git remote add origin <URL>

# Пуш
git push -u origin main

# Статус
git status

# История коммитов
git log --oneline

# Создание ветки
git checkout -b feature/new-feature

# Переключение веток
git checkout main
```

---

## 🔐 Переменные окружения

### Локальная разработка

```bash
# Создание .env.local
echo "NEXT_PUBLIC_API_GATEWAY_URL=https://xxx.apigw.yandexcloud.net/contact" > .env.local
```

### Production (Cloud Function)

```bash
# При создании версии функции указываются через --environment
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --environment TELEGRAM_BOT_TOKEN=<TOKEN> \
  --environment TELEGRAM_CHAT_ID=<CHAT_ID> \
  --environment NODE_ENV=production \
  ...
```

---

## 📞 Быстрая помощь

### Не работает локально?

```bash
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

### Ошибки TypeScript?

```bash
npx tsc --noEmit
```

### Не грузится в S3?

```bash
aws configure --profile yc
# Проверьте access key и secret key
```

### Не приходят уведомления в Telegram?

```bash
# Проверьте токен бота
curl https://api.telegram.org/bot<TOKEN>/getMe

# Проверьте логи функции
yc serverless function logs orient-logic-contact-form
```

---

## 🎯 Полезные ссылки

```bash
# Локальный сайт
http://localhost:3000

# Yandex Cloud Console
https://console.cloud.yandex.ru

# Telegram BotFather
https://t.me/BotFather

# Telegram UserInfoBot
https://t.me/userinfobot
```

---

## 📚 Документация

- [README.md](README.md) — основная документация
- [DEPLOYMENT.md](DEPLOYMENT.md) — деплой
- [QUICKSTART.md](QUICKSTART.md) — быстрый старт
- [START_HERE.md](START_HERE.md) — первые шаги

---

**Сохраните этот файл в закладки для быстрого доступа!** ⭐
