import { axiosInstance } from "../../../core/network/axios";
import { IApiModel, IProduct } from "../../../product/models/Api";
import CustomError from "../../../product/models/ErrorResponse";

export async function getUserApis(id: string) {
    
    try {
        const response = await axiosInstance.get(`/api/user/${id}`)
        const apiList:IApiModel = response.data
        return apiList
    } catch (error: any) {

        console.log(CustomError.createFromIErrorResponse(error.response.data))
    }
}

export async function getProductCodes() {
    
    try {
        const response = await axiosInstance.get(`/trendyol/products`)
        const productList:IProduct[] = response.data
        return productList
    } catch (error: any) {
        console.log(CustomError.createFromIErrorResponse(error.response.data))
    }
}