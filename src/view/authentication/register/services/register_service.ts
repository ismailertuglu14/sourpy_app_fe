import { axiosInstance } from "../../../../core/network/axios";
import { RegisterRequest } from "../models/register_request";

// FIXME: 
export async function register(user:RegisterRequest){
    const body = JSON.stringify(user)
    await axiosInstance.post(
        "/auth/register",
        body
    )
}