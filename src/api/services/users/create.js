const { badRequest } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    try {
        connection.then(
            () => {
                const create = userSchema.create(req.body)
                    res.status(201).send({
                    status: 201,
                    message: "Cliente criado com sucesso.",
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

