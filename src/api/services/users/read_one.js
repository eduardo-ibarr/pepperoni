const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")

module.exports = async (req, res) => {
    const cpf = req.paramas.cpf
    try {
        const user = await userSchema.find({_id: cpf}).lean()
        res.status(200).send(user)
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

