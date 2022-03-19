const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.params.cpf
    
    connection.then(
        () => {
            const user = userSchema.find({_id: cpf}).lean()
            res.status(200).send(user)
        },
        err => { 
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

