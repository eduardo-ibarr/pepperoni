const { badRequest } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    try {
        connection.then(
            () => {
                const create = pizzaSchema.create(req.body)
                    res.status(201).send({
                    status: 201,
                    message: "Pizza adicionada com sucesso.",
                    dados: create
                })
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(400).send(badRequest)
    }
}

