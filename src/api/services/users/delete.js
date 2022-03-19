const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.params.cpf
    try {
        connection.then(
            () => {
                userSchema.deleteOne({_id: cpf})
                res.status(200).send({
                    code: 201,
                    message: `Cliente com CPF ${cpf} excluído com sucesso.`
                })
            },
            err => {throw err}
        )
    } catch (error) {
        console.error(error)
        res.status(404).send(notFound)
    }

}

