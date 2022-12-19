import { axiosInstance } from "../../../core/network/axios";
import { IApiModel } from "../../../product/models/Api";
import CustomError from "../../../product/models/ErrorResponse";

export async function getUserApis(id: string) {
    
    try {
        const response = await axiosInstance.get(`/api/user/${id}`)
        const apiList:IApiModel = response.data
        return apiList
    } catch (error: any) {
        console.log(CustomError.create(error.response.data.message))
    }
}