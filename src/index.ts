import { Request, Response } from 'express';
import { bot } from './telegram';
import { makeTextToAdmin } from './functions';
import { ReqBodyType } from './types';
const express = require('express')
require('dotenv').config();

const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: process.env.ORIGINS?.split(' ') }));

app.get('/', async (req: Request, res: Response) => {
    res.send({ message: 'HI!' })
})

app.post('/contact_form', async (req: Request, res: Response) => {
    const contactFromData: ReqBodyType = req.body

    try {
        const responseText = makeTextToAdmin(contactFromData)
        bot.sendMessage(process.env.ADMIN_TG_ID, responseText)
        res.send({ message: 'success', status: 200 })
    } catch (error: any) {
        bot.sendMessage(process.env.ADMIN_TG_ID, 'Что-то пошло не так...')
        res.send({ message: 'error', status: 500 })
    }
})

app.listen(PORT, () => {
    console.log('App started on port', PORT)
})