const express = require('express')
const routes = express.Router()

const CartController = require('../app/controllers/CartController')

routes.get('/', CartController.index)
    .post('/:id/add-one', CartController.addOne)
    .post('/:id/remove-one', CartController.removeOne)

module.exports = routes