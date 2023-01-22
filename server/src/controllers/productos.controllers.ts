import { Request, Response } from 'express'

import { ProductoService } from '../services/Producto.service'

const productoService = new ProductoService()

export const HandleGetProductos = ( req: Request, res: Response ) => {
    productoService.getProductos().then(data => {
        res.send(data)
    })
}