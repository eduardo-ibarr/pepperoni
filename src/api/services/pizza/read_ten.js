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
                    const moreFive = []
                    for (let i = 4; i <= 9; i++) {
                        const element = arr[i];
                        moreFive.push(element)
                    }
                    res.json({moreFive});
                }
            })
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

