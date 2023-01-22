import { Router } from "express"

import { HandleGetProductos } from '../controllers/productos.controllers';


const router: Router = Router()



router.get('/', HandleGetProductos)


export default router