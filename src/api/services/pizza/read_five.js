const { notFound } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then(
        () => {
            pizzaSchema.find((err, arr) => {
                if(err){
                    res.json(err);
                }
                else{
                    const five = []
                    for (let i = 0; i <= 4; i++) {
                        const element = arr[i];
                        five.push(element)
                    }
                    res.json({five});
                }
            })
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

