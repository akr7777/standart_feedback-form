import { TgAdminsDataType } from "./types";
import * as data from './sites-tg-list.json'

const sites_tg_list: Array<TgAdminsDataType> = data.data

export const getAdminData = (site: string | undefined):Array<string> => {
    const result: Array<string> | undefined = 
        sites_tg_list.find(elem => elem.site === site)?.tg_admins || []
    
    return result
}