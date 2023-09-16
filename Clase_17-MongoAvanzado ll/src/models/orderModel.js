import mongoose from 'mongoose'

const orderCollection = 'Orders'

const orderSchema = mongoose.Schema({
    name:String,
    size:{
        index: true,
        type:String,
        enum:["small", "medium", "large"],
        default:"medium"
    },
    price:Number,
    quantity:Number,
    date:Date
})

const orderModel = mongoose.model(orderCollection, orderSchema)

export default orderModel