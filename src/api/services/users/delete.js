const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = async (req, res) => {
    const cpf = req.paramas.cpf
    try {
        connection.then(
            () => {
                await userSchema.deleteOne({_id: cpf})
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

