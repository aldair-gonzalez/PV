import express, { Express } from 'express'

import RoutesIndex from './routes/index.routes'



const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(RoutesIndex)


export default app