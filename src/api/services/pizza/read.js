const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")

module.exports = async (req, res) => {
    try {
        const pizza = await pizzaSchema.find().lean()
        res.status(200).send(pizza)

    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

