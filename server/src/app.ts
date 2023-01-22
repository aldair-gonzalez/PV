import express, { Express } from 'express'

import RoutesIndex from './routes/index.routes'
import RoutesProveedores from './routes/proveedores.routes'
import RoutesProductos from './routes/productos.routes'
import RoutesDepartamentos from './routes/departamentos.routes'



const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(RoutesIndex)
app.use('/api/proveedores', RoutesProveedores)
app.use('/api/productos', RoutesProductos)
app.use('/api/departamentos', RoutesDepartamentos)


export default app