# 🚀 Полная инструкция по настройке и развертыванию Orient Logic

## 📋 Общий план (2-3 часа)

1. ✅ Создать Telegram бота (10 минут)
2. ✅ Зарегистрироваться в Yandex Cloud (15 минут)
3. ✅ Развернуть Backend (Cloud Function) (30 минут)
4. ✅ Развернуть Frontend (Object Storage) (30 минут)
5. ✅ Настроить домен orientlogic.ru (30 минут)
6. ✅ Протестировать сайт (15 минут)

---

## 🤖 ШАГ 1: Создание Telegram бота (10 минут)

### 1.1 Создайте бота

1. Откройте Telegram на телефоне или компьютере
2. Найдите **@BotFather** (официальный бот для создания ботов)
3. Напишите команду: `/start`
4. Напишите команду: `/newbot`
5. Введите имя бота: `Orient Logic Bot`
6. Введите username бота: `orient_logic_bot` (или любое доступное)
7. **СОХРАНИТЕ ТОКЕН!** Он выглядит так:
   ```
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

### 1.2 Получите Chat ID

1. Найдите в Telegram: **@userinfobot**
2. Нажмите `/start`
3. Бот покажет ваш Chat ID (например: `123456789`)
4. **СОХРАНИТЕ Chat ID!**

### 1.3 Отправьте первое сообщение боту

⚠️ **ВАЖНО!** Напишите вашему новому боту `/start` или любое сообщение.
Без этого бот не сможет отправлять вам уведомления!

### ✅ Чеклист

- [ ] Токен бота получен и сохранен
- [ ] Chat ID получен и сохранен
- [ ] Первое сообщение боту отправлено

---

## ☁️ ШАГ 2: Регистрация в Yandex Cloud (15 минут)

### 2.1 Создайте аккаунт

1. Перейдите на https://cloud.yandex.ru/
2. Нажмите **"Попробовать бесплатно"**
3. Войдите через Яндекс ID (или создайте аккаунт)
4. Подтвердите телефон
5. Привяжите банковскую карту (для активации пробного периода)

**🎁 Бонус:** 4000₽ на 60 дней бесплатно!

### 2.2 Создайте каталог (folder)

1. В консоли Yandex Cloud создайте новый каталог
2. Имя: `orient-logic` (или любое другое)
3. Запомните ID каталога

### 2.3 Установите Yandex Cloud CLI

**Windows (PowerShell):**
```powershell
iex (New-Object System.Net.WebClient).DownloadString('https://storage.yandexcloud.net/yandexcloud-yc/install.ps1')
```

**После установки перезапустите PowerShell!**

### 2.4 Инициализируйте CLI

```powershell
yc init
```

Следуйте инструкциям:
1. Получите OAuth токен (откроется браузер)
2. Выберите облако
3. Выберите каталог `orient-logic`

### 2.5 Проверьте настройку

```powershell
yc config list
```

Должен показать ваш токен, облако и каталог.

### ✅ Чеклист

- [ ] Аккаунт Yandex Cloud создан
- [ ] Пробный период активирован (4000₽)
- [ ] Каталог создан
- [ ] CLI установлен и настроен

---

## ⚡ ШАГ 3: Развертывание Backend (30 минут)

### 3.1 Создайте сервисный аккаунт

```powershell
# Создание сервисного аккаунта
yc iam service-account create --name orient-logic-sa --description "Service account for Orient Logic"

# Получите ID аккаунта
yc iam service-account get orient-logic-sa
```

**СОХРАНИТЕ SERVICE_ACCOUNT_ID!**

### 3.2 Назначьте роли

```powershell
# Замените <FOLDER_ID> на ваш ID каталога
yc resource-manager folder add-access-binding <FOLDER_ID> `
  --role functions.functionInvoker `
  --subject serviceAccount:<SERVICE_ACCOUNT_ID>

yc resource-manager folder add-access-binding <FOLDER_ID> `
  --role storage.editor `
  --subject serviceAccount:<SERVICE_ACCOUNT_ID>
```

### 3.3 Создайте Cloud Function

```powershell
cd backend
yc serverless function create --name orient-logic-contact-form
```

### 3.4 Загрузите код функции

**⚠️ ЗАМЕНИТЕ значения:**
- `<ВАШ_ТОКЕН_БОТА>` — токен от BotFather
- `<ВАШ_CHAT_ID>` — ваш Chat ID

```powershell
yc serverless function version create `
  --function-name orient-logic-contact-form `
  --runtime nodejs18 `
  --entrypoint index.handler `
  --memory 128m `
  --execution-timeout 10s `
  --source-path . `
  --environment TELEGRAM_BOT_TOKEN=<ВАШ_ТОКЕН_БОТА> `
  --environment TELEGRAM_CHAT_ID=<ВАШ_CHAT_ID> `
  --environment NODE_ENV=production
```

### 3.5 Сделайте функцию публичной

```powershell
yc serverless function allow-unauthenticated-invoke orient-logic-contact-form
```

