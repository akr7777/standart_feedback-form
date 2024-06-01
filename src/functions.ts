import { ReqBodyType } from "./types";

export type PropsType = ReqBodyType & {
    origin: string | undefined
}

export const makeTextToAdmin = (props: PropsType): string => {
    
    let message = 'Вам пришло сообщение с сайта: ' + props.origin

    if (props.name) {
        message = message + '\nимя отправителя: ' + props.name
    }
    if (props.email) {
        message = message + '\nemail: ' + props.email
    }
    if (props.phone) {
        message = message + '\nphone: ' + props.phone
        message = message + '\nссылка на Whatsapp: https://wa.me/' + props.phone
    }
    if (props.title) {
        message = message + '\nтема: ' + props.title
    }
    if (props.content) {
        message = message + '\nсодержание: ' + props.content
    }

    // return `
    // Вам пришло сообщение с сайта ${props.origin}:
    // имя отправителя: ${props.name}
    // email: ${props.email}
    // phone: ${props.phone}
    // ссылка на Whats'app: https://wa.me/${props.phone}
    // тема: ${props.title}
    // содержание: ${props.content}
    // `

    return message
}