const https = require('https');

module.exports.handler = async (event, context) => {
  console.log('=== FUNCTION STARTED ===');
  console.log('Event:', JSON.stringify(event));
  
  try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    console.log('Bot token exists:', !!TELEGRAM_BOT_TOKEN);
    console.log('Chat ID:', TELEGRAM_CHAT_ID);
    
    // Простое сообщение
    const message = 'Test message from Orient Logic!';
    
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    };
    
    const data = JSON.stringify(payload);
    
    console.log('Sending to Telegram:', data);
    
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
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true }),
    };
    
  } catch (error) {
    console.error('ERROR:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
