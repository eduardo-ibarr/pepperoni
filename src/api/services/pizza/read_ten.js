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
                        sexta: array[0],
                        setima: array[1],
                        oitava: array[2],
                        nona: array[3],
                        decima: array[4]
                    }
                );
            })
        }),
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }    
}


