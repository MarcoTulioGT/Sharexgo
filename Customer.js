const mongoose = require('mongoose');

const DBxgo = mongoose.connection.useDb('Xgo');

const uniqueValidator = require('mongoose-unique-validator');
var GeoJSON = require('mongoose-geojson-schema');


const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: {type: String },
    depto: {type: String },
    municipio: {type: String },
    zone: {type: Number },
    indications: {type: String},
    location : {type: mongoose.Schema.Types.GeoJSON},
    uri: {type: String},
    state_address: {type: String, required: true },
    customerId: {type: String},
    level: {type: Number, required: true },
    bank: {type: String},
    typeacount:{type: String},
    noacount:{type: Number},
    nameacount:{type: String},
    createdAt: {type: Date, default: Date.now}
});

customerSchema.plugin(uniqueValidator);
module.exports = DBxgo.model('Customers', customerSchema);


