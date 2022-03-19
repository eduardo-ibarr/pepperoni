const { badRequest } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then(
        () => {
            const create = orderSchema.create(req.body)
                res.status(201).send({
                status: 201,
                message: "Pedido criado com sucesso.",
                dados: create
            })
        },
        err => {
            console.error(err)
            res.status(400).send(badRequest)
        }
    )
}

