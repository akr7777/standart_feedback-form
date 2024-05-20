"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTextToAdmin = void 0;
const makeTextToAdmin = (props) => {
    return `
    Вам пришло сообщение с сайта ${props.origin}:
    имя отправителя: ${props.name}
    email: ${props.email}
    phone: ${props.phone}
    ссылка на Whats'app: https://wa.me/${props.phone}
    тема: ${props.title}
    содержание: ${props.content}
    `;
};
exports.makeTextToAdmin = makeTextToAdmin;
