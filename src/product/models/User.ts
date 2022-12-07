interface IUserModel{
    name:string
    surname:string
    username: string
    email:string
    password: string
}

class UserModel implements IUserModel {

    constructor(public name:string, public surname: string, public username: string, public password: string, public email: string){
        this.name = name
        this.surname = surname
        this.username = username
        this.password = password
        this.email = email
    }
}

export default UserModel