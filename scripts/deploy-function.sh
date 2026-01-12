#!/bin/bash

# Скрипт для развертывания Cloud Function в Yandex Cloud

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   Cloud Function Deployment Script    ║${NC}"
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo ""

# Проверка наличия yc CLI
if ! command -v yc &> /dev/null; then
    echo -e "${RED}❌ Yandex Cloud CLI не установлен${NC}"
    echo "Установите: curl https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash"
    exit 1
fi

# Переменные
FUNCTION_NAME="orient-logic-contact-form"

# Запрос переменных окружения
echo -e "${YELLOW}📝 Введите параметры:${NC}"
echo ""
read -p "Telegram Bot Token: " TELEGRAM_BOT_TOKEN
read -p "Telegram Chat ID: " TELEGRAM_CHAT_ID

if [ -z "$TELEGRAM_BOT_TOKEN" ] || [ -z "$TELEGRAM_CHAT_ID" ]; then
    echo -e "${RED}❌ Токен и Chat ID обязательны${NC}"
    exit 1
fi

# Переход в папку backend
cd backend || exit 1

echo ""
echo -e "${YELLOW}🔨 Создание новой версии функции...${NC}"

yc serverless function version create \
    --function-name=${FUNCTION_NAME} \
    --runtime nodejs18 \
    --entrypoint index.handler \
    --memory 128m \
    --execution-timeout 10s \
    --source-path . \
    --environment TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN}" \
    --environment TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID}" \
    --environment NODE_ENV=production

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ошибка при создании версии функции${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Функция успешно развернута!${NC}"
echo ""
echo -e "${YELLOW}📊 Просмотр логов:${NC}"
echo -e "   yc serverless function logs ${FUNCTION_NAME}"
echo ""
echo -e "${YELLOW}🧪 Тестирование:${NC}"
echo -e "   yc serverless function invoke ${FUNCTION_NAME} --data-file test-payload.json"
echo ""
