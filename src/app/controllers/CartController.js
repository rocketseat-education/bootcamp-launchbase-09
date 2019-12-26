const Cart = require('../../lib/cart')

const LoadProductsService = require('../services/LoadProductService')

module.exports = { 
    async index(req, res) {
        try {  

            const product = await LoadProductsService.load('product', {where: { id: 1}})

            let { cart } = req.session

            // gerenciador de carrinho
            cart = Cart.init(cart).addOne(product)

            return res.render("cart/index", { cart })
        }
        catch(err) {
            console.error(err)
        }

    }
}