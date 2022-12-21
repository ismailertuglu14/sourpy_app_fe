
import { axiosInstance } from "../../../../core/network/axios";
import CustomError from "../../../../product/models/ErrorResponse";
import { ILoginRequest } from "../models/login_request";
import cookie from "js-cookie"
import { KeyEnums } from "../../../../product/enums/KeyEnums";
export async function login(user: ILoginRequest, navigate: any){
    const body = JSON.stringify(user)
    console.log(`User login inputs => ${body}`)
    try {
        
          await axiosInstance.post("/auth/login",{'username':user.username,'password':user.password}).then((response)=>{
             const { token } = response.data;
             cookie.set(KeyEnums.SESSION_USER,token,{expires: 1})
        });
        navigate("/dashboard")
                
    } catch (error:any) {
        cookie.remove(KeyEnums.SESSION_USER)
        console.log(CustomError.create(error.message))
    }
}
