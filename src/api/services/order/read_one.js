const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id
    
    connection.then(
        () => {
            const order = orderSchema.find({_id: id}).lean()
            res.status(200).send(order)
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

