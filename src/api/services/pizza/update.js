const { badRequest } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    try {
        connection.then(
            () => {
                pizzaSchema.findOneAndUpdate({_id: id}, {$set: data});
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

