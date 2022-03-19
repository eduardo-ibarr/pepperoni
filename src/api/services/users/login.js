const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.body.cpf
    const pass = req.body.pass
    
    connection.then(
        () => {
            userSchema.find({ _id: cpf },(err, arr) => {
                if(err){
                    res.status(400).json(err);
                }
                else{
                    arr.forEach(item => {
                        if (cpf === item._id && pass === item.senha) {
                            res.status(200).send("SUCESS")
                        } else {
                            res.status(400).send("INCORRECT DATA")
                        }
                    })
                }
            })
        },
        err => { 
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

