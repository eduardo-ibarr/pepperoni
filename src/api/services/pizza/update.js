const { badRequest } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")

module.exports = async (req, res) => {
    const id = req.paramas.id
    const data = req.body
    try {
        const doc = await pizzaSchema.findOne({_id: id})
        doc.slug = data
        await doc.save()
        res.status(200).send({
            code: 200,
            message: `Pizza de ID ${id} atualizada com sucesso.`
        })

    } catch (error) {
        console.error(error)
        res.status(400).send(badRequest)
    }

}

