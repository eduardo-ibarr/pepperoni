const blacklist = require("../../../utils/blacklist")
const { logoffSucess } = require("../../../constants/auth_constants")

module.exports = (req, res) => {
    blacklist.push(req.headers["x-acess-token"])

    res.status(200).send(logoffSucess)
}