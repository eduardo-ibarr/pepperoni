const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.params.cpf
    try {
        connection.then(
            () => {
                const user = userSchema.find({_id: cpf}).lean()
                res.status(200).send(user)
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

