const { badRequest } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")

module.exports = async (req, res) => {
    const cpf = req.paramas.cpf
    const data = req.body
    try {
        const doc = await userSchema.findOne({_id: cpf})
        doc.slug = data
        await doc.save()
        res.status(200).send({
            code: 200,
            message: `Cliente com CPF ${cpf} atualizado com sucesso.`
        })

    } catch (error) {
        console.error(error)
        res.status(400).send(badRequest)
    }

}

