const { badRequest } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")

module.exports = async (req, res) => {
    try {
        const create = await userSchema.create(req.body)
        res.status(201).send({
            status: 201,
            message: "Cliente criado com sucesso.",
            dados: create
        })

    } catch(error) {
        console.error(error)
        res.status(400).send(badRequest)
    }
}

