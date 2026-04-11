## BUG_001 - Validação de email permite formatos fracos

**Título:**  
Validação de email permite formatos com validação insuficiente

**Ambiente:**  
- Navegador: Chrome  
- Sistema: Windows  
- Aplicação: QA Auth Lab (local)  

**Pré-condições:**  
- Usuário na tela de cadastro  

**Passos para reproduzir:**  
1. Acessar a tela de cadastro  
2. Inserir nome válido  
3. Inserir email no formato "user3@gmail.co"  
4. Inserir senha válida  
5. Confirmar senha corretamente  
6. Clicar em "Register"  

**Resultado esperado:**  
- O sistema deve validar o formato completo do email  
- Deve rejeitar emails com domínio incompleto ou suspeito  

**Resultado atual:**  
- O sistema aceita o email "user3@gmail.co" como válido  
- O cadastro é realizado com sucesso  

**Evidência:**  
- Cadastro realizado com email incompleto  

**Severidade:** Medium  
**Prioridade:** Medium  

## BUG_002 - Weak password validation allows insecure passwords

**Título:**  
Sistema permite cadastro com senha composta apenas por números, sem exigir critérios mínimos de segurança.

**Ambiente:**  
- Navegador: Chrome  
- Sistema: Windows  
- Aplicação: QA Auth Lab (local)  

**Pré-condições:**  
- Sistema disponível  
- Usuário na tela de cadastro  

**Passos para reproduzir:**  
1. Acessar a página de login do sistema  
2. Clicar em "Create account"  
3. Preencher o campo nome com um valor válido  
4. Preencher o campo email com um valor válido  
5. Inserir senha composta apenas por números (ex: "123456")  
6. Confirmar a senha corretamente  
7. Clicar no botão "Register"  

**Resultado esperado:**  
- O sistema deve exigir critérios mínimos de segurança para senha  
- A senha deve conter combinação de letras, números e/ou caracteres especiais  
- O cadastro não deve ser realizado com senha fraca  

**Resultado atual:**  
- O sistema aceita senha composta apenas por números  
- O cadastro é realizado com sucesso  

**Evidência:**  
- Cadastro realizado com senha fraca  

**Severidade:** Medium  
**Prioridade:** High  

---

## BUG_002 - Validação de senha permite senhas fracas

**Título:**  
Sistema permite cadastro com senha composta apenas por números, sem critérios mínimos de segurança

**Ambiente:**  
- Navegador: Chrome  
- Sistema: Windows  
- Aplicação: QA Auth Lab (local)  

**Pré-condições:**  
- Sistema disponível  
- Usuário na tela de cadastro  

**Passos para reproduzir:**  
1. Acessar a página de login do sistema  
2. Clicar em "Create account"  
3. Inserir nome válido  
4. Inserir email válido  
5. Inserir senha composta apenas por números (ex: "123456")  
6. Confirmar a senha corretamente  
7. Clicar no botão "Register"  

**Resultado esperado:**  
- O sistema deve exigir critérios mínimos de segurança para senha  
- A senha deve conter combinação de letras, números e/ou caracteres especiais  
- O cadastro não deve ser realizado com senha fraca  

**Resultado atual:**  
- O sistema aceita senha composta apenas por números  
- O cadastro é realizado com sucesso  

**Evidência:**  
- Cadastro realizado com senha fraca  

**Severidade:** Média  
**Prioridade:** Alta  

---

## BUG_003 - Dados sensíveis armazenados no localStorage

**Título:**  
Dados de autenticação do usuário são armazenados em localStorage sem proteção

**Ambiente:**  
- Navegador: Chrome  
- Sistema: Windows  
- Aplicação: QA Auth Lab (local)  

**Pré-condições:**  
- Sistema disponível  
- Usuário cadastrado no sistema  

**Passos para reproduzir:**  
1. Realizar cadastro de um novo usuário  
2. Abrir as ferramentas de desenvolvedor do navegador (F12)  
3. Acessar a aba "Application" (ou "Aplicação")  
4. Navegar até a seção "Local Storage"  
5. Visualizar os dados armazenados  

**Resultado esperado:**  
- Dados sensíveis, como senha, não devem ser armazenados em texto simples no navegador  
- Informações de autenticação devem ser protegidas ou armazenadas de forma segura  

**Resultado atual:**  
- Os dados do usuário, incluindo a senha, são armazenados diretamente no localStorage  
- As informações podem ser visualizadas facilmente em texto simples  

**Evidência:**  
- Visualização dos dados do usuário no localStorage  

**Severidade:** Alta  
**Prioridade:** Alta  