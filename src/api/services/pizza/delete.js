const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id
    connection.then(
        () => {
            pizzaSchema.findOneAndDelete({_id: id}, (error, doc) => {
                if (error) {
                    console.error(error)
                }
              })
            res.status(200).send({
                code: 201,
                message: `Pizza com ID ${id} excluída com sucesso.`
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

