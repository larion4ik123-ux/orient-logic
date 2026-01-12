#!/bin/bash

# Скрипт для развертывания Orient Logic в Yandex Object Storage

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   Orient Logic Deployment Script      ║${NC}"
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo ""

# Проверка наличия необходимых инструментов
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI не установлен${NC}"
    echo "Установите AWS CLI: https://aws.amazon.com/cli/"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm не установлен${NC}"
    exit 1
fi

# Проверка наличия .env.local
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  Файл .env.local не найден${NC}"
    echo "Создайте файл .env.local с настройками:"
    echo "NEXT_PUBLIC_API_GATEWAY_URL=https://your-gateway.apigw.yandexcloud.net/contact"
    exit 1
fi

# Название бакета
BUCKET_NAME="orient-logic-site"
AWS_PROFILE="yc"
ENDPOINT_URL="https://storage.yandexcloud.net"

echo -e "${YELLOW}📦 Установка зависимостей...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ошибка при установке зависимостей${NC}"
    exit 1
fi

echo -e "${YELLOW}🔨 Сборка проекта...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ошибка при сборке проекта${NC}"
    exit 1
fi

echo -e "${YELLOW}☁️  Загрузка файлов в Object Storage...${NC}"
aws s3 sync ./out/ s3://${BUCKET_NAME} \
    --endpoint-url=${ENDPOINT_URL} \
    --profile ${AWS_PROFILE} \
    --acl public-read \
    --delete \
    --exclude ".git/*" \
    --exclude ".DS_Store"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ошибка при загрузке файлов${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Развертывание завершено успешно!${NC}"
echo ""
echo -e "🌐 Ваш сайт доступен по адресу:"
echo -e "${GREEN}   http://${BUCKET_NAME}.website.yandexcloud.net${NC}"
echo ""
echo -e "📝 Не забудьте настроить CNAME запись для вашего домена:"
echo -e "   ${YELLOW}orientlogic.ru${NC} → ${BUCKET_NAME}.website.yandexcloud.net"
echo ""
