import { axiosInstance } from "../../../../core/network/axios";
import { LoginRequest } from "../models/login_request";

export async function login(user: LoginRequest){
    const body = JSON.stringify(user)
    console.log(`User login inputs => ${body}`)
    await axiosInstance.post("/auth/login",body);
}
