const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = async (req, res) => {
    const cpf = req.paramas.cpf
    try {
        connection.then(
            () => {
                const user = await userSchema.find({_id: cpf}).lean()
                res.status(200).send(user)
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

