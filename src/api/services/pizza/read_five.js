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
                res.status(200).send({
                    primeira: array[0],
                    segunda: array[1],
                    terceira: array[2],
                    quarta: array[3],
                    quinta: array[4],
                });
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

