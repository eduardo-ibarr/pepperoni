const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then( 
        () => {
            pizzaSchema.find({ _id: id }, (err, arr) => {
                const array = []
                for (let i = 4; i < 9; i++) {
                    const item = arr[i];
                    array.push(item)
                }
                res.status(200).send(array);
            })
        }),
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }    
}


