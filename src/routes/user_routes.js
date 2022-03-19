const router = require('express').Router()
const auth = require("../api/auth/verify_jwt")
const passport = require('passport')

const UserController = require("../api/controllers/user_controller")

router.get('/clientes', auth, UserController.read)
router.get('/clientes/:cpf', auth, UserController.readOne)
router.post('/novo_cliente', auth, UserController.create)
router.put('/clientes/:cpf', auth, UserController.update)
router.delete('/clientes/:cpf', auth, UserController.delete)

/* router.get("/clientes/login", passport.authenticate('jwt', { session: false }), router) */

module.exports = router