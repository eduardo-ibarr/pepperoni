const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    try {
        connection.then(
            () => {
                const users = userSchema.find((err, arr) => {
                    if (err) console.log(err)

                    const json = JSON.stringify(arr)
                    return json
                })
                res.status(200).send(users)        
            },
            err => {throw err}
        )
    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

