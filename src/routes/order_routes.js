const router = require('express').Router()
const auth = require("../api/auth/verify_jwt")

const OrderController = require("../api/controllers/order_controller")

router.get('/pedidos', auth, OrderController.read)
router.get('/pedidos/:id', auth, OrderController.readOne)
router.post('/novo_pedido', auth, OrderController.create)
router.put('/pedidos/:id', auth, OrderController.update)
router.delete('/pedidos/:id', auth, OrderController.delete)

module.exports = router