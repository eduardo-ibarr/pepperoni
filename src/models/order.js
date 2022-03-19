const mongoose = require("mongoose")

const dadosSchema = new mongoose.Schema({
    _id: { type: Number, required: false, default: null},
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    pagamento: { type: String, required: true }
})

const trocoSchema = new mongoose.Schema({
    _id: { type: Number, required: false, default: null},
    dinheiro: { type: Number, required: false, default: null },
    devolve: { type: Number, required: false, default: null }
})

const orderSchema = new mongoose.Schema(
	{
        _id: { type: Number, required: true},
        resumo: { type: Array, required: true, default: []},
        observacoes: { type: String, required: false, default: null },
        dados: [dadosSchema],
        troco: [trocoSchema],
        feedback: { type: String, required: false, default: null}
	}
)

const model = mongoose.model("Pedidos", orderSchema)

module.exports = model