const mongoose = require("mongoose")

const pizzaSchema = new mongoose.Schema(
	{
        _id: { type: Number, required: true },
        nome: { type: String, required: true },
        preco: { type: Number, required: true},
    }
)

const model = mongoose.model("Pizzas", pizzaSchema)

module.exports = model