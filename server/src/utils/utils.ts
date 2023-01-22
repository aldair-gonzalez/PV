import { ResponseData } from "../models/response.model"

export const responseData = (status: number, message: string, data?: any) => {
    let respuesta: ResponseData = { status, message, data }
    return respuesta
}