### 3.6 Получите ID функции

```powershell
yc serverless function get orient-logic-contact-form
```

**СОХРАНИТЕ FUNCTION_ID!**

### 3.7 Протестируйте функцию

```powershell
yc serverless function invoke orient-logic-contact-form --data-file test-payload.json
```

Должно прийти сообщение в Telegram! ✅

### 3.8 Создайте API Gateway

Откройте файл `backend/api-gateway.yaml` в редакторе и замените:
- `<YOUR_FUNCTION_ID>` → ваш FUNCTION_ID
- `<YOUR_SERVICE_ACCOUNT_ID>` → ваш SERVICE_ACCOUNT_ID

**Создайте API Gateway:**
```powershell
yc serverless api-gateway create `
  --name orient-logic-api `
  --spec api-gateway.yaml `
  --description "API Gateway for Orient Logic"
```

### 3.9 Получите URL API Gateway

```powershell
yc serverless api-gateway get orient-logic-api
```

Найдите `domain` — это ваш URL (например: `d5e6f7g8h9i0.apigw.yandexcloud.net`)

**СОХРАНИТЕ этот URL!**

### 3.10 Протестируйте API

```powershell
# Вернитесь в корень проекта
cd ..

# Тест API
curl -X POST https://<ВАШ_DOMAIN>.apigw.yandexcloud.net/contact `
  -H "Content-Type: application/json" `
  -d '{"name":"Test","contact":"+7 999 999 99 99","message":"Test message"}'
```

Должно прийти сообщение в Telegram! ✅

### ✅ Чеклист Backend

- [ ] Сервисный аккаунт создан
- [ ] Cloud Function создана и работает
- [ ] API Gateway создан
- [ ] Тест успешен (сообщение в Telegram пришло)
- [ ] URL API Gateway сохранен

---

## 🌐 ШАГ 4: Развертывание Frontend (30 минут)

### 4.1 Настройте переменные окружения

Создайте файл `.env.local` в корне проекта:

```bash
NEXT_PUBLIC_API_GATEWAY_URL=https://<ВАШ_DOMAIN>.apigw.yandexcloud.net/contact
```

### 4.2 Соберите проект

```powershell
npm run build
```

Подождите 2-3 минуты. Результат будет в папке `out/`.

### 4.3 Создайте бакет в Object Storage

```powershell
yc storage bucket create orient-logic-site `
  --public-read `
  --public-list
```

### 4.4 Настройте веб-хостинг

```powershell
yc storage bucket update orient-logic-site `
  --website-settings '{\"index\": \"index.html\", \"error\": \"404.html\"}'
```

### 4.5 Установите AWS CLI

**Windows (Scoop):**
```powershell
# Установите Scoop (если еще нет)
iwr -useb get.scoop.sh | iex

# Установите AWS CLI
scoop install aws
```

**Или скачайте:** https://aws.amazon.com/cli/

### 4.6 Создайте статический ключ доступа

```powershell
yc iam access-key create `
  --service-account-name orient-logic-sa `
  --description "S3 access key"
```

**СОХРАНИТЕ:**
- `key_id` (access_key)
- `secret` (secret_key)

### 4.7 Настройте AWS CLI

```powershell
aws configure --profile yc
```

Введите:
- **AWS Access Key ID:** `<ваш key_id>`
- **AWS Secret Access Key:** `<ваш secret>`
- **Default region name:** `ru-central1`
- **Default output format:** `json`

### 4.8 Загрузите файлы в Object Storage

```powershell
aws s3 sync ./out/ s3://orient-logic-site `
  --endpoint-url=https://storage.yandexcloud.net `
  --profile yc `
  --acl public-read
```

### 4.9 Получите URL сайта

```powershell
yc storage bucket get orient-logic-site
```

URL вашего сайта:
```
http://orient-logic-site.website.yandexcloud.net
```

### 4.10 Откройте сайт в браузере

Перейдите по URL и проверьте все страницы!

### ✅ Чеклист Frontend

- [ ] `.env.local` создан с URL API Gateway
- [ ] Проект собран (`npm run build`)
- [ ] Бакет создан
- [ ] AWS CLI настроен
- [ ] Файлы загружены
- [ ] Сайт открывается в браузере
- [ ] Все страницы работают
- [ ] Форма отправляет в Telegram

---

## 🌍 ШАГ 5: Настройка домена orientlogic.ru (30 минут)

### 5.1 Настройте CNAME запись

В панели управления доменом (где купили orientlogic.ru) добавьте:

```
Тип: CNAME
Имя: @ (или пусто для корневого домена)
Значение: orient-logic-site.website.yandexcloud.net
TTL: 3600
```

**Или с www:**
```
Тип: CNAME
Имя: www
Значение: orient-logic-site.website.yandexcloud.net
```

### 5.2 Подождите распространения DNS

Проверка (может занять до 24 часов):
```powershell
nslookup orientlogic.ru
```

### 5.3 Настройте SSL (HTTPS) через CDN

