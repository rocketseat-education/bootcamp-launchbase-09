<h1 align="center">Launchstore</h1>
<p align="center">
<img src="https://i.imgur.com/y6SEcAN.png" alt="Launchstore Sample Image">
</p>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/maykbrito" target="_blank">
    <img alt="Twitter: maykbrito" src="https://img.shields.io/twitter/follow/maykbrito.svg?style=social" />
  </a>
</p>

> Ecommerce style done in Launchbase bootcamp

## ☕️ Techs

To work in frontend, we used: 
- HTML
- CSS
- JavaScript
- Nunjucks as template engine
- Browser Sync to help us develop faster using hot reload and auto refresh
- Lottie for animations

To work in backend, we used: 
- Node
- Express to help us with server/routes
- Nodemon to help us develop faster with auto reload server
- Multer to upload images
- Bcrypt for passwords
- Sessions
- Nodemailer
- Faker
- Postgres as database

## 🏃🏽‍♂️ Install

Clone this project into your machine.

You will need `3 steps` 
1. Install dependencies
2. Install database 
3. Seed database

Let's do it!

---

### 🗂 #1 Installing dependencies

1. In your root project folder, run code below

```sh
npm install
```

*make sure your internet is good, maybe it's take a while*

---

### 🗄 #2 Installing DATABASE

1. Install Postgres in your machine
2. Navigate to project root directory
3. Run code bellow to create database

```sh
npm run createdatabase
```

4. You will be prompted one time about `Postgres user` and twice about `Password for user postgres: `.

**IMPORTANT**
- you will need psql in your enviroment PATH

<img src="https://i.imgur.com/HB90eEm.png">

If everything runs ok, go to next step

---

### 🌱 #3 Seeding database

Let's put some fake data into database

1. Check if your `src/config/db.js` file matches your Postgres credentials
2. In your root Project folder, run code bellow

```sh
node seed.js
```

After while, about 10s, your database will be seeded. 

You can check it in your desired Postgres app.

<img src="https://i.imgur.com/qhVgPeE.png">

**Info** =========================

*All users has* `1111` as password

=============================

## 💻 Usage

```sh
npm run start
```

Open your browser and go to: 
http://localhost:5000

---

## 👨🏽‍🔧 Author

👤 **Mayk Brito**

* Website: gitshowcase.com/maykbrito
* Twitter: [@maykbrito](https://twitter.com/maykbrito)
* Github: [@maykbrito](https://github.com/maykbrito)
* LinkedIn: [@maykbrito](https://linkedin.com/in/maykbrito)

## 💜 Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_