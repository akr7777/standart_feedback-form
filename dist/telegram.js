"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
exports.bot = new TelegramBot(process.env.TELEGRAM_BOT_API, {
    polling: { interval: 300, autoStart: true }
});
exports.bot.on("polling_error", (err) => console.log(err.data.error.message));
exports.bot.onText(/\/start/, (msg) => {
    exports.bot.sendMessage(msg.chat.id, "Your id: " + msg.chat.id);
});
