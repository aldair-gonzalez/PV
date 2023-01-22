import { Router } from 'express'

import { HandleGetDepartamentos } from '../controllers/departamentos.controllers'


const router: Router = Router()



router.get('/', HandleGetDepartamentos)

export default router