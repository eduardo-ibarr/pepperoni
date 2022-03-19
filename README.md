# Pepperoni API

API criada para tratar todos os dados dos pedidos vindos do bot Pepperoni, que faz o atendimento à Pizzaria do Eduardo.

As dúvidas e solicitações, relacionadas ao acesso da API, devem ser tratadas em particular com o desenvolvedor pelo email eduardoibarr56@gmail.com.

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais pedidos. |
| `POST` | Utilizado para criar um novo pedido. |
| `PUT` | Atualiza dados de um pedido. |
| `DELETE` | Remove um pedido do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Dados criados com sucesso (created).|
| `400` | Dados inválidos (bad request).|
| `401` | Dados de acesso inválidos (unauthorized).|
| `404` | Dados inexistentes ou não encontrados (not found).|

## Autenticação por tokens de acesso

###  Solicitando o token [POST /login]
Utilizando as informações API_USER e API_PASSWORD enviadas pelo desenvolvedor, envie um POST com os dados para receber um `token`.
O `token` é válido por 30 minutos.

+ Request (application/json)

    + Body

            {
                "user": "API_USER",
                "password": "API_PASSWORD"
            }

+ Response 200 (application/json)

    + Body

            {
                "auth": true,
                "token": "[token]",
                "expiresIn": 1800
            }
            
###  Desconectando-se da API [POST /logout]
Para se desconectar da api, envie um POST com o corpo da requisição vazio.

+ Request (application/json)

    + Headers

            x-acess-token: [token]

## Pedidos

São os pedidos da pizzaria, cadastrados no banco de dados.

### Listar todos os pedidos; [GET /pedidos]

+ Request (application/json)

    + Headers

            x-acess-token: [token]

+ Response 200 (application/json)

        {
            "_id": number,
            "resumo": {
                "itens": [
                    {
                        "pizza": string,
                        "preco": number
                    }
                ]
            },
            "dados": {
                "nome": string,
                "endereco": string,
                "pagamento": string
            },
            "observacoes": string,
            "troco": {
                "dinheiro": number,
                "devolve": number
            },
            "feedback": string
        },
        {
            "_id": number,
            "resumo": {
                "itens": [
                    {
                        "pizza": string,
                        "preco": number
                    }
                ]
            },
            "dados": {
                "nome": string,
                "endereco": string,
                "pagamento": string
            },
            "observacoes": string,
            "troco": {
                "dinheiro": number,
                "devolve": number
            },
            "feedback": string
        }

+ Response 404 (application/json)

        {
            "error": true,
            "code": 404
            "message": "Nenhum registro foi encontrado."
        }

+ Response 401 (application/json)

        {
            "error": true
            "code": 401,
            "message": "Acesso não autorizado."
        }

### Novo pedido; [POST /cadastrar-pedido]

+ Attributes (object)

    + _id (number, required)
    + resumo (object, required)
        + itens (array, required)
            + pizza (string, required)
            + preco (number, required)
    + dados (object, required) 
        + nome (string, required)
        + endereco (string, required)
        + pagamento (string, required)
    + observacoes (string, optional)
    + troco (object, optional)
        + dinheiro (number, required)
        + troco (number, required)
    + feedback (string, optional)

+ Request (application/json)

    + Headers

            x-acess-token: [token]

    + Body

            {
                "_id": 1234,
                "resumo": {
                    "itens": [
                        {
                            "pizza": Pizza Califórnia,
                            "preco": 22.5
                        }
                    ]
                },
                "dados": {
                    "nome": Eduardo,
                    "endereco": Rua Independência, 1234,
                    "pagamento": Dinheiro
                },
                "observacoes": "Sem azeitonas",
                "troco": {
                    "dinheiro": 50,
                    "devolve": 27.5
                },
                "feedback": "Gostei bastante."
            }

+ Response 201 (application/json)

    + Body

            {
                "code": 201
                "id": 1234,
            }

+ Response 400 (application/json)

    + Body

            {
                "error": true
                "code": 400,
                "message": "Verifique os dados informados e tente novamente."
            }

+ Response 401 (application/json)

        {
            "error": true
            "code": 401,
            "message": "Acesso não autorizado."
        }

### Detalhar um pedido específico; [GET /pedidos/{id}]

+ Parameters
    + id (required, number) - ID do pedido

+ Request (application/json)

    + Headers

            x-acess-token: [token]

+ Response 200 (application/json)
  Todos os dados do pedido.

    + Body

            {
                "_id": number,
                "resumo": {
                    "itens": [
                        {
                            "pizza": string,
                            "preco": number
                        }
                    ]
                },
                "dados": {
                    "nome": string,
                    "endereco": string,
                    "pagamento": string
                },
                "observacoes": string,
                "troco": {
                    "dinheiro": number,
                    "devolve": number
                },
                "feedback": string
            }

+ Response 404 (application/json)
  Quando o pedido não for encontrado.

    + Body

            {
                "error": true
                "code": 404,
                "message": "Nenhum registro foi encontrado."
            }

+ Response 401 (application/json)

        {
            "error": true
            "code": 401,
            "message": "Acesso não autorizado."
        }

### Editar um pedido; [PUT  /pedidos/{id}]

+ Parameters
    + id (required, number) - ID do pedido

+ Request (application/json)

    + Headers

            x-acess-token: [token]

    + Body

            {
                "_id": number,
                "resumo": {
                    "itens": [
                        {
                            "pizza": string,
                            "preco": number
                        }
                    ]
                },
                "dados": {
                    "nome": string,
                    "endereco": string,
                    "pagamento": string
                },
                "observacoes": string,
                "troco": {
                    "dinheiro": number,
                    "devolve": number
                },
                "feedback": string
            }

+ Response 200 (application/json) 

    + Body

            {
                "code": 200
                "message": "O pedido de id {id} foi atualizado com sucesso."
            }

+ Response 401 (application/json)

    + Body

            {
                "error": true
                "code": 401,
                "message": "Acesso não autorizado."
            }

+ Response 404 (application/json)

    + Body

            {
                "error": true
                "code": 404,
                "message": "Nenhum registro foi encontrado."
            }

### Remover um pedido; [DELETE /pedidos/{id}]

+ Parameters
    + id (required, number) - ID do pedido

+ Request (application/json)

    + Headers

            x-acess-token: [token]

+ Response 200 (application/json)

    + Body

            {
                "code": 200,
                "message": "O pedido de id {id} foi excluído com sucesso."
            }

+ Response 404 (application/json)

    + Body

            {
                "error": true
                "code": 404,
                "message": "Nenhum registro foi encontrado."
            }

+ Response 401 (application/json)

        {
            "error": true
            "code": 401,
            "message": "Acesso não autorizado."
        }

## Stack utilizada


**Back-end:** Node, Express

**Database:** MongoDB

**Authentication:** JSON Web Token

