const { formatPrice } = require('./utils')

const Cart = {
    init(oldCart) {
        if(oldCart) {
            this.items = oldCart.items
            this.total = oldCart.total
        } else {
            this.items = []
            this.total = {
                quantity: 0,
                price:0,
                formattedPrice: formatPrice(0)
            }
        }

        return this
    },
    addOne(product){},
    removeOne(productId){},
    delete(productId){}
}

module.exports = Cart