const { badRequest } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        connection.then(
            () => {
                orderSchema.findOneAndUpdate({_id: id}, data)
                res.status(200).send({
                    code: 200,
                    message: `Pedido com id ${id} atualizado com sucesso.`
                })
            },
            err => {throw err}
        )

    } catch (error) {
        console.error(error)
        res.status(400).send(badRequest)
    }

}

