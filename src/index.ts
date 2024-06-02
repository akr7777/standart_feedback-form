import { Request, Response } from 'express';
import { bot } from './telegram';
import { makeTextToAdmin } from './functions';
import { ReqBodyType, TgAdminsDataType } from './types';
import { getAdminData } from './admins';
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({ origin: process.env.ORIGINS?.split(' ') }));




app.get('/', async (req: Request, res: Response) => {
    res.send({ message: 'HI!' })
})

app.post('/contact_form', async (req: Request, res: Response) => {
    const contactFromData: ReqBodyType = { ...req.body, origin: req.headers.origin }
    
    try {
        const responseText = makeTextToAdmin(contactFromData)
        // const admins_ids: string[] | undefined = process.env.ADMIN_TG_IDS?.split(' ')

        const admins_ids: Array<string> = getAdminData(req.headers.origin)
        if (admins_ids) {
            admins_ids.map(tg_id => bot.sendMessage(tg_id, responseText))
        }
        res.send({ message: 'success', status: 277 })
    } catch (error: any) {
        bot.sendMessage(process.env.ADMIN_TG_ID, 'Что-то пошло не так...')
        res.send({ message: 'error', status: 500 })
    }
})

app.listen(PORT, () => {
    // getAdminData('http://localhost:5173')
    console.log('App started on port', PORT)
})