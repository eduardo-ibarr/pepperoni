const router = require('express').Router()
const auth = require("../api/auth/verify_jwt")
const passport = require('passport')

const UserController = require("../api/controllers/user_controller")

router.get('/clientes', auth, UserController.read)
router.get('/clientes/:cpf', auth, UserController.readOne)

router.get('/cliente/:cpf', auth, UserController.findOrder)
router.get('/endereco/:cpf', auth, UserController.findAdress)

router.post('/novo_cliente', auth, UserController.create)

router.put('/cliente/:cpf', auth, UserController.addOrder)
router.put('/clientes/:cpf', auth, UserController.update)

router.delete('/clientes/:cpf', auth, UserController.delete)

router.post('/clientes/auth/', auth, UserController.login)

module.exports = router