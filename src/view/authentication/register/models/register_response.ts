interface IRegisterResponse {
    status: number
    error: string | null
}

export class RegisterResponse implements IRegisterResponse {

    constructor(public status: number, public error: string | null){
        this.status = status
        this.error = error
    }
    
}