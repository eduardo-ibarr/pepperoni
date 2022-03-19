const express = require("express")
const app = express()

const authRoutes = require('./routes/auth_routes')
const orderRoutes = require('./routes/order_routes')
const userRoutes = require("./routes/user_routes")
const cepRoute = require("./routes/cep_route")
const pizzaRoute = require("./routes/pizza_routes")

require("dotenv").config()

const portServer = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', authRoutes)
app.use('/', orderRoutes)
app.use('/', cepRoute)
app.use('/', userRoutes)
app.use('/', pizzaRoute)

app.listen(portServer, () => {
    console.log(`API executando na porta ${portServer}`)
})