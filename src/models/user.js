const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema(
	{
        _id: { type: String, required: true },
        nome: { type: String, required: true },
        email: { type: String, required: true },
        numeroCelular: { type: Number, required: true },
        nascimento: { type: Date, required: true },
        cpf: { type: String, required: true },
        endereco: { type: Array, required: true },
        senha: { type: String, required: true },
        pedidos: {type: Array, required: false, default: [] },
        criadoEm: { type: Date, required: true }
	}
)

userSchema.method("compare", async (formPass, userPass) => { 
    return bcrypt.compare(formPass, userPass)
})

const model = mongoose.model("Clientes", userSchema)

module.exports = model