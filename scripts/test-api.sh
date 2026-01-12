#!/bin/bash

# Скрипт для тестирования API Gateway

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   API Gateway Test Script             ║${NC}"
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo ""

# Запрос URL API Gateway
read -p "Введите URL API Gateway: " API_URL

if [ -z "$API_URL" ]; then
    echo -e "${RED}❌ URL обязателен${NC}"
    exit 1
fi

# Добавление /contact если отсутствует
if [[ ! "$API_URL" =~ /contact$ ]]; then
    API_URL="${API_URL}/contact"
fi

echo ""
echo -e "${YELLOW}🧪 Тестирование API: ${API_URL}${NC}"
echo ""

# Тестовые данные
TEST_DATA='{
  "name": "Test User",
  "contact": "+7 (999) 123-45-67",
  "message": "Тестовое сообщение с сайта Orient Logic. Если вы получили это уведомление, значит API работает корректно!"
}'

echo -e "${YELLOW}📤 Отправка тестового запроса...${NC}"
echo ""

# Отправка запроса
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_URL" \
    -H "Content-Type: application/json" \
    -d "$TEST_DATA")

# Разделение ответа и кода статуса
HTTP_BODY=$(echo "$RESPONSE" | head -n -1)
HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)

echo -e "${YELLOW}📥 Ответ сервера:${NC}"
echo "$HTTP_BODY" | jq . 2>/dev/null || echo "$HTTP_BODY"
echo ""

# Проверка кода ответа
if [ "$HTTP_CODE" -eq 200 ]; then
    echo -e "${GREEN}✅ Тест пройден успешно! (HTTP $HTTP_CODE)${NC}"
    echo ""
    echo -e "${GREEN}Проверьте Telegram — должно прийти уведомление${NC}"
else
    echo -e "${RED}❌ Тест провален! (HTTP $HTTP_CODE)${NC}"
    exit 1
fi

echo ""
