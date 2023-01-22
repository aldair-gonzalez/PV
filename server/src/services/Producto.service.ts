import { pool } from '../db'

import { responseData } from '../utils/utils';

export class ProductoService {

    constructor() { }

    async getProductos() {
        try {
            
            const [ rows ] = await pool.query('SELECT * FROM productos;');
            return responseData(200, 'Data obtenida', rows)

        } catch (error) {
            responseData(400, error.message, error)
        }
    }
    
    async addProducto() {
        try {

            
            
        } catch (error) {
            responseData(400, error.message, error)
        }
    }

}