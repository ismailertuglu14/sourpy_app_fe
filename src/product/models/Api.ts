
/**
 *  @property {string} api_type = TRENDYOL | HEPSIBURADA | AMAZON etc.  
 */

export interface IApiModel{
    api_type?: string
    api_key?: string
    api_secret_key?: string
    seller_id?: string
    user_id?: string
}

