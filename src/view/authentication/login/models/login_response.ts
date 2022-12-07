interface ILoginResponse {
    token: string
    refreshToken: string
}

export class LoginResponse implements ILoginResponse {
    constructor(public token: string, public refreshToken: string){
        this.token = token
        this.refreshToken = refreshToken
    }
} 