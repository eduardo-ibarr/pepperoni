const { badRequest } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.paramas.cpf
    const data = req.body
    try {
        connection.then(
            () => {
                const doc = userSchema.findOne({_id: cpf})
                doc.slug = data
                doc.save()
                res.status(200).send({
                    code: 200,
                    message: `Cliente com CPF ${cpf} atualizado com sucesso.`
                })
            },
            err => {throw err}
        )

    } catch (error) {
        console.error(error)
        res.status(400).send(badRequest)
    }

}

