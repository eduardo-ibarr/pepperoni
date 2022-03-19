const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id
    try {
        connection.then(
            () => {
                pizzaSchema.deleteOne({_id: id})
                res.status(200).send({
                    code: 201,
                    message: `Pizza com id ${id} excluída com sucesso.`
                })
            },
            err => {throw err}
        )
    } catch (error) {
        console.error(error)
        res.status(404).send(notFound)
    }

}

