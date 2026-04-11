# API - Uso do Postman

## Requisição GET /posts

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
GET

**Descrição:**  
Foi realizada uma requisição para buscar a lista de posts da API pública JSONPlaceholder.

**Resultado esperado:**  
- Status code 200  
- Retorno de uma lista de posts em formato JSON  

**Resultado obtido:**  
- Status code 200  
- Lista de posts retornada com sucesso, contendo múltiplos objetos com os campos "userId", "id", "title" e "body"  

---

## Requisição POST /posts

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
POST

**Body enviado:**
```json
{
  "title": "QA Test",
  "body": "Testing API",
  "userId": 1
}