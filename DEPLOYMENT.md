# Инструкция по развертыванию Orient Logic в Yandex Cloud

## 📋 Подготовка

### 1. Необходимые аккаунты и инструменты

- ✅ Аккаунт в [Yandex Cloud](https://cloud.yandex.ru/)
- ✅ [Yandex Cloud CLI](https://cloud.yandex.ru/docs/cli/quickstart)
- ✅ Telegram бот (создать через [@BotFather](https://t.me/BotFather))
- ✅ Node.js 18+ и npm
- ✅ Git

### 2. Установка Yandex Cloud CLI

**Windows:**
```powershell
iex (New-Object System.Net.WebClient).DownloadString('https://storage.yandexcloud.net/yandexcloud-yc/install.ps1')
```

**macOS/Linux:**
```bash
curl https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash
```

**Инициализация CLI:**
```bash
yc init
```

Следуйте инструкциям для авторизации и выбора каталога (folder).

---

## 🤖 Часть 1: Настройка Telegram бота

### Шаг 1: Создание бота

1. Откройте Telegram и найдите [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/newbot`
3. Введите имя бота: `Orient Logic Bot`
4. Введите username бота: `orient_logic_bot` (или любое доступное)
5. **Сохраните токен бота** — он понадобится позже
   ```
   Пример: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

### Шаг 2: Получение Chat ID

1. Найдите [@userinfobot](https://t.me/userinfobot) в Telegram
2. Отправьте боту любое сообщение
3. Бот ответит вашим Chat ID
4. **Сохраните Chat ID** — он понадобится позже
   ```
   Пример: 123456789
   ```

### Шаг 3: Первое сообщение боту

⚠️ **Важно!** Напишите вашему боту первое сообщение (например, `/start`), иначе он не сможет отправлять вам уведомления.

---

## 🔧 Часть 2: Развертывание Backend

### Шаг 1: Создание сервисного аккаунта

```bash
# Создание сервисного аккаунта
yc iam service-account create --name orient-logic-sa

# Получение ID аккаунта
yc iam service-account get orient-logic-sa

# Назначение роли
yc resource-manager folder add-access-binding <FOLDER_ID> \
  --role functions.functionInvoker \
  --subject serviceAccount:<SERVICE_ACCOUNT_ID>
```

Сохраните `SERVICE_ACCOUNT_ID` — он понадобится позже.

### Шаг 2: Создание Cloud Function

```bash
# Перейдите в папку backend
cd backend

# Создайте функцию
yc serverless function create \
  --name orient-logic-contact-form \
  --description "Contact form handler for Orient Logic"

# Загрузите код функции
yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<ВАШ_ТОКЕН_БОТА> \
  --environment TELEGRAM_CHAT_ID=<ВАШ_CHAT_ID> \
  --environment NODE_ENV=production

# Сделайте функцию публичной
yc serverless function allow-unauthenticated-invoke orient-logic-contact-form
```

**Замените:**
- `<ВАШ_ТОКЕН_БОТА>` — на токен от BotFather
- `<ВАШ_CHAT_ID>` — на ваш Chat ID

### Шаг 3: Получение ID функции

```bash
yc serverless function get orient-logic-contact-form --format json
```

Найдите и сохраните `id` — он понадобится для API Gateway.

### Шаг 4: Тестирование функции

```bash
# Создайте тестовый payload
echo '{
  "httpMethod": "POST",
  "body": "{\"name\":\"Test\",\"contact\":\"+7 999 123 45 67\",\"message\":\"Test message\"}",
  "isBase64Encoded": false
}' > test-payload.json

# Протестируйте функцию
yc serverless function invoke orient-logic-contact-form \
  --data-file test-payload.json
```

Вы должны получить сообщение в Telegram!

---

## 🌐 Часть 3: Создание API Gateway

### Шаг 1: Редактирование спецификации

Откройте файл `backend/api-gateway.yaml` и замените:

```yaml
<YOUR_FUNCTION_ID>  →  d4e1a2b3c4d5e6f7g8h9i0j1  # ID вашей функции
<YOUR_SERVICE_ACCOUNT_ID>  →  aje9k8l7m6n5o4p3q2r1  # ID сервисного аккаунта
```

### Шаг 2: Создание API Gateway

```bash
yc serverless api-gateway create \
  --name orient-logic-api \
  --spec api-gateway.yaml \
  --description "API Gateway for Orient Logic website"
```

### Шаг 3: Получение URL API Gateway

```bash
yc serverless api-gateway get orient-logic-api
```

В выводе найдите `domain` — это URL вашего API Gateway:
```
domain: d5e6f7g8h9i0j1k2.apigw.yandexcloud.net
```

**Сохраните полный URL:**
```
https://d5e6f7g8h9i0j1k2.apigw.yandexcloud.net/contact
```

### Шаг 4: Тестирование API Gateway

```bash
curl -X POST https://<YOUR_DOMAIN>.apigw.yandexcloud.net/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "contact": "+7 999 123 45 67",
    "message": "Test message from API Gateway"
  }'
```

Должен прийти ответ:
```json
{
  "success": true,
  "message": "Your request has been submitted successfully"
}
```

И уведомление в Telegram!

---

## 🎨 Часть 4: Развертывание Frontend

### Шаг 1: Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
NEXT_PUBLIC_API_GATEWAY_URL=https://<YOUR_DOMAIN>.apigw.yandexcloud.net/contact
```

### Шаг 2: Сборка проекта

```bash
# Вернитесь в корень проекта
cd ..

# Установите зависимости (если еще не установлены)
npm install

# Соберите проект
npm run build
```

Статические файлы будут в папке `out/`.

### Шаг 3: Создание Object Storage бакета

```bash
# Создайте бакет
yc storage bucket create orient-logic-site \
  --public-read \
  --public-list

# Настройте бакет для веб-хостинга
yc storage bucket update orient-logic-site \
  --website-settings '{
    "index": "index.html",
    "error": "404.html"
  }'
```

### Шаг 4: Установка AWS CLI для загрузки файлов

Yandex Object Storage совместим с Amazon S3 API.

**Установка AWS CLI:**
```bash
# macOS
brew install awscli

# Windows
# Скачайте с https://aws.amazon.com/cli/

# Linux
pip install awscli
```

### Шаг 5: Создание статического ключа доступа

```bash
# Создайте статический ключ
yc iam access-key create \
  --service-account-name orient-logic-sa \
  --description "S3 access key"
```

Сохраните:
- `key_id` (access_key)
- `secret` (secret_key)

### Шаг 6: Настройка AWS CLI

```bash
aws configure --profile yc
```

Введите:
- AWS Access Key ID: `<key_id из предыдущего шага>`
- AWS Secret Access Key: `<secret из предыдущего шага>`
- Default region name: `ru-central1`
- Default output format: `json`

### Шаг 7: Загрузка файлов в Object Storage

```bash
# Синхронизация папки out/ с бакетом
aws s3 sync ./out/ s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --acl public-read
```

### Шаг 8: Получение URL сайта

```bash
yc storage bucket get orient-logic-site
```

URL вашего сайта:
```
http://orient-logic-site.website.yandexcloud.net
```

Откройте этот URL в браузере — сайт должен работать!

---

## 🌍 Часть 5: Настройка домена orientlogic.ru

### Шаг 1: Настройка CNAME записи

В панели управления вашего регистратора домена (где вы купили `orientlogic.ru`) добавьте CNAME запись:

```
Тип: CNAME
Имя: @ (или оставьте пустым для корневого домена)
Значение: orient-logic-site.website.yandexcloud.net
TTL: 3600
```

**Примечание:** Некоторые регистраторы не позволяют создать CNAME для корневого домена. В этом случае используйте поддомен:

```
Тип: CNAME
Имя: www
Значение: orient-logic-site.website.yandexcloud.net
```

### Шаг 2: Настройка CDN (опционально, для ускорения)

```bash
# Создайте CDN ресурс
yc cdn resource create \
  --cname orientlogic.ru \
  --origin-group-id <YOUR_ORIGIN_GROUP_ID> \
  --origin-protocol http \
  --ssl-certificate certificate-manager

# Или через веб-интерфейс:
# https://console.cloud.yandex.ru/folders/<folder-id>/cdn
```

### Шаг 3: Настройка SSL сертификата (HTTPS)

1. Перейдите в [Certificate Manager](https://console.cloud.yandex.ru/folders/<folder-id>/certificate-manager)
2. Нажмите "Создать сертификат"
3. Выберите "Let's Encrypt"
4. Укажите домен: `orientlogic.ru`
5. Подтвердите владение доменом (DNS-запись или файл)
6. Привяжите сертификат к CDN ресурсу

---

## ✅ Проверка работы

### 1. Проверка API

```bash
curl https://<YOUR_DOMAIN>.apigw.yandexcloud.net/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","contact":"+7 999 999 99 99","message":"Test"}'
```

### 2. Проверка сайта

Откройте:
- http://orient-logic-site.website.yandexcloud.net
- http://orientlogic.ru (после настройки DNS)

### 3. Проверка формы

1. Перейдите на страницу `/contacts`
2. Заполните форму обратной связи
3. Отправьте форму
4. Проверьте, что пришло уведомление в Telegram

---

## 🔄 Обновление сайта

### Обновление кода

```bash
# 1. Внесите изменения в код
# 2. Соберите проект
npm run build

# 3. Загрузите обновленные файлы
aws s3 sync ./out/ s3://orient-logic-site \
  --endpoint-url=https://storage.yandexcloud.net \
  --profile yc \
  --acl public-read \
  --delete
```

### Обновление Cloud Function

```bash
cd backend

yc serverless function version create \
  --function-name orient-logic-contact-form \
  --runtime nodejs18 \
  --entrypoint index.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path . \
  --environment TELEGRAM_BOT_TOKEN=<ВАШ_ТОКЕН> \
  --environment TELEGRAM_CHAT_ID=<ВАШ_CHAT_ID> \
  --environment NODE_ENV=production
```

### Обновление API Gateway

```bash
yc serverless api-gateway update orient-logic-api \
  --spec api-gateway.yaml
```

---

## 📊 Мониторинг и логи

### Просмотр логов Cloud Function

```bash
# Последние логи
yc serverless function logs orient-logic-contact-form

# Логи в реальном времени
yc serverless function logs orient-logic-contact-form --follow

# Логи за последний час
yc serverless function logs orient-logic-contact-form --since 1h
```

### Метрики

Просмотр метрик в веб-консоли:
```
https://console.cloud.yandex.ru/folders/<folder-id>/serverless-functions
```

---

## 💰 Стоимость

### Примерные расчеты (для 1000 заявок в месяц)

**Cloud Functions:**
- Вызовы: 1000 × 0.043₽ = 43₽
- Вычисления: ~0.1₽
- **Итого:** ~50₽/мес

**API Gateway:**
- Запросы: 1000 × 0.096₽ = 96₽
- **Итого:** ~100₽/мес

**Object Storage:**
- Хранение (1GB): 1.73₽/мес
- Трафик (10GB): бесплатно (исходящий трафик 100GB бесплатно)
- **Итого:** ~2₽/мес

**TOTAL:** ~150₽/мес (≈$1.50)

Yandex Cloud предоставляет **бесплатный пробный период** с балансом 4000₽.

---

## 🐛 Устранение неполадок

### Форма не отправляется

1. Проверьте консоль браузера (F12) на наличие ошибок
2. Убедитесь, что URL API Gateway правильный в `.env.local`
3. Проверьте CORS настройки в API Gateway
4. Проверьте логи функции:
   ```bash
   yc serverless function logs orient-logic-contact-form
   ```

### Не приходят уведомления в Telegram

1. Проверьте токен бота и Chat ID
2. Убедитесь, что написали боту первое сообщение
3. Проверьте переменные окружения функции:
   ```bash
   yc serverless function version list --function-name orient-logic-contact-form
   ```

### Сайт не открывается

1. Проверьте, что бакет настроен для веб-хостинга
2. Проверьте права доступа (public-read)
3. Подождите распространения DNS (может занять до 24 часов)

### 403 Forbidden при загрузке в S3

1. Проверьте access key и secret key
2. Убедитесь, что у сервисного аккаунта есть права `storage.editor`
3. Проверьте endpoint: `https://storage.yandexcloud.net`

---

## 📞 Поддержка

При возникновении проблем:

1. Проверьте [документацию Yandex Cloud](https://cloud.yandex.ru/docs)
2. Обратитесь в [поддержку Yandex Cloud](https://console.cloud.yandex.ru/support)
3. Свяжитесь с нами: orientlogic@bk.ru

---

**Успешного развертывания! 🚀**
