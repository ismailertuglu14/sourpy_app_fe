import { ErrorResponse } from "@remix-run/router";
import { AxiosError } from "axios";
import { axiosInstance } from "../../../../core/network/axios";
import { IErrorResponse } from "../../../../product/models/ErrorResponse";
import { ILoginRequest } from "../models/login_request";
import { ILoginResponse } from "../models/login_response";
import cookie from "js-cookie"
import { KeyEnums } from "../../../../product/enums/KeyEnums";
export async function login(user: ILoginRequest){
    const body = JSON.stringify(user)
    console.log(`User login inputs => ${body}`)
    try {
        
         await axiosInstance.post("/auth/login",{'username':user.username,'password':user.password}).then((response)=>{
            cookie.set(KeyEnums.SESSION_USER,"refreshToken",{expires: 1})
        });
                
    } catch (error:any) {
        cookie.remove(KeyEnums.SESSION_USER)
        var errorResponse:IErrorResponse = error 
        console.log(errorResponse.message)
    }
}
