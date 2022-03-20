const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then( 
        () => {
            pizzaSchema.find((err, arr) => {
                const array = []
                for (let i = 5; i < 10; i++) {
                    const item = arr[i];
                    array.push(item)
                }
                res.status(200).send(
                    {
                        sexta: array[5],
                        setima: array[6],
                        oitava: array[7],
                        nona: array[8],
                        decima: array[9],
                    }
                );
            })
        }),
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }    
}


