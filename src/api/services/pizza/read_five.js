const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then(
        () => {
            pizzaSchema.find((err, arr) => {
                const array = []
                for (let i = 0; i < 5; i++) {
                    const item = arr[i];
                    array.push(item)
                }
                res.status(200).send(array);
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

