const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const DBxgo = mongoose.connection.useDb('Xgo');


const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    clientID: { type: mongoose.Types.ObjectId, required: true, ref: 'Customer'},
    deliveryID: { type: Number},
    clientSubID: { type: mongoose.Types.ObjectId, required: true, ref: 'Customer'},
    description_product: {type: String, required: true },
    quantity: {type: Number, required: true },
    amount: {type: Double, required: true },
    weight: {type: Number },
    dimensions: {type: Number },
    createdDate: {type: Date},
    schedulingDate: {type: Date},
    schedulingTime: {type: String},
    horaindicaciones: {type: String},
    state_delivery: { type: String, required: true },
    area: {type:String, required: true},
    distancia: {type:Number},
    duracion: {type:Number},
    contrafico: {type:Number},
    createdAt: {type: Date, default: Date.now},
});

module.exports = DBxgo.model('Services', serviceSchema);