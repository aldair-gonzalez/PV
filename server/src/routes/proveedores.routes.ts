import { Router } from 'express'

import { HandleGetProveedores, HandleAddProveedor, HandleDeleteProveedor, HandleGetProveedorById, HandleUpdateProveedor } from '../controllers/proveedores.controllers';



const router: Router = Router()

router.get('/', HandleGetProveedores)
router.post('/', HandleAddProveedor)

router.get('/:id', HandleGetProveedorById)
router.patch('/:id', HandleUpdateProveedor)
router.delete('/:id', HandleDeleteProveedor)

export default router