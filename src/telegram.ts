import { TELEGRAM_BOT_API } from "./_origins";

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// export const bot = new TelegramBot(process.env.TELEGRAM_BOT_API, {
export const bot = new TelegramBot(TELEGRAM_BOT_API, {
    polling: { interval: 300, autoStart: true }
});

bot.on("polling_error", (err: any) => console.log(err.data.error.message));

bot.onText(/\/start/, (msg: { chat: { id: any; }; }) => {
    bot.sendMessage(msg.chat.id, "Your id: " + msg.chat.id);
});