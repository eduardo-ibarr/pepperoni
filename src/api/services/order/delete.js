const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id

    connection.then(
        () => {
            orderSchema.deleteOne({_id: id})
            res.status(200).send({
                code: 201,
                message: `Pedido com ID ${id} excluído com sucesso.`
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

