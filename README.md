# Fórmula 1 API 2023

Bem-vindo à API de Fórmula 1 de 2023! Esta API fornece informações sobre a temporada de 2023 da Fórmula 1, incluindo detalhes sobre corridas, equipes e pilotos.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas](#rotas)
- [Validação](#validação)


## Instalação

Para instalar e executar esta API localmente, siga os passos abaixo:

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/formula1-api-2023.git
    cd formula1-api-2023
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm start
    ```

## Uso

Uma vez que o servidor esteja em execução, você pode fazer requisições HTTP para a API utilizando um cliente como Postman, Insomnia, ou diretamente pelo seu código front-end.

A API estará disponível em `http://localhost:3000/api/v1`.

## Rotas

### Drivers

- **GET /drivers**: Retorna uma lista de todos os pilotos.
  - **Resposta Exemplo**:
    ```json
    [
      {
        "name": "Max Verstappen",
        "team": "Red Bull Racing",
        "points": 575,
        "id": "8e20e33f-b840-453b-b841-d49ae331d2f7"
      },
      ...
    ]
    ```

- **GET /drivers/:id**: Retorna detalhes de um piloto específico pelo ID.
  - **Resposta Exemplo**:
    ```json
    {
      "name": "Max Verstappen",
      "team": "Red Bull Racing",
      "points": 575,
      "id": "8e20e33f-b840-453b-b841-d49ae331d2f7"
    }
    ```

- **GET /drivers/standings/:position**: Retorna o piloto na posição especificada.
  - **Resposta Exemplo**:
    ```json
    {
      "name": "Sergio Perez",
      "team": "Red Bull Racing",
      "points": 285,
      "id": "cb1965ce-9c8b-4b77-b9fe-339bbb631517"
    }
    ```

- **POST /drivers**: Adiciona um novo piloto.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "Novo Piloto",
      "team": "Novo Time",
      "points": 100
    }
    ```

- **PUT /drivers/:id**: Atualiza um piloto existente pelo ID.
  - **Corpo da Requisição**:
    ```json
    {
      "points": 150
    }
    ```

- **DELETE /drivers/:id**: Remove um piloto pelo ID.

### Teams

- **GET /teams**: Retorna uma lista de todas as equipes com seus pontos somados.
  - **Resposta Exemplo**:
    ```json
    [
      {
        "team": "Red Bull Racing",
        "points": 860
      },
      ...
    ]
    ```

- **GET /teams/standings/:position**: Retorna a equipe na posição especificada.
  - **Resposta Exemplo**:
    ```json
    {
      "team": "Mercedes",
      "points": 409
    }
    ```

## Validação

Utilizamos o [Joi](https://joi.dev/) para validar os dados das requisições. Aqui estão os esquemas de validação usados:

### Driver Schema

```javascript
const driverSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    team: Joi.string().min(3).max(50).required(),
    points: Joi.number().min(0).max(1000).default(0),
});
```

### Update Driver Schema

```javascript
const updateDriverSchema = Joi.object({
    name: Joi.string().min(3).max(50),
    team: Joi.string().min(3).max(50),
    points: Joi.number().min(0).max(1000),
}).min(1);
```

### Position Validation

```javascript
const generatePositionSchema = (maxValue) => Joi.number().min(1).max(maxValue);
```
