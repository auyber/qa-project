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

## Exercício 5 - POST válido

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
POST

**Body enviado:**
{
  "title": "QA Test",
  "body": "Testing API",
  "userId": 1
}

**Descrição:**  
Requisição realizada para simular a criação de um novo recurso na API.

**Validações realizadas:**  
- Status code 201 
- Retorno em formato JSON 
- Presença do campo "id" gerado
- Dados retornados correspondem aos enviados

**Resultado obtido:**  
- A API retornou os dados enviados com geração de ID (ex: 101)
- O ID retornado é simulado, pois a API não persiste dados reais

---

## Exercício 6 - POST com campo faltando

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
POST

**Body enviado:**
{
  "title": "QA Test"
}

**Descrição:**  
Requisição realizada para observar o comportamento da API quando parte dos campos esperados não é enviada.

**Validações realizadas:**  
- Status code 201 
- Retorno em formato JSON 
- Presença do campo "id" gerado
- Observação do comportamento com payload incompleto

**Resultado obtido:**  
- A API aceitou a requisição mesmo com campos faltando
- Retornou apenas os dados enviados e um ID gerado
- Não houve validação obrigatória de campos

---

## Exercício 7 - POST com body vazio

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
POST

**Body enviado:**
{}

**Descrição:**  
Requisição realizada para analisar o comportamento da API com payload vazio.

**Validações realizadas:**  
- Status code 201 
- Retorno em formato JSON 
- Presença do campo "id" gerado
- Observação do comportamento com body vazio

**Resultado obtido:**  
- A API aceitou o payload vazio
- Retornou apenas um ID gerado
- Não houve validação de conteúdo obrigatório

---

## Exercício 8 - POST com tipos de dados inválidos

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
POST

**Body enviado:**
{
  "title": 123,
  "body": true,
  "userId": "abc"
}

**Descrição:**  
Requisição realizada para avaliar o comportamento da API quando os campos recebem tipos de dados diferentes do esperado.

**Validações realizadas:**  
- Status code 201 
- Retorno em formato JSON 
- Presença do campo "id" gerado
- Observação da validação de tipos de dados

**Resultado obtido:**  
- A API aceitou dados com tipos incorretos
- Retornou os mesmos dados enviados, com um ID gerado
- Não houve validação de tipo de dados

---

## Exercício 9 - POST com valores extensos

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts

**Método:**  
POST

**Body enviado:**
{
  "title": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "body": "Teste com texto grande para validar comportamento",
  "userId": 999999
}

**Descrição:**  
Requisição realizada para observar o comportamento da API ao receber valores extensos ou fora de um padrão comum.

**Validações realizadas:**  
- Status code 201 
- Retorno em formato JSON 
- Presença do campo "id" gerado
- Observação da resposta da API para valores fora do padrão

**Resultado obtido:**  
- A API aceitou os dados enviados sem restrições
- Retornou os mesmos valores com um ID gerado
- Não houve limitação de tamanho ou validação adicional do conteúdo

---

## Exercício 10 - PUT atualização de recurso

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts/1

**Método:**  
PUT

**Body enviado:**
{
  "id": 1,
  "title": "Updated QA Test",
  "body": "Updated content",
  "userId": 1
}

**Descrição:**  
Requisição realizada para simular a atualização de um recurso existente.

**Validações realizadas:**  
- Status code 200
- Retorno em formato JSON
- Dados retornados correspondem aos valores atualizados

**Resultado obtido:**  
- A API retornou os dados atualizados corretamente
- A atualização é simulada, pois a API não persiste alterações

---

## Exercício 11 - DELETE remoção de recurso

**Endpoint:**  
https://jsonplaceholder.typicode.com/posts/1

**Método:**  
DELETE

**Descrição:**  
Requisição realizada para simular a exclusão de um recurso existente.

**Validações realizadas:**  
- Status code 200
- Resposta vazia

**Resultado obtido:**  
- A API respondeu corretamente à requisição de exclusão
- A remoção é simulada, pois a API não persiste alterações