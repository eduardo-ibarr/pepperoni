const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")

module.exports = async (req, res) => {
    try {
        const order = await orderSchema.find().lean()
        res.status(200).send(order)

    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

