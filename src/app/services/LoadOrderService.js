const Order = require('../models/Order')
const User = require('../models/User')
const LoadProductService = require('./LoadProductService')

const { formatPrice, date } = require('../../lib/utils')

async function format(order) {
    // detalhes do produto
    order.product = await LoadProductService.load('productWithDeleted', {
        where: { id: order.product_id }
    })
    // detalhes do comprador
    order.buyer = await User.findOne({
        where: { id: order.buyer_id }
    })

    // detalhes do vendedor
    order.seller = await User.findOne({
        where: { id: order.seller_id }
    })

    // formatação de preço
    order.formattedPrice = formatPrice(order.price)
    order.formattedTotal = formatPrice(order.total)

    // formatação do status
    const statuses = {
        open: 'Aberto',
        sold: 'Vendido',
        canceled: 'Cancelado'
    }

    order.formattedStatus = statuses[order.status]

    // formatação de atualizado em ..
    const updatedAt = date(order.updated_at)
    order.formattedUpdatedAt = `${order.formattedStatus} em ${updatedAt.day}/${updatedAt.month}/${updatedAt.year} às ${updatedAt.hour}h${updatedAt.minutes}`

    return order
}

const LoadService = {
    load(service, filter) {
        this.filter = filter
        return this[service]()
    },
    async order(){
        try {
            const order = await Order.findOne(this.filter)
            return format(order)
        } catch (error) {
            console.error(error)
        }

    },
    async orders(){
        try {
            const orders = await Order.findAll(this.filter)
            const ordersPromise = orders.map(format)
            return Promise.all(ordersPromise)
        } catch (error) {
            console.error(error)
        }
    },
    format,
}

module.exports = LoadService