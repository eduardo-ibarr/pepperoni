const { badRequest } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id
    const data = req.body

    connection.then(
        () => {
            orderSchema.findOneAndUpdate({_id: id}, {$set: data});
        },
        err => {
            console.error(err)
            res.status(400).send(badRequest)
        }
    )
}

