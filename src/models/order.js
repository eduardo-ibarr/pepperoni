const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
	{
        _id: { type: Number, required: true},
        pedidos: { type: Array, required: true, default: []},
        observacoes: { type: String, required: false, default: null },
        dados: { type: Array, required: true },
        troco: [{ type: Array, required: false }],
        feedback: { type: String, required: false, default: null}
	}
)

const model = mongoose.model("Pedidos", orderSchema)

module.exports = model