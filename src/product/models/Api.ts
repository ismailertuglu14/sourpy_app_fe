import ApiTypeEnums from "../enums/ApiTypeEnums"

interface IApiModel{
    api_key: string
    api_secret_key: string
    seller_id: string
    api_type: ApiTypeEnums
    user_id: string
}

export class ApiModel implements IApiModel {
    constructor(public api_key: string, public api_secret_key: string, public seller_id: string,public api_type: ApiTypeEnums,public user_id: string){
        this.api_key = api_key 
        this.api_secret_key = api_secret_key
        this.seller_id = seller_id
        this.api_type = api_type
        this.user_id = user_id
    }
    
}