1. Перейдите в Yandex Cloud Console
2. Откройте раздел **CDN**
3. Создайте CDN ресурс:
   - **CNAME:** `orientlogic.ru`
   - **Origin:** `orient-logic-site.website.yandexcloud.net`
   - **Protocol:** HTTP
4. В разделе **Certificate Manager**:
   - Создайте сертификат Let's Encrypt
   - Домен: `orientlogic.ru`
   - Подтвердите владение доменом (DNS-запись)
5. Привяжите сертификат к CDN ресурсу

### 5.4 Проверьте сайт

```
https://orientlogic.ru
```

### ✅ Чеклист Домен

- [ ] CNAME запись добавлена
- [ ] DNS распространился
- [ ] CDN настроен (опционально)
- [ ] SSL сертификат установлен (опционально)
- [ ] Сайт открывается по домену

---

## 🧪 ШАГ 6: Финальное тестирование (15 минут)

### 6.1 Проверьте все страницы

- [ ] Главная: `https://orientlogic.ru/`
- [ ] О компании: `https://orientlogic.ru/about`
- [ ] Услуги: `https://orientlogic.ru/services`
- [ ] Контакты: `https://orientlogic.ru/contacts`

### 6.2 Проверьте функциональность

- [ ] Меню открывается/закрывается
- [ ] Все ссылки работают
- [ ] Телефоны кликабельны
- [ ] Telegram/WhatsApp открываются
- [ ] Email-ссылка работает

### 6.3 Протестируйте форму обратной связи

1. Заполните форму на странице Контакты
2. Отправьте форму
3. Проверьте Telegram — должно прийти уведомление! ✅

### 6.4 Проверьте на телефоне

Откройте сайт на смартфоне и проверьте:
- [ ] Адаптивность
- [ ] Меню работает
- [ ] Форма работает
- [ ] Ссылки кликабельны

### 6.5 Проверьте в разных браузерах

- [ ] Chrome
- [ ] Firefox
- [ ] Safari (если есть Mac/iPhone)
- [ ] Edge

---

## 💰 Стоимость эксплуатации

### Yandex Cloud (в месяц)

```
Cloud Function:     ~50₽  (1000 вызовов)
API Gateway:        ~100₽ (1000 запросов)
Object Storage:     ~2₽   (1GB)
CDN (опц.):         ~50₽  (10GB трафика)
─────────────────────────────────────
ИТОГО:              ~150-200₽/мес
```

**Первые 60 дней бесплатно!** (пробный период 4000₽)

### Домен

```
orientlogic.ru:     ~200-300₽/год
```

---

## 🔄 Обновление сайта

### Изменили код?

1. **Соберите проект:**
   ```powershell
   npm run build
   ```

2. **Загрузите в Object Storage:**
   ```powershell
   aws s3 sync ./out/ s3://orient-logic-site `
     --endpoint-url=https://storage.yandexcloud.net `
     --profile yc `
     --acl public-read `
     --delete
   ```

### Изменили Cloud Function?

```powershell
cd backend
yc serverless function version create `
  --function-name orient-logic-contact-form `
  --runtime nodejs18 `
  --entrypoint index.handler `
  --memory 128m `
  --execution-timeout 10s `
  --source-path . `
  --environment TELEGRAM_BOT_TOKEN=<ВАШ_ТОКЕН> `
  --environment TELEGRAM_CHAT_ID=<ВАШ_CHAT_ID>
```

---

## 🆘 Решение проблем

### Форма не отправляет

1. Проверьте логи функции:
   ```powershell
   yc serverless function logs orient-logic-contact-form
   ```

2. Проверьте переменные окружения:
   ```powershell
   yc serverless function version list --function-name orient-logic-contact-form
   ```

3. Проверьте URL в `.env.local`

### Сайт не открывается

1. Проверьте бакет:
   ```powershell
   yc storage bucket get orient-logic-site
   ```

2. Проверьте файлы:
   ```powershell
   aws s3 ls s3://orient-logic-site/ `
     --endpoint-url=https://storage.yandexcloud.net `
     --profile yc `
     --recursive
   ```

### DNS не распространился

- Подождите до 24 часов
- Проверьте правильность CNAME записи
- Очистите DNS кэш: `ipconfig /flushdns`

---

## 🎉 ПОЗДРАВЛЯЕМ!

Ваш сайт **Orient Logic** полностью настроен и работает!

### Что у вас есть:

✅ Профессиональный сайт на Next.js  
✅ Serverless backend на Yandex Cloud  
✅ Форма с отправкой в Telegram  
✅ Собственный домен orientlogic.ru  
✅ HTTPS (если настроили CDN)  
✅ Полная адаптивность  

### Следующие шаги:

1. Добавьте сайт в Google Search Console
2. Настройте Яндекс.Метрику или Google Analytics
3. Проверьте SEO с помощью Lighthouse
4. Соберите обратную связь от клиентов
5. Добавьте новые функции (калькулятор, блог и т.д.)

---

**Успехов в развитии бизнеса! 🚀**
