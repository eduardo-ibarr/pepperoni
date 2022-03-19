const { badRequest } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")

module.exports = async (req, res) => {
    try {
        const create = await pizzaSchema.create(req.body)
        res.status(201).send({
            status: 201,
            message: "Pizza adicionada com sucesso.",
            dados: create
        })

    } catch(error) {
        console.error(error)
        res.status(400).send(badRequest)
    }
}

