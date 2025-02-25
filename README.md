This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Daily Activities

## 26/02               ( WEDNESDAY )

Adicionar: 
- Fluxo de Login / SignUp
- Token na storage da aplicação
- Fluxo de Logout

## 27/02               ( THURSDAY )

Alterar:
- o Navbar para quando tiver logado ou não
- Mostrar Profile apenas da pessoa logada

Adicionar: 
- Tela de Posts


## 28/02               ( FRIDAY )


## 01/03               ( SATURDAY )


## 02/03               ( FRIDAY )





__________________

# Pages and Flow

LOGIN/SIGNUP

- Serão 2 formulários, dependendo da opção selecionada pelo usuário, será mostrado o form de REGISTER ou o de LOGIN

- Ao fazer o SIGNUP, deve mostrar alerta de sucesso e mostra o formulário de login.
- Ao fazer o LOGIN, deve ser guardado o token recebido no storage do navegador

__________________

FEED

- Mostrar a lista de posts, mostra a lista de 10 posts mais recentes.

- Caso queira carregar mais posts, deve clicar na opção "Mostrar mais".

- Na parte superior dessa listagem, deve ter um campo para que o usuário escreva sua própria postagem e o botão "Postar".


FEED (POSTS)

- Ícone de comentários, que ao clicar irá mostrar um modal com os 5 comentários mais recentes, e a opção "mostrar mais" para ir mostrar os mais antigos.

- Ícone de likes deve atualizar a quantidade a cada 10 segundos

__________________

PROFILE

- Mostrar as infos do usuário de forma simples.

- Oferecer a edição da conta

- Oferecer a remoção da conta.

- Oferecer o logout.

__________________

LIST OF FRIENDS

- Lista simples de amigos.

- Cada card do amigo mostra a imagem, nome e o ícone para desfazer amizade.

- Caso o card seja clicado, deve redirecionar para o profile dessa pessoa, com os posts dela.

__________________

LIST OF USERS

- Lista simples de usuários.

- Cada card do usuário mostra a imagem, nome e o ícone para pedir amizade.

- Caso o card seja clicado, deve redirecionar para o profile dessa pessoa, com os posts dela.

__________________

OTHERS

- No navbar deve ter um ícone com as notificações
- Quando o ícone for clicado, abrir um menu com as notificações

__________________

AUTH FLOW

- Quando logado, o usuário pode ver todas as telas, exceto a de Login/SignUp

- Quando desconectado, o usuário poderá acessar:
        - Lista de outros usuários
        - Feed 
        - Tela de Login/SignUp




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
