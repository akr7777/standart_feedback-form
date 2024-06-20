import { ReqBodyType } from "./types";

export type PropsType = ReqBodyType & {
    origin: string | undefined
}

export const makeTextToAdmin = (props: PropsType): string => {
    
    let message = 'Вам пришло сообщение с сайта: ' + props.origin

    if (props.name) {
        message = message + '\nИмя отправителя: ' + props.name
    }
    if (props.email) {
        message = message + '\nEmail: ' + props.email
    }
    if (props.phone) {
        message = message + '\nТелефон: ' + props.phone
        message = message + '\nСсылка на Whatsapp: https://wa.me/' + props.phone
    }
    if (props.title) {
        message = message + '\nТема: ' + props.title
    }
    if (props.content) {
        message = message + '\nСодержание: ' + props.content
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