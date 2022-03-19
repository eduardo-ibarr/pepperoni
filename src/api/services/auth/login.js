const jwt = require("jsonwebtoken")
const { unauthorized } = require("../../../constants/error_constants")

require("dotenv").config()

module.exports = (req, res) => {
    if (req.body.user === process.env.API_USER && req.body.password === process.env.API_PASSWORD) {
        const token = jwt.sign({userID: 1}, process.env.SECRET, { expiresIn: 1800 })
        return res.json({auth: true, token, expiresIn: 1800})
    }

    res.status(401).send(unauthorized)
}