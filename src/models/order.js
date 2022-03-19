const mongoose = require("mongoose")

const dadosSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    pagamento: { type: String, required: true }
})

const trocoSchema = new mongoose.Schema({
    dinheiro: { type: Number, required: false, default: 0 },
    devolve: { type: Number, required: false, default: 0 }
})

const orderSchema = new mongoose.Schema(
	{
        _id: { type: Number, required: true},
        pedidos: { type: Array, required: true, default: []},
        observacoes: { type: String, required: false, default: null },
        dados: [dadosSchema],
        troco: [trocoSchema],
        feedback: { type: String, required: false, default: null}
	}
)

const model = mongoose.model("Pedidos", orderSchema)

module.exports = model