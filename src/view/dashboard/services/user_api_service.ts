import { axiosInstance } from "../../../core/network/axios";
import { ApiModel } from "../../../product/models/Api";
import { CustomErrorResponse } from "../../../product/models/ErrorResponse";

export async function getUserApis(id: string) {
    
    try {
        const response = await axiosInstance.get(`/api/user/${id}`)
        const apiList = Object.assign(new Array<ApiModel>(), response.data)
        console.log(apiList)
        return apiList
    } catch (error) {
        const errorRespone = Object.assign(new CustomErrorResponse(), error)
        console.log(errorRespone.message)
    }
}