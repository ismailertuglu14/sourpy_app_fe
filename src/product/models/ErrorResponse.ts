import { AxiosError } from "axios";

type IErrorResponse = {
    message: string;
    statusCode: number;
}

class CustomError extends Error {
    constructor(message: string, statusCode: number = 500) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    
    public static create(message: string): CustomError {
        return new CustomError(message);
    }
    
    public static createFromIErrorResponse(errorResponse: IErrorResponse): CustomError {
        return new CustomError(errorResponse.message, errorResponse.statusCode);
    }
    
}

export default CustomError;