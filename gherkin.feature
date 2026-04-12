Funcionalidade: Autenticação e cadastro de usuários

Cenário: Login com credenciais válidas
Dado que o usuário está na tela de login
E possui uma conta cadastrada
Quando ele insere email e senha válidos
E clica no botão "Sign In"
Então ele deve ser redirecionado para o dashboard

Cenário: Login com senha inválida
Dado que o usuário está na tela de login
E possui uma conta cadastrada
Quando ele insere email válido e uma senha inválida
E clica no botão "Sign In"
Então ele deve permanecer na tela de login
E ser exibida a mensagem "Invalid credentials."

Cenário: Login com campos vazios
Dado que o usuário está na tela de login
Quando ele deixa os campos de email e senha vazios
E clicar no botão "Sign In"
Então o login não deve ser realizado
E o sistema deve permanecer na tela de login
E deve ser exibida a mensagem "Email and password are required."

Cenário: Cadastro com dados válidos
 Dado que o usuário esteja na tela de cadastro
Quando ele preencher o campo "Nome" com o valor "User"
E preencher o campo "Email" com o valor "usertest@gmail.com"
E preencher o campo "Senha" com o valor "user123@#"
E preencher o campo "Confirmar senha" com o valor "user123@#"
E clicar no botão "Register"
Então o cadastro deve ser realizado
E o sistema deve redirecionar para a página de login
E ser exibida a mensagem "Account created successfully."

Cenário: Cadastro com senha curta
Dado que o usuário está na tela de cadastro
Quando ele preenche o campo "Nome" com um valor válido
E preenche o campo "Email" com um valor válido
E preenche o campo "Senha" com menos de 6 caracteres
E preenche o campo "Confirmar senha" com o mesmo valor
E clica no botão "Register"
Então o cadastro não deve ser realizado
E o sistema deve permanecer na tela de cadastro
E deve ser exibida a mensagem "Password must be at least 6 characters."

Cenário: Cadastro com email inválido
Dado que o usuário está na tela de cadastro
Quando ele preenche o campo "Nome" com um valor válido
E preenche o campo "Email" com um formato inválido
E preenche o campo "Senha" com um valor válido
E preenche o campo "Confirmar senha" com o mesmo valor
E clica no botão "Register"
Então o cadastro não deve ser realizado
E o sistema deve permanecer na tela de cadastro
E o campo de email deve ser identificado como inválido

Cenário: Cadastro com email duplicado
Dado que o usuário está na tela de cadastro
E já existe uma conta cadastrada com o email informado
Quando ele preenche o campo "Nome" com um valor válido
E preenche o campo "Email" com um email já cadastrado
E preenche o campo "Senha" com um valor válido
E preenche o campo "Confirmar senha" com o mesmo valor
E clica no botão "Register"
Então o cadastro não deve ser realizado
E o sistema deve permanecer na tela de cadastro
E deve ser exibida a mensagem "Email already registered."

Cenário: Logout com sucesso
Dado que o usuário está autenticado no sistema
E está na tela de dashboard
Quando ele clica no botão "Logout"
Então ele deve ser deslogado com sucesso
E o sistema deve redirecionar para a tela de login
E deve ser exibida a mensagem "Logged out successfully."

Cenário: Persistência de sessão após refresh
Dado que o usuário está autenticado no sistema
E está na tela de dashboard
Quando ele atualiza a página do navegador
Então ele deve permanecer autenticado
E o dashboard deve continuar visível