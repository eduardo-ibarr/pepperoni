const axios = require("axios");
const { badRequest } = require("../../../constants/error_constants");

module.exports = (req, res) => {
    const cep = parseInt(req.params.cep)
    
    axios({
        method: "GET",
        url: `https://viacep.com.br/ws/${cep}/json/`
    })
        .then(response => {
            const result = {
                estado: response.data.uf,
                cidade: response.data.localidade,
                bairro: response.data.bairro,
                rua: response.data.logradouro,
                complemento: response.data.complemento
            }
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).send(badRequest)
            console.log(err);
        })
}

