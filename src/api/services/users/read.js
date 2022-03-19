const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")

module.exports = async (req, res) => {
    try {
        const users = await userSchema.find().lean()
        res.status(200).send(users)

    } catch(error) {
        console.error(error)
        res.status(404).send(notFound)
    }
}

