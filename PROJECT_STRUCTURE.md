# Структура проекта Orient Logic

```
orient-logic/
│
├── 📁 src/                                # Исходный код приложения
│   ├── 📁 app/                           # Next.js App Router
│   │   ├── 📄 layout.tsx                # Главный layout приложения
│   │   ├── 📄 page.tsx                  # Главная страница (/)
│   │   ├── 📄 globals.css               # Глобальные стили
│   │   │
│   │   ├── 📁 about/                    # Страница "О компании"
│   │   │   └── 📄 page.tsx              # /about
│   │   │
│   │   ├── 📁 services/                 # Страница "Услуги"
│   │   │   └── 📄 page.tsx              # /services
│   │   │
│   │   └── 📁 contacts/                 # Страница "Контакты"
│   │       └── 📄 page.tsx              # /contacts
│   │
│   └── 📁 components/                    # React компоненты
│       ├── 📄 Header.tsx                # Шапка сайта с навигацией
│       ├── 📄 Footer.tsx                # Подвал сайта
│       ├── 📄 ContactForm.tsx           # Форма обратной связи
│       │
│       └── 📁 home/                     # Компоненты главной страницы
│           ├── 📄 HeroSection.tsx       # Hero-секция с призывом
│           ├── 📄 AboutPreview.tsx      # Превью о компании
│           ├── 📄 ServicesPreview.tsx   # Превью услуг
│           ├── 📄 Advantages.tsx        # Преимущества компании
│           ├── 📄 Statistics.tsx        # Статистика (цифры)
│           └── 📄 CTASection.tsx        # Call-to-Action секция
│
├── 📁 backend/                           # Backend (Yandex Cloud Functions)
│   ├── 📄 index.js                      # Handler Cloud Function
│   ├── 📄 package.json                  # Зависимости backend
│   ├── 📄 api-gateway.yaml              # OpenAPI спецификация
│   ├── 📄 test-payload.json             # Тестовые данные
│   └── 📄 README.md                     # Документация backend
│
├── 📁 public/                            # Статические файлы
│   ├── 📄 favicon.ico                   # Иконка сайта
│   ├── 📄 robots.txt                    # Правила для поисковых роботов
│   ├── 📄 sitemap.xml                   # Карта сайта для SEO
│   └── 📄 manifest.json                 # PWA манифест
│
├── 📁 scripts/                           # Скрипты для развертывания
│   ├── 📄 deploy-to-s3.sh              # Деплой frontend в Object Storage
│   ├── 📄 deploy-function.sh           # Деплой Cloud Function
│   └── 📄 test-api.sh                  # Тестирование API Gateway
│
├── 📁 .vscode/                          # Настройки VS Code
│   ├── 📄 settings.json                # Настройки редактора
│   └── 📄 extensions.json              # Рекомендуемые расширения
│
├── 📁 node_modules/                     # Зависимости (генерируется)
├── 📁 .next/                            # Сборка Next.js (генерируется)
├── 📁 out/                              # Статическая сборка (генерируется)
│
├── 📄 package.json                      # Зависимости проекта
├── 📄 package-lock.json                 # Lock-файл зависимостей
├── 📄 tsconfig.json                     # Конфигурация TypeScript
├── 📄 next.config.js                    # Конфигурация Next.js
├── 📄 tailwind.config.js                # Конфигурация Tailwind CSS
├── 📄 postcss.config.js                 # Конфигурация PostCSS
├── 📄 .eslintrc.json                    # Правила ESLint
├── 📄 .gitignore                        # Игнорируемые файлы Git
│
├── 📄 README.md                         # Главная документация
├── 📄 DEPLOYMENT.md                     # Инструкция по развертыванию
├── 📄 CONTRIBUTING.md                   # Руководство для контрибьюторов
├── 📄 CHANGELOG.md                      # История изменений
├── 📄 PROJECT_STRUCTURE.md              # Этот файл
└── 📄 LICENSE                           # Лицензия MIT
```

## 📝 Описание основных директорий

### 🎨 src/app/
Next.js App Router — основная структура приложения. Каждая папка создает новый маршрут.

**Особенности:**
- `layout.tsx` — общий layout для всех страниц
- `page.tsx` — содержимое конкретной страницы
- Автоматическая генерация маршрутов на основе структуры папок

### 🧩 src/components/
Переиспользуемые React компоненты.

**Структура:**
- Корневые компоненты: `Header`, `Footer`, `ContactForm`
- `home/` — компоненты специфичные для главной страницы

### ⚡ backend/
Serverless backend на Yandex Cloud Functions.

**Файлы:**
- `index.js` — основная логика обработки формы
- `api-gateway.yaml` — описание REST API
- `test-payload.json` — для тестирования функции

