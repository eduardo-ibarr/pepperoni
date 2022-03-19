const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    try {
        connection.then(
            pizzaSchema.find((err, arr) => {
                if(err){
                    res.json(err);
                }
                else{
                    res.json(arr);
                }
            })
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

