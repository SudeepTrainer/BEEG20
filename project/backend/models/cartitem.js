const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
    quantity:Number
})

const CartItem = mongoose.model("CartItem",cartSchema);
module.exports = CartItem;