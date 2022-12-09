import { axiosInstance } from "../../../../core/network/axios";
import { RegisterRequest } from "../models/register_request";

export async function register(user:RegisterRequest){
    console.log(JSON.stringify(user))
    //await axiosInstance.post("/",)
}