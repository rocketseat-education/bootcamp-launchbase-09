<h1 align="center">Launchstore</h1>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>
<p align="center">
<img src="https://i.imgur.com/y6SEcAN.png" alt="Launchstore Sample Image">
</p>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/maykbrito" target="_blank">
    <img alt="Twitter: maykbrito" src="https://img.shields.io/twitter/follow/maykbrito.svg?style=social" />
  </a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

Frontend: 
- HTML
- CSS
- JavaScript
- Nunjucks as template engine
- Browser Sync to help us develop faster using hot reload and auto refresh
- Lottie for animations

Backend: 
- Node
- Express to help us with server/routes
- Nodemon to help us develop faster with auto reload server
- Multer to upload images
- Bcrypt for passwords
- Sessions
- Nodemailer
- Faker
- Postgres as database

## 💻 Projeto

Launchstore é um marketplace/e-commerce para compra e venda de produtos ou serviços.

## 🏃🏽‍♂️ Instalação

Faça o clone desse projeto na sua máquina.

Vamos dividir em `3 passos` simples.

1. Instalar dependencias
2. Instalar banco de dados
3. Alimentar o banco de dados

Vamos lá!

---

### 🗂 1 Instalar dependencias

1. Rode o código abaixo, no diretório principal do seu projeto.

```sh
npm install
```

*Verifique se sua internet está estável, pois isso poderá levar um tempo*

---

### 🗄 2 Instalar banco de dados

1. Instale o Postgres na sua máquina
2. Rode o código abaixo no diretório principal do seu projeto.

```sh
npm run createdatabase
```

3. Irá aparecer a seguinte mensagem `Postgres user`. Digite o nome de usuário do seu Postgres
4. Duas vezes irá aparecer `Password for user postgres: `. Digite a senha do seu banco de dados e aperte enter.

**IMPORTANT**
- você vai precisar ter a variável `psql` nas variáveis de ambiente da sua máquina.

<img src="https://i.imgur.com/HB90eEm.png">

Se tudo deu certo, então, vá para o próximo passo.

---

### 🌱 3 Alimentar o banco de dados

Vamos inserir alguns dados falsos para seu Launchstore.

1. Primeiro, verifique se seu arquivo `src/config/db.js` está com as credenciais corretas do seu Postgres.
2. Rode o código abaixo na diretório principal do seu projeto.

```sh
node seed.js
```

Após uns 10 segundos, seu banco de dados estará pronto.

Você poderá verificar seus dados no aplicativo do Postgres de sua preferência. Eu estou usando o Postbird

<img src="https://i.imgur.com/qhVgPeE.png">

**Informação importante** *Todos os usuários fictícios possuem a senha* `1111`


## 💻 Como usar

1. Rode o código abaixo no diretório principal do seu projeto.
```sh
npm run start
```

Agora, abra seu navegador e navegue até: 
http://localhost:5000

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)