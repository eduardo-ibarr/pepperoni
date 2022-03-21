const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.params.cpf
    connection.then(
        () => {
            userSchema.find({ _id: cpf }, (err, arr) => {
                const index = arr.findIndex(item => item)

                if (index === -1) {
                    res.status(404).send(notFound)
                } else {
                    arr.forEach(item => {
                        res.status(200).send(item.pedidos);
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

