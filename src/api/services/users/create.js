const { badRequest } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then(
        () => {
            const create = userSchema.create(req.body)
                res.status(201).send({
                status: 201,
                message: "Cliente criado com sucesso.",
                dados: create
            })
        },
        err => {
            console.error(err)
            res.status(400).send(badRequest)
        }
    )}