### 🗂️ public/
Статические файлы, доступные по корневому URL.

**Содержимое:**
- Favicon и иконки
- SEO файлы (robots.txt, sitemap.xml)
- PWA манифест

### 🔧 scripts/
Bash-скрипты для автоматизации развертывания.

**Использование:**
```bash
chmod +x scripts/*.sh
./scripts/deploy-to-s3.sh
```

### ⚙️ Конфигурационные файлы

- **tsconfig.json** — настройки TypeScript компилятора
- **next.config.js** — конфигурация Next.js (export, images, etc.)
- **tailwind.config.js** — кастомизация Tailwind CSS
- **.eslintrc.json** — правила линтинга кода

## 🔄 Генерируемые директории

### .next/
Создается при `npm run dev` или `npm run build`. Содержит скомпилированный код Next.js.

**Не коммитить в Git!**

### out/
Создается при `npm run build` (статический export). Содержит готовые HTML/CSS/JS файлы для развертывания.

**Загружается в Object Storage!**

### node_modules/
Устанавливается при `npm install`. Содержит все зависимости проекта.

**Не коммитить в Git!**

## 📊 Размер проекта

```
Исходный код:      ~500 KB
node_modules:      ~200 MB
Сборка (.next):    ~50 MB
Статика (out):     ~5 MB
```

## 🔗 Взаимодействие компонентов

```
┌─────────────────────────────────────────┐
│           User Browser                   │
│  ┌─────────────────────────────────┐   │
│  │   Frontend (Next.js)            │   │
│  │   - React Components            │   │
│  │   - Tailwind CSS                │   │
│  │   - Contact Form                │   │
│  └──────────┬──────────────────────┘   │
└─────────────┼───────────────────────────┘
              │
              │ HTTPS POST /contact
              ▼
┌──────────────────────────────────────────┐
│    Yandex API Gateway                    │
│    - CORS handling                       │
│    - Request routing                     │
└──────────────┬───────────────────────────┘
               │
               │ Invoke Function
               ▼
┌──────────────────────────────────────────┐
│    Yandex Cloud Function                 │
│    - Parse request body                  │
│    - Validate data                       │
│    - Format message                      │
└──────────────┬───────────────────────────┘
               │
               │ Send message
               ▼
┌──────────────────────────────────────────┐
│    Telegram Bot API                      │
│    - Deliver notification                │
└──────────────┬───────────────────────────┘
               │
               ▼
         User's Telegram
```

## 🎯 Соглашения по именованию

### Файлы
- **Компоненты:** PascalCase (`Header.tsx`, `ContactForm.tsx`)
- **Страницы:** lowercase (`page.tsx`, `layout.tsx`)
- **Стили:** kebab-case (`globals.css`)
- **Конфигурация:** lowercase (`next.config.js`)

### Переменные
- **React компоненты:** PascalCase (`<Header />`)
- **Переменные:** camelCase (`const userName = ...`)
- **Константы:** UPPER_SNAKE_CASE (`const API_URL = ...`)
- **CSS классы:** kebab-case (`btn-primary`)

### Функции
- **Обработчики:** `handleClick`, `handleSubmit`
- **Утилиты:** `formatDate`, `validateEmail`
- **API:** `fetchData`, `sendMessage`

## 🚀 Точки входа

### Development
```
npm run dev → http://localhost:3000
```

### Production
```
npm run build → ./out/ → Object Storage → https://orientlogic.ru
```

### Backend
```
Cloud Function → API Gateway → https://xxx.apigw.yandexcloud.net/contact
```

## 📦 Зависимости

### Frontend (production)
- next
- react
- react-dom
- framer-motion
- react-icons
- react-hook-form

### Frontend (development)
- typescript
- tailwindcss
- eslint
- postcss
- autoprefixer

### Backend
- Нет внешних зависимостей (только Node.js встроенные модули)

## 🔐 Переменные окружения

### Frontend (.env.local)
```
NEXT_PUBLIC_API_GATEWAY_URL
```

### Backend (Cloud Function settings)
```
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
NODE_ENV
```

## 📈 Масштабирование

Проект готов к добавлению новых функций:

```
src/
  app/
    calculator/      # Калькулятор доставки
    tracking/        # Отслеживание грузов
    blog/            # Блог
    dashboard/       # Личный кабинет
  components/
    calculator/      # Компоненты калькулятора
    tracking/        # Компоненты трекинга
  utils/             # Утилиты
  hooks/             # Custom React hooks
  lib/               # Библиотеки
  types/             # TypeScript типы
```

---

**Обновлено:** 2024-01-12
