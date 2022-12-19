import { AxiosError } from "axios";


class CustomError extends Error {
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    
    public static create(message: string): CustomError {
        return new CustomError(message);
    }
    
}

export default CustomError;