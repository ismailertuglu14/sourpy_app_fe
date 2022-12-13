import { ErrorResponse } from "@remix-run/router";
import { AxiosError } from "axios";
import { axiosInstance } from "../../../../core/network/axios";
import { CustomErrorResponse } from "../../../../product/models/ErrorResponse";
import { LoginRequest } from "../models/login_request";

export async function login(user: LoginRequest){
    const body = JSON.stringify(user)
    console.log(`User login inputs => ${body}`)
    var response;
    try {
        response = await axiosInstance.post("/auth/login",{'username':user.username,'password':user.password});        
    } catch (error:any) {
        var errorResponse = new CustomErrorResponse(error.response.data.message)
        console.log(errorResponse.message)
    }
}
