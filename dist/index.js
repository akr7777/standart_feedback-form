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
const admins_1 = require("./admins");
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
    const contactFromData = Object.assign(Object.assign({}, req.body), { origin: req.headers.origin });
    try {
        const responseText = (0, functions_1.makeTextToAdmin)(contactFromData);
        // const admins_ids: string[] | undefined = process.env.ADMIN_TG_IDS?.split(' ')
        const admins_ids = (0, admins_1.getAdminData)(req.headers.origin);
        if (!admins_ids || admins_ids.length < 1) {
            return res.send({ message: 'no data about admin', status: 511 });
        }
        if (admins_ids) {
            admins_ids.map(tg_id => telegram_1.bot.sendMessage(tg_id, responseText));
        }
        res.send({ message: 'success', status: 277 });
    }
    catch (error) {
        telegram_1.bot.sendMessage(process.env.ADMIN_TG_ID, 'Что-то пошло не так...');
        res.send({ message: 'error', status: 500 });
    }
}));
app.listen(PORT, () => {
    // getAdminData('http://localhost:5173')
    console.log('App started on port', PORT);
});
