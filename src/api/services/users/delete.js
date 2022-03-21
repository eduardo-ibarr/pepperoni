const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.params.cpf
    connection.then(
        () => {
            userSchema.findOneAndDelete({_id: cpf}, (error, doc) => {
                if (error) {
                    console.error(error)
                }
            })
            res.status(200).send({
                code: 201,
                message: `Cliente com CPF ${cpf} excluído com sucesso.`
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

