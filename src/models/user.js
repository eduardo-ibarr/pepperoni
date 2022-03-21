const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
        _id: { type: String, required: true },
        nome: { type: String, required: true },
        email: { type: String, required: true },
        numeroCelular: { type: Number, required: true },
        nascimento: { type: String, required: true },
        cpf: { type: String, required: true },
        endereco: { type: Array, required: true },
        senha: { type: String, required: true },
        pedidos: {type: Array, required: false, default: [] },
        criadoEm: { type: Date, required: true }
	}
)

const model = mongoose.model("Clientes", userSchema)

module.exports = model