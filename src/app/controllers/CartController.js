const Cart = require('../../lib/cart')

const LoadProductsService = require('../services/LoadProductService')

module.exports = { 
    async index(req, res) {
        try {  
            let { cart } = req.session

            // gerenciador de carrinho
            cart = Cart.init(cart)

            return res.render("cart/index", { cart })
        }
        catch(err) {
            console.error(err)
        }

    },
    async addOne(req,res) {
        // pegar o id do produto e o produto
        const { id } = req.params

        const product = await LoadProductsService.load('product', {where: { id }})

        // pegar o carrinho da sessão
        let { cart } = req.session

        // adicionar o produto ao carrinho (usando nosso gerenciador de carrinho)
        cart = Cart.init(cart).addOne(product)

        // atualizar o carrinho da sessão
        req.session.cart = cart

        // redirecionar o usuário para a tela do carrinho.
        return res.redirect('/cart')

    }
}