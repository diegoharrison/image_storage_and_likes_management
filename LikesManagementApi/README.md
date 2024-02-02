Instalação e Execução

- Certifique-se de ter o Node.js instalado em sua máquina.

- Navegue até o diretório LikesManagementApi no terminal.

- Execute o seguinte comando para instalar as dependências:
* npm install

- Após a instalação das dependências, execute o seguinte comando para iniciar a API:
* npm start

A API será iniciada e estará disponível em http://localhost:3001.

* Endpoints
GET - /api/likes/:imageId
- Retorna o número de curtidas para uma imagem específica.

POST - /api/likes/:imageId
- Incrementa o número de curtidas para uma imagem específica.