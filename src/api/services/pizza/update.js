const { badRequest } = require("../../../constants/error_constants")
const pizzaSchema = require("../../../models/pizza")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    connection.then(
        () => {
            pizzaSchema.findByIdAndUpdate(id, {$set: data}, (err, data) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.status(200).send({
                        code: 200,
                        message: `Pizza com id ${id} atualizada com sucesso.`
                    })                    
                }
            })
        },
        err => {
            console.error(err)
            res.status(400).send(badRequest)
        }
    )
}

