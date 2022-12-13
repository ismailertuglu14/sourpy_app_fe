interface IErrorResponse{
    message?: string
}
export class CustomErrorResponse implements IErrorResponse {
    constructor(public message?: string){
        this.message = message
    }
}