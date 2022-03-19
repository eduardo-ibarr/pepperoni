const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.paramas.id
    try {
        connection.then(
            () => {
                const pizza = pizzaSchema.find({_id: id}).lean()
                res.status(200).send(pizza)
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

