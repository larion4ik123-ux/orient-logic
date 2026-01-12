const https = require('https');

module.exports.handler = async (event, context) => {
  console.log('=== FUNCTION STARTED ===');
  console.log('Event:', JSON.stringify(event));

  // Обработка CORS preflight запроса
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing Telegram configuration');
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }

    // Парсинг тела запроса
    let body;
    if (event.body) {
      body = event.isBase64Encoded 
        ? JSON.parse(Buffer.from(event.body, 'base64').toString('utf-8'))
        : JSON.parse(event.body);
    } else {
      throw new Error('Request body is empty');
    }

    const { name, contact, message } = body;

    // Валидация данных
    if (!name || !contact || !message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          error: 'Missing required fields: name, contact, or message',
        }),
      };
    }

    console.log('Form data received:', { name, contact, messageLength: message.length });

    // Формирование сообщения для Telegram
    const telegramMessage = `🆕 Новая заявка с сайта Orient Logic

👤 Имя: ${name}
📞 Контакт: ${contact}

💬 Сообщение:
${message}

⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`;

    console.log('Sending message to Telegram, length:', telegramMessage.length);

    // Отправка в Telegram
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
    };
    
    const data = JSON.stringify(payload);

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data, 'utf8'),
      },
    };

    await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseBody = '';
        res.on('data', (chunk) => {
          responseBody += chunk;
        });
        res.on('end', () => {
          console.log('Telegram response:', responseBody);
          if (res.statusCode === 200) {
            resolve();
          } else {
            reject(new Error(`Telegram API returned status ${res.statusCode}`));
          }
        });
      });
      
      req.on('error', (error) => {
        console.error('Request error:', error);
        reject(error);
      });
      
      req.write(data);
      req.end();
    });

    // Успешный ответ
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Your request has been submitted successfully',
      }),
    };

  } catch (error) {
    console.error('ERROR:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
};
