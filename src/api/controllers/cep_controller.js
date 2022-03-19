const viaCEP = require("../services/external/via_cep")

class CEP {
    search(req, res) {
        viaCEP(req, res)
    }
}

module.exports = new CEP