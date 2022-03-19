const { badRequest } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    try {
        connection.then(
            () => {
                const create = orderSchema.create(req.body)
                    res.status(201).send({
                    status: 201,
                    message: "Pedido criado com sucesso.",
                    dados: create
                })
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(400).send(badRequest)
    }
}

