const { badRequest } = require("../../../constants/error_constants")
const orderSchema = require("../../../models/order")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = parseInt(req.params.cpf)
    const id = parseInt(req.params.id)
    const data = req.body
    connection.then(
        () => {
            orderSchema.findByIdAndUpdate(cpf, {$set: {
                pedido: data
            }}, (err, data) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.status(200).send({
                        code: 200,
                        message: `Pedido com id ${id} adicionado ao cliente com CPF ${cpf} com sucesso.`
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

