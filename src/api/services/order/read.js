const { notFound } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    connection.then(
        () => {
            orderSchema.find((err, arr) => {
                if(err){
                    res.json(err);
                }
                else{
                    res.send(arr);
                }
            })      
        },
        err => {
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

