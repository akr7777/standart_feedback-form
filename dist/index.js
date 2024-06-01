"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = require("./telegram");
const functions_1 = require("./functions");
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: (_a = process.env.ORIGINS) === null || _a === void 0 ? void 0 : _a.split(' ') }));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: 'HI!' });
}));
app.post('/contact_form', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const contactFromData = Object.assign(Object.assign({}, req.body), { origin: req.headers.origin });
    try {
        const responseText = (0, functions_1.makeTextToAdmin)(contactFromData);
        const admins_ids = (_b = process.env.ADMIN_TG_IDS) === null || _b === void 0 ? void 0 : _b.split(' ');
        if (admins_ids) {
            admins_ids.map(tg_id => telegram_1.bot.sendMessage(tg_id, responseText));
        }
        res.send({ message: 'success', status: 200 });
    }
    catch (error) {
        telegram_1.bot.sendMessage(process.env.ADMIN_TG_ID, 'Что-то пошло не так...');
        res.send({ message: 'error', status: 500 });
    }
}));
app.listen(PORT, () => {
    console.log('App started on port', PORT);
});
