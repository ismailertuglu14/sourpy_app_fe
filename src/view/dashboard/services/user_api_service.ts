import { axiosInstance } from "../../../core/network/axios";
import { IApiModel } from "../../../product/models/Api";
import { IErrorResponse } from "../../../product/models/ErrorResponse";

export async function getUserApis(id: string) {
    
    try {
        const response = await axiosInstance.get(`/api/user/${id}`)
        const apiList:IApiModel = response.data
        return apiList
    } catch (error: any) {
        const errorRespone:IErrorResponse = error 
        console.log(errorRespone.message)
    }
}