const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/orders")

module.exports = async (req, res) => {
    const id = req.paramas.id
    try {
        await orderSchema.deleteOne({_id: id})
        res.status(200).send({
            code: 201,
            message: `Pedido com ID ${id} excluído com sucesso.`
        })
    } catch (error) {
        console.error(error)
        res.status(404).send(notFound)
    }

}

