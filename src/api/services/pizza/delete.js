const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")

module.exports = async (req, res) => {
    const id = req.paramas.id
    try {
        await pizzaSchema.deleteOne({_id: id})
        res.status(200).send({
            code: 201,
            message: `Pizza de ID ${id} excluída com sucesso.`
        })
    } catch (error) {
        console.error(error)
        res.status(404).send(notFound)
    }

}

