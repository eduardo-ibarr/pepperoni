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
                    const five = []
                    for (let i = 0; i <= 5; i++) {
                        const element = array[i];
                        five.push(element)
                    }
                    res.json(five);
                }
            })
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

