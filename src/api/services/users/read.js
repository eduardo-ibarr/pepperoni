const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = async (req, res) => {
    try {
        connection.then(
            () => {
                const users = await userSchema.find().lean()
                res.status(200).send(users)        
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

