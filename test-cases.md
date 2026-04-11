# Test Cases

---

## TC_LOGIN_001 - Login com credenciais válidas

**Objetivo:**  
Verificar se um usuário previamente cadastrado consegue acessar o sistema com credenciais válidas.

**Pré-condições:**  
- Usuário previamente cadastrado  
- Sistema disponível  
- Usuário na tela de login  

**Dados de teste:**  
- Email: test@gmail.com  
- Senha: test123@#  

**Passos:**  
1. Acessar a página de login do sistema  
2. Inserir email válido  
3. Inserir senha válida  
4. Clicar no botão "Sign In"  

**Resultado esperado:**  
- O login deve ser realizado com sucesso  
- O usuário deve ser redirecionado para o dashboard  

---

## TC_LOGIN_002 - Login com senha inválida

**Objetivo:**  
Verificar se o sistema bloqueia o acesso quando a senha informada é inválida.

**Pré-condições:**  
- Usuário previamente cadastrado  
- Sistema disponível  
- Usuário na tela de login  

**Dados de teste:**  
- Email: test@gmail.com  
- Senha: test123  

**Passos:**  
1. Acessar a página de login do sistema  
2. Inserir email válido  
3. Inserir senha inválida  
4. Clicar no botão "Sign In"  

**Resultado esperado:**  
- O login não deve ser realizado  
- O sistema deve permanecer na tela de login  
- Deve ser exibida a mensagem "Invalid credentials."

---

## TC_LOGIN_003 - Login com campos vazios

**Objetivo:**  
Verificar se o sistema valida campos obrigatórios ao tentar realizar login sem preenchimento.

**Pré-condições:**  
- Sistema disponível  
- Usuário na tela de login  

**Dados de teste:**  
- Email: vazio
- Senha: vazia 

**Passos:**  
1. Acessar página de login do sistema
2. Deixar os campos de email e senha vazios
3. Clicar no botão "Sign In"

**Resultado esperado:**  
- O login não deve ser realizado
- O sistema deve permanecer na tela de login
- Deve ser exibida a mensagem "Email and password are required."

---

## TC_REGISTER_001 - Cadastro com dados válidos

**Objetivo:**  
Verificar se um usuário consegue se cadastrar no sistema com dados válidos

**Pré-condições:**  
- Sistema disponível
- Usuário na tela de cadastro

**Dados de teste:**  
- Nome: User
- Email: usertest@gmail.com
- Senha: user123@#
- Confirmar senha: user123@# 

**Passos:**  
1. Acessar a página de login do sistema
2. Clicar em "Create account"
3. Preencher o campo nome com um valor válido  
4. Preencher o campo email com um valor válido  
5. Preencher o campo senha com um valor válido 
6. Preencher o campo confirmar senha com o mesmo valor da senha  
7. Clicar no botão "Register"

**Resultado esperado:**  
- O cadastro deve ser realizado
- O sistema deve redirecionar para a página de login
- Deve ser exibida a mensagem "Account created successfully."

---

## TC_REGISTER_002 - Cadastro com senha curta

**Objetivo:**  
Verificar se o sistema impede o cadastro quando a senha informada possui menos de 6 caracteres.

**Pré-condições:**  
- Sistema disponível
- Usuário na tela de cadastro

**Dados de teste:**  
- Nome: User2
- Email: user2@gmail.com
- Senha: us
- Confirmar senha: us

**Passos:**  
Acessar a página de login do sistema
2. Clicar em "Create account"
3. Preencher o campo nome com um valor válido  
4. Preencher o campo email com um valor válido  
5. Preencher o campo senha com menos de 6 caracteres
6. Preencher o campo confirmar senha com o mesmo valor da senha  
7. Clicar no botão "Register"

**Resultado esperado:**  
- O cadastro não deve ser realizado
- O sistema deve permanecer na tela de cadastro  
- Deve ser exibida a mensagem "Password must be at least 6 characters."

---

## TC_REGISTER_003 - Cadastro com email inválido

**Objetivo:**  
Verificar se o sistema impede o cadastro quando o email informado possui formato inválido.

**Pré-condições:**  
- Sistema disponível  
- Usuário na tela de cadastro  

**Dados de teste:**  
- Nome: User3  
- Email: user3gmail.com  
- Senha: user123@#  
- Confirmar senha: user123@#  

**Passos:**  
1. Acessar a página de login do sistema  
2. Clicar em "Create account"  
3. Preencher o campo nome com um valor válido  
4. Preencher o campo email com um valor inválido  
5. Preencher os campos senha e confirmar senha com valores válidos  
6. Clicar no botão "Register"  

**Resultado esperado:**  
- O cadastro não deve ser realizado  
- O sistema deve permanecer na tela de cadastro  
- Deve ser exibida a mensagem "Invalid email."  

---

## TC_REGISTER_004 - Cadastro com email duplicado

**Objetivo:**  
Verificar se o sistema impede o cadastro de um usuário com email já registrado.

**Pré-condições:**  
- Sistema disponível  
- Usuário na tela de cadastro  
- Já existe uma conta cadastrada com o email informado  

**Dados de teste:**  
- Nome: User4  
- Email: usertest@gmail.com  
- Senha: user123@#  
- Confirmar senha: user123@#  

**Passos:**  
1. Acessar a página de login do sistema  
2. Clicar em "Create account"  
3. Preencher o campo nome com um valor válido  
4. Preencher o campo email com um email já cadastrado  
5. Preencher os campos senha e confirmar senha com valores válidos  
6. Clicar no botão "Register"  

**Resultado esperado:**  
- O cadastro não deve ser realizado  
- O sistema deve permanecer na tela de cadastro  
- Deve ser exibida a mensagem "Email already registered."  

---

## TC_SESSION_001 - Logout com sucesso

**Objetivo:**  
Verificar se o usuário consegue encerrar a sessão com sucesso.

**Pré-condições:**  
- Sistema disponível  
- Usuário autenticado no sistema  
- Dashboard visível  

**Dados de teste:**  
- Não aplicável  

**Passos:**  
1. Estar logado no sistema  
2. Acessar o dashboard  
3. Clicar no botão "Logout"  

**Resultado esperado:**  
- O usuário deve ser deslogado com sucesso  
- O sistema deve redirecionar o usuário para a tela de login  
- Deve ser exibida a mensagem "Logged out successfully."  

---

## TC_SESSION_002 - Persistência de sessão após refresh

**Objetivo:**  
Verificar se a sessão do usuário permanece ativa após atualizar a página.

**Pré-condições:**  
- Sistema disponível  
- Usuário autenticado no sistema  
- Dashboard visível  

**Dados de teste:**  
- Não aplicável  

**Passos:**  
1. Realizar login com credenciais válidas  
2. Estar na tela de dashboard  
3. Atualizar a página do navegador  

**Resultado esperado:**  
- O usuário deve permanecer autenticado  
- O dashboard deve continuar visível após o refresh  

---