import { Request, Response } from "express"

import { Proveedor } from "../models/proveedor.model";

import { ProveedorService } from '../services/Proveedor.service';



const proveedorService = new ProveedorService()


export const HandleGetProveedores = async (req: Request, res: Response) => {
    
    await proveedorService.getProveedores().then(data => {
        if(data) res.status(data?.status).send(data)
        else res.send('Not Found')
    })
    
}

export const HandleGetProveedorById = async (req: Request, res: Response) => {

    const { id } = req.params
    
    await proveedorService.getProveedorById(id).then(data => {
        if(data) res.status(data?.status).send(data)
        else res.send('Not Found')
    })

}

export const HandleAddProveedor = async (req: Request, res: Response) => {

    const { proveedor, informacion } = req.body
    let p: Proveedor = { id_proveedor: 0, proveedor, informacion }

    await proveedorService.addProveedor(p).then(data => {
        if(data) res.status(data.status).send(data)
        else res.send('Not Found')
    })
    
}

export const HandleDeleteProveedor = async (req: Request, res: Response) => {

    const { id } = req.params

    await proveedorService.deleteProveedor(id).then(async (data)=> {
        if(data) res.status(data.status).send(data)
        else res.send('Not Found')
    })
    
}

export const HandleUpdateProveedor = async (req: Request, res: Response) => {
    
    const { id } = req.params
    const { proveedor, informacion } = req.body
    
    await proveedorService.updateProveedor(id, {proveedor, informacion}).then(data => {
        if(data) res.status(data.status).send(data)
        else res.send('Not Found')
    })

}