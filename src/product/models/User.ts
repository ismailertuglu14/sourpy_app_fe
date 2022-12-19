import { IApiModel } from "./Api"

interface IUserModel{
    name:string
    surname:string
    username: string
    email:string
    apis: Array<IApiModel>
}


export default IUserModel