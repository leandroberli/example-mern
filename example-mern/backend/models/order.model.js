const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id_user: {type: String, required: true },
    id_product: { type: String, required: true },
    observations: { type: String, required: false },
    price: { type: Number, required: true },
},{
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

