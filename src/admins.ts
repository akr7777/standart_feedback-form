import { TgAdminsDataType } from "./types";
import * as data from './_sites-tg-list.json'

const sites_tg_list: Array<TgAdminsDataType> = data.data

console.log('sites_tg_list=', sites_tg_list);


export const getAdminData = (site: string | undefined):Array<string> => {
    const result: Array<string> | undefined = 
        sites_tg_list.some(elem => elem.site.some(s => s === site))
            ? sites_tg_list.find(elem => elem.site.some(s => s === site))?.tg_admins || []
            : []
    
    return result
}