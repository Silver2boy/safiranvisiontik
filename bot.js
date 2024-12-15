const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'ÓáÇã! Èå İÑæÔÇå ãÇ ÎæÔ ÂãÏíÏ.');
});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `íÇã ÔãÇ: ${msg.text}`);
});
