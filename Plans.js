const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const DBxgo = mongoose.connection.useDb('Xgo');


const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    orden:{type: Double, required: true },
    deliveryID: {type: Number, required: true },
    action: { type: String, required: true },
    state_delivery : {type: String},
    address : { type: String},
    municipio : { type: String},
    zone: {type: Number }
});


module.exports = DBxgo.model('Plan', deliverySchema);