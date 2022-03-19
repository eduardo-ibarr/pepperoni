const { badRequest } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/orders")

module.exports = async (req, res) => {
    const id = req.paramas.id
    const data = req.body
    try {
        const doc = await orderSchema.findOne({_id: id})
        doc.slug = data
        await doc.save()
        res.status(200).send({
            code: 200,
            message: `Pedido com ID ${id} atualizado com sucesso.`
        })

    } catch (error) {
        console.error(error)
        res.status(400).send(badRequest)
    }

}

