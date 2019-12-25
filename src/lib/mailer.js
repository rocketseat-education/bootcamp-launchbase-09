const nodemailer = require('nodemailer')


module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "10a297e2e45361",
      pass: "e98b94865ebc59"
    }
  })