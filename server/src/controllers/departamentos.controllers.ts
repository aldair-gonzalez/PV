import { Request, Response } from "express"

export const HandleGetDepartamentos = (req: Request, res: Response) => {
    res.send('Pagina de departamentos')
}