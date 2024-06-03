"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const _origins_1 = require("./_origins");
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
// export const bot = new TelegramBot(process.env.TELEGRAM_BOT_API, {
exports.bot = new TelegramBot(_origins_1.TELEGRAM_BOT_API, {
    polling: { interval: 300, autoStart: true }
});
exports.bot.on("polling_error", (err) => console.log(err.data.error.message));
exports.bot.onText(/\/start/, (msg) => {
    exports.bot.sendMessage(msg.chat.id, "Your id: " + msg.chat.id);
});
