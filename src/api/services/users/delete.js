const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")

module.exports = async (req, res) => {
    const cpf = req.paramas.cpf
    try {
        await userSchema.deleteOne({_id: cpf})
        res.status(200).send({
            code: 201,
            message: `Cliente com CPF ${cpf} excluído com sucesso.`
        })
    } catch (error) {
        console.error(error)
        res.status(404).send(notFound)
    }

}

