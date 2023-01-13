import { Request, Response } from 'express'

export const Index = ( req: Request, res: Response ) => {
    res.send('Pagina principal del punto de venta')
}