const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = req.params.id
    try {
        connection.then(
            pizzaSchema.find({ _id: id }, (err, arr) => {
                const index = arr.findIndex(item => item)

                if (index === -1) {
                    res.status(404).send(notFound)
                } else {
                    res.status(200).send(arr);
                }
            })
        )
    } catch(err) {
        console.error(err)
        res.status(404).send(notFound)
    }
}

