Rotas principais: 

1) Pizzas

- Adicionar: POST /nova_pizza
- Buscar todas: GET /pizzas
- Buscar uma: GET /pizzas/:id
- Atualizar uma: PUT /pizzas/:id
- Deletar uma uma: DELETE /pizzas/:id
- Buscar as primeiras 5: GET /five
- Buscar mais 5: GET /ten

2) Clientes

- Adicionar: POST /novo_cliente
- Buscar todos: GET /clientes
- Buscar um: GET /clientes/:cpf
- Adicionar pedidos em um cliente: PUT /cliente/:cpf
- Buscar pedidos de um cliente: GET /cliente/:cpf
- Buscar endereço de um cliente: GET /endereco/:cpf
- Atualizar um cliente: PUT /clientes/:cpf
- Deletar um cliente: DELETE /clientes/:cpf
- Logar um cliente: POST /clientes/auth/

3) Pedidos

- Adicionar: POST /novo_pedido
- Buscar todos: GET /pedidos
- Buscar um: GET /pedidos/:id
- Atualizar um: PUT /pedidos/:id
- Deletar um: DELETE /pedidos/:id


