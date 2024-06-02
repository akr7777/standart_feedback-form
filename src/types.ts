export type ReqBodyType = {
    name: string | undefined,
    email: string | undefined,
    phone: string | undefined,
    title: string | undefined,
    content: string | undefined,
    origin: string | undefined,
}

export type TgAdminsDataType = {
    site: Array<string>,
    tg_admins: Array<string>
}