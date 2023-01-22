import { pool } from "../db";

import { responseData } from "../utils/utils";

import { Proveedor } from '../models/proveedor.model';

export class ProveedorService {

    async getProveedores() {
        try {
            
            const [ rows ] = await pool.query('SELECT * FROM proveedores;')

            if(Array.isArray(rows) && rows.length > 0) return responseData( 200, 'Proveedores', rows )
            return responseData( 200, 'Aún no hay ningún proveedor registrado', [] )
            
        } catch (error) {
            responseData( 500, error.message, error )
        }
    }
    
    async getProveedorById(id: string) {
        try {

            const [ rows ] = await pool.query('SELECT * FROM proveedores WHERE id_proveedor = ?', [ id ])

            if(Array.isArray(rows) && rows.length > 0) return responseData( 200, 'Proveedor', rows[0] )
            return responseData( 404, 'No se encontró al proveedor especificado' )
            
        } catch (error) {
            responseData( 500, error.message, error )
        }
    }

    async addProveedor (data: Proveedor)  {
        try {

            if(
                !data.proveedor
            ) return responseData( 400, 'El nombre del proveedor no puede estar vacio' )

            const proveedores = await this.getProveedores().then(data => data?.data)

            let existProveedor = await proveedores.find((p: Proveedor) => p.proveedor == data.proveedor)
            
            if(!existProveedor) {
                const [ rows ] = await pool.query('INSERT INTO proveedores (proveedor, informacion) VALUES (?, ?)', 
                    [ data.proveedor, data.informacion ]
                )

                let p = {
                    id: rows['insertId'],
                    proveedor: data.proveedor,
                    informacion: data.informacion
                }
    
                return responseData( 201, `Se añadió el proveedor: ${data.proveedor}`, p )
            }
            
            return responseData( 422, 'Ya existe un proveedor con este nombre' )

        } catch (error) {
            responseData( 500, error.message, error )
        }
    }

    async updateProveedor(id: string, {proveedor, informacion}) {
        try {

            const [ result ] = await pool.query('UPDATE proveedores SET proveedor = IFNULL(?, proveedor), informacion = IFNULL(?, informacion) WHERE id_proveedor = ?',
                [ proveedor, informacion, id ]
            )
            if (result['affectedRows'] === 0) return responseData( 404, 'No se encontró al proveedor especificado' )

            const [ rows ] = await pool.query('SELECT * FROM proveedores WHERE id_proveedor = ?', [ id ])

            return responseData( 200, 'Proveedor modificado con éxito', rows[0] )
            
        } catch (error) {
            responseData( 500, error.message, error )
        }
    }

    async deleteProveedor (id: string) {
        try {

            const [ result ] = await pool.query('DELETE FROM proveedores WHERE id_proveedor = ?', [ id ])

            if( result['affectedRows'] > 0 ) return responseData( 200, 'Proveedor eliminado' )
            return responseData( 404, 'No se encontró al proveedor especificdo' )

        } catch (error) {
            responseData( 500, error.message, error )
        }
    }

}