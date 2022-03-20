const { badRequest } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = parseInt(req.params.cpf)
    const data = req.body
    connection.then(
        () => {
            userSchema.findByIdAndUpdate(cpf, { $push: {pedidos: data } }, (err, data) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.status(200).send({
                        code: 200,
                        message: `Cliente com CPF ${cpf} atualizado com sucesso.`
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

