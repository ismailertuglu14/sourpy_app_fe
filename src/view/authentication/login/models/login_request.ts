interface ILoginRequest {
    username: string
    password: string
}

export class LoginRequest implements ILoginRequest {
    constructor(public username: string, public password: string){
        this.username = username
        this.password = password
    }
}