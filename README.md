# Orient Logic — Сайт-визитка логистической компании

![Orient Logic](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Yandex Cloud](https://img.shields.io/badge/Yandex-Cloud-red?style=flat-square)

Production-ready сайт-визитка для логистической компании **Orient Logic**, специализирующейся на международных грузоперевозках из Китая в Россию.

## 🎯 Особенности

- ⚡ **Next.js 14** с App Router и TypeScript
- 🎨 **Tailwind CSS** для современного дизайна
- 📱 **Полностью адаптивный** дизайн (mobile/tablet/desktop)
- 🚀 **Serverless архитектура** на Yandex Cloud
- 📧 **Форма обратной связи** с отправкой в Telegram
- 🔒 **Production-ready** решение
- ♿ **Доступность** и SEO оптимизация

## 📦 Технологический стек

### Frontend
- **Framework:** Next.js 14 (React 18, TypeScript)
- **Стилизация:** Tailwind CSS
- **Иконки:** React Icons
- **Формы:** React Hook Form
- **Анимации:** Framer Motion

### Backend
- **Платформа:** Yandex Cloud
- **Functions:** Node.js 18+
- **API Gateway:** Yandex API Gateway
- **Уведомления:** Telegram Bot API

### Hosting
- **Статика:** Yandex Object Storage + CDN
- **Backend:** Yandex Cloud Functions

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+ и npm/yarn
- Аккаунт в [Yandex Cloud](https://cloud.yandex.ru/)
- Telegram бот (создать через [@BotFather](https://t.me/BotFather))

### Локальная разработка

1. **Клонируйте репозиторий:**
```bash
git clone <repository-url>
cd orient-logic
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Создайте файл `.env.local`:**
```bash
# API Gateway URL (для разработки можно оставить пустым)
NEXT_PUBLIC_API_GATEWAY_URL=http://localhost:3000/api/contact
```

4. **Запустите dev-сервер:**
```bash
npm run dev
```

5. **Откройте браузер:**
```
http://localhost:3000
```

## 🏗️ Структура проекта

```
orient-logic/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Главный layout
│   │   ├── page.tsx             # Главная страница
│   │   ├── about/               # Страница "О компании"
│   │   ├── services/            # Страница "Услуги"
│   │   ├── contacts/            # Страница "Контакты"
│   │   └── globals.css          # Глобальные стили
│   └── components/              # React компоненты
│       ├── Header.tsx           # Шапка сайта
│       ├── Footer.tsx           # Подвал сайта
│       ├── ContactForm.tsx      # Форма обратной связи
│       └── home/                # Компоненты главной страницы
│           ├── HeroSection.tsx
│           ├── AboutPreview.tsx
│           ├── ServicesPreview.tsx
│           ├── Advantages.tsx
│           ├── Statistics.tsx
│           └── CTASection.tsx
├── backend/                      # Backend для Yandex Cloud
│   ├── index.js                 # Cloud Function handler
│   ├── package.json
│   ├── api-gateway.yaml         # OpenAPI спецификация
│   └── .env.example
├── public/                       # Статические файлы
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 📄 Страницы сайта

1. **Главная** (`/`) — Hero-секция, краткая информация, услуги, преимущества
2. **О компании** (`/about`) — История, миссия, география работы
3. **Услуги** (`/services`) — Полный список логистических услуг
4. **Контакты** (`/contacts`) — Контактная информация и форма обратной связи

## 🔧 Сборка для production

```bash
# Сборка статического сайта
npm run build

# Результат будет в папке /out
```

## ☁️ Развертывание в Yandex Cloud

### Шаг 1: Создание Telegram бота

1. Напишите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям и сохраните токен
4. Получите свой Chat ID через [@userinfobot](https://t.me/userinfobot)

### Шаг 2: Установка Yandex Cloud CLI

```bash
# Установка CLI (macOS/Linux)
curl https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash

# Инициализация
yc init
```

### Шаг 3: Создание Cloud Function

1. **Перейдите в папку backend:**
```bash
cd backend
```

2. **Создайте функцию:**
```bash
yc serverless function create --name=orient-logic-contact-form
```

3. **Загрузите код функции:**
```bash
yc serverless function version create \
  --function-name=orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<ваш_токен> \
  --environment TELEGRAM_CHAT_ID=<ваш_chat_id>
```

4. **Сделайте функцию публичной:**
```bash
yc serverless function allow-unauthenticated-invoke orient-logic-contact-form
```

5. **Получите ID функции:**
```bash
yc serverless function get orient-logic-contact-form
```

### Шаг 4: Создание API Gateway

1. **Отредактируйте `backend/api-gateway.yaml`:**
   - Замените `<YOUR_FUNCTION_ID>` на ID вашей функции
   - Замените `<YOUR_SERVICE_ACCOUNT_ID>` на ID вашего сервисного аккаунта

2. **Создайте API Gateway:**
```bash
yc serverless api-gateway create \
  --name orient-logic-api \
  --spec=api-gateway.yaml \
  --description="API Gateway for Orient Logic"
```

3. **Получите URL API Gateway:**
```bash
yc serverless api-gateway get orient-logic-api
```

### Шаг 5: Развертывание Frontend

1. **Создайте бакет в Object Storage:**
```bash
yc storage bucket create orient-logic-site \
  --public-read \
  --public-list
```

2. **Настройте бакет для хостинга:**
```bash
yc storage bucket update orient-logic-site \
  --website-settings '{"index": "index.html", "error": "404.html"}'
```

3. **Обновите `.env.local` с URL API Gateway:**
```bash
NEXT_PUBLIC_API_GATEWAY_URL=https://your-gateway-id.apigw.yandexcloud.net/contact
```

4. **Соберите проект:**
```bash
npm run build
```

5. **Загрузите файлы в Object Storage:**
```bash
# Установите утилиту s3cmd или используйте веб-интерфейс
yc storage s3api put-object \
  --bucket orient-logic-site \
  --key index.html \
  --body out/index.html
```

Или используйте [веб-интерфейс](https://console.cloud.yandex.ru/folders/<folder-id>/storage) для загрузки всех файлов из папки `out/`.

6. **Настройте CDN (опционально):**
```bash
yc cdn resource create \
  --cname orientlogic.ru \
  --origin orient-logic-site.website.yandexcloud.net
```

### Шаг 6: Настройка домена

1. В настройках вашего домена `orientlogic.ru` добавьте CNAME запись:
```
CNAME @ <cdn-url>.cdn.yandexcloud.net
```

2. Или для Object Storage напрямую:
```
CNAME @ orient-logic-site.website.yandexcloud.net
```

## 🔐 Переменные окружения

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_GATEWAY_URL=https://your-gateway-id.apigw.yandexcloud.net/contact
```

### Backend (в настройках Cloud Function)
```bash
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
NODE_ENV=production
```

## 🧪 Тестирование

### Локальное тестирование формы

Для тестирования формы локально без backend, форма покажет ошибку, но вы сможете проверить валидацию и UI.

### Тестирование Cloud Function

```bash
# Тест через curl
curl -X POST https://your-gateway-id.apigw.yandexcloud.net/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "contact": "+7 999 123 45 67",
    "message": "Test message"
  }'
```

## 📱 Контактная информация

- **Email:** orientlogic@bk.ru
- **Телефон:** +7 (918) 679-87-06, +7 (961) 850-61-31
- **Telegram:** [@orientlogic](https://t.me/+79186798706)
- **WhatsApp:** [Написать](https://wa.me/79186798706)
- **Сайт:** [orientlogic.ru](https://orientlogic.ru)

## 🛠️ Скрипты

```bash
# Разработка
npm run dev          # Запуск dev-сервера

# Production
npm run build        # Сборка статического сайта
npm run start        # Запуск production-сервера (для тестирования)

# Утилиты
npm run lint         # Проверка кода ESLint
```

## 🎨 Дизайн

- **Цвета:** Синий (#0070f3), Голубой (#00a0e9), Белый, Серый
- **Шрифт:** Inter (Google Fonts)
- **Стиль:** Современный минимализм, корпоративный
- **Адаптивность:** Mobile-first подход

## 📈 Масштабирование

Проект готов к масштабированию и добавлению новых функций:

- 📊 Калькулятор стоимости доставки
- 👤 Личный кабинет клиента
- 📦 Отслеживание грузов
- 💳 Онлайн оплата
- 🌐 Мультиязычность
- 📊 Админ-панель

## 🐛 Troubleshooting

### Форма не отправляется
- Проверьте URL API Gateway в `.env.local`
- Убедитесь, что Cloud Function запущена и доступна
- Проверьте логи функции: `yc serverless function logs orient-logic-contact-form`

### Не приходят уведомления в Telegram
- Проверьте токен бота и Chat ID
- Убедитесь, что вы написали боту первое сообщение
- Проверьте переменные окружения в настройках функции

### Ошибки при сборке
- Убедитесь, что используете Node.js 18+
- Удалите `node_modules` и `.next`, установите зависимости заново
- Проверьте логи сборки на наличие конкретных ошибок

## 📝 Лицензия

© 2024 Orient Logic. Все права защищены.

## 🤝 Поддержка

Если у вас возникли вопросы по развертыванию или использованию проекта, свяжитесь с нами:

- Email: orientlogic@bk.ru
- Telegram: [@orientlogic](https://t.me/+79186798706)

---

**Сделано с ❤️ для Orient Logic**
