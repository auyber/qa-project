# API - Uso do Postman

## Exercício 1 - GET recurso específico

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts/1

**Método:**  
GET

**Descrição:**  
Requisição realizada para obter um post específico da API.

**Validações realizadas:**  
- Status code 200  
- Retorno em formato JSON  
- Campo "id" com valor 1  
- Presença dos campos "userId", "title" e "body"  

**Resultado obtido:**  
- A API retornou corretamente o recurso solicitado com estrutura válida  


---

## Exercício 2 - GET com query parameter

**Endpoint:**  
https://jsonplaceholder.typicode.com/comments?postId=1

**Método:**  
GET

**Descrição:**  
Requisição realizada utilizando query parameter para filtrar comentários por postId.

**Validações realizadas:**  
- Status code 200  
- Retorno em formato JSON  
- Os itens retornados possuem o campo "postId" igual a 1  
- Presença dos campos "id", "name", "email" e "body"  

**Resultado obtido:**  
- A API retornou corretamente os dados filtrados pelo parâmetro informado  


---

## Exercício 3 - GET com path parameter

**Endpoint:**  
https://jsonplaceholder.typicode.com/users/3

**Método:**  
GET

**Descrição:**  
Requisição realizada utilizando path parameter para obter um usuário específico.

**Validações realizadas:**  
- Status code 200  
- Campo "id" com valor 3  
- Presença dos campos "name", "username" e "email"  
- Estrutura de endereço ("address") presente  

**Resultado obtido:**  
- A API retornou corretamente o usuário correspondente ao ID informado  


---

## Exercício 4 - GET recurso inexistente

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts/999999

**Método:**  
GET

**Descrição:**  
Requisição realizada para validar o comportamento da API ao solicitar um recurso inexistente.

**Validações realizadas:**  
- Verificação do comportamento da API para ID inexistente  
- Retorno vazio ou estrutura padrão  
- Consistência da resposta  

**Resultado obtido:**  
- A API retornou uma resposta vazia, indicando que o recurso não existe  


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