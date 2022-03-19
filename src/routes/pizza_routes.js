const router = require('express').Router()
const auth = require("../api/auth/verify_jwt")

const PizzaController = require("../api/controllers/pizza_controller")

router.get('/pizzas', auth, PizzaController.read)
router.get('/pizzas/:id', auth, PizzaController.readOne)
router.post('/nova_pizza', auth, PizzaController.create)
router.put('/pizzas/:id', auth, PizzaController.update)
router.delete('/pizzas/:id', auth, PizzaController.delete)

module.exports = router