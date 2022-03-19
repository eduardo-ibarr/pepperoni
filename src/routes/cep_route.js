const router = require('express').Router()

const CEPController = require("../api/controllers/cep_controller")

router.get("/cep/:cep", CEPController.search)

module.exports = router