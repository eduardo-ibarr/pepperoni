const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.paramas.id
    try {
        connection.then(
            () => {
                orderSchema.deleteOne({_id: id})
                res.status(200).send({
                    code: 201,
                    message: `Pedido com ID ${id} excluído com sucesso.`
                })
            },
            err => {throw err}
        )
    } catch (error) {
        console.error(error)
        res.status(404).send(notFound)
    }

}

