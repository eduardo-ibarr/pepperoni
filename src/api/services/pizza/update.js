const { badRequest } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.paramas.id
    const data = req.body
    try {
        connection.then(
            () => {
                const doc = pizzaSchema.findOne({_id: id})
                doc.slug = data
                doc.save()
                res.status(200).send({
                    code: 200,
                    message: `Pizza com id ${id} atualizada com sucesso.`
                })
            },
            err => {throw err}
        )

    } catch (error) {
        console.error(error)
        res.status(400).send(badRequest)
    }

}

