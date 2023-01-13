import { config } from 'dotenv'

config()

export const PORT        : number | string = process.env.PORT || 3000
export const DB_HOST     :          string = process.env.DB_HOST || "localhost"
export const DB_USER     :          string = process.env.DB_USER || "root"
export const DB_PASSWORD :          string = process.env.DB_PASSWORD || "12345"
export const DB_DATABASE :          string = process.env.DB_DATABASE || "puntoventa"
