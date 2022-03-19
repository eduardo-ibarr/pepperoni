const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")
const jwt = require("jsonwebtoken")

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
                            const token = jwt.sign({userID: 1}, process.env.SECRET, { expiresIn: 1800 })
                            return res.status(200).json({auth: true, message: "SUCESS", token, expiresIn: 1800})
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

