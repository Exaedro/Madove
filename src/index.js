import express from 'express'
import morgan from 'morgan'
import path from 'node:path'

const app = express()

import connect from './database.js'
connect()

// Config
const port = process.env.PORT ?? 3000
app.set('views', path.join(process.cwd(), 'src/views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Statics
app.use(express.static(path.join(process.cwd(), 'src/public')))

// Routes
import { router } from './routes/index.routes.js'
app.use(router)

// Server
app.listen(port, () => {
    console.log('Server on', port)
})