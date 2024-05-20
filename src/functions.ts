import { ReqBodyType } from "./types";

export type PropsType = ReqBodyType & {
    origin: string | undefined
}

export const makeTextToAdmin = (props: PropsType): string => {
    return `
    Вам пришло сообщение с сайта ${props.origin}:
    имя отправителя: ${props.name}
    email: ${props.email}
    phone: ${props.phone}
    ссылка на Whats'app: https://wa.me/${props.phone}
    тема: ${props.title}
    содержание: ${props.content}
    `
}