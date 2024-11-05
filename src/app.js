import express from 'express'
import config from './config.js'
import clientes from './modules/clients/rutas.js'

const app = express()
app.set('port',config.port)

app.use(express.json()); 
app.use('/api/clientes',clientes)


export default app