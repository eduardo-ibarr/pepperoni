const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.paramas.id
    try {
        connection.then(
            () => {
                const order = orderSchema.find({_id: id}).lean()
                res.status(200).send(order)
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

