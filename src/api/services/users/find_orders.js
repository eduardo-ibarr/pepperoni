const { notFound } = require("../../../constants/error_constants")
const userSchema = require("../../../models/user")
const connection = require("../../../database/connection")

module.exports = (req, res) => {
    const cpf = req.params.cpf

    connection.then(
        () => {
            userSchema.find({ _id: cpf }, (err, arr) => {
                const index = arr.findIndex(item => item)

                if (index === -1) {
                    res.status(404).send(notFound)
                } else {
                    arr.forEach(item => {
                        const obj = {}
                        item.pedidos.forEach(pedido => {
                            obj = {
                                    id: pedido._id,
                                    itens: pedido.resumo.itens.forEach(item => {
                                        return {
                                            nome: item.nome,
                                            preco: item.preco
                                        }
                                    }),
                                    endereco: pedido.endereco.forEach(dado => {
                                        return {
                                            cep: dado.cep,
                                            cidade: dado.dados.cidade,
                                            bairro: dado.dados.bairro,
                                            rua: dado.dados.rua,
                                            numero: dado.numeroCasa
                                        }
                                    }),
                                    pagamento: pedido.pagamento
                                }
                        })
                        res.status(200).send(obj);
                    })
                }
            })
        },
        err => { 
            console.error(err)
            res.status(404).send(notFound)
        }
    )
}

