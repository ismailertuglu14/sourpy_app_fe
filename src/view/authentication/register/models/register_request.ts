interface IRegisterRequest {
    name: string
    surname: string
    username: string
    email: string
    password: string
}

export class RegisterRequest implements IRegisterRequest {
    constructor(public name: string, public surname: string, public username: string, public email: string, public password: string){
        this.name = name
        this.surname = surname
        this.username = username
        this.email = email
        this.password = password
    }
    
}