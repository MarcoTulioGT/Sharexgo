const uuid = require('uuid').v4;
const { validationResult } = require('express-validator');
const Plans = require('../models/Plans');

const HttpError = require('../models/http-error');
const EstadosEnviosNext = require('../Legacy/EstadosEnviosNext');


const updateServicesPlan = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { deliveryID, action} = req.body;
  console.log(deliveryID);
  console.log(action);
  try {
     service1 =  await Plans.findOne({
       "deliveryID":deliveryID,
       "action": action
     });
    console.log(service1.state_delivery)
    state1 =  EstadosEnviosNext(service1.state_delivery,action, 1 )
    actualiza1 = await Plans.updateOne({
      "deliveryID":deliveryID,
      "action": action
    },
    { $set: { state_delivery: state1}}
    )

    service2 = await Plans.find({orden: {$gt: service1.orden}}).sort({orden:1}).limit(1);
    console.log(service2[0])
    if(service2[0] != undefined){
    state2 =  EstadosEnviosNext(service2[0].state_delivery,service2[0].action, 2 )
    actualiza2 = await Plans.updateOne({
      "deliveryID":service2[0].deliveryID,
      "action": service2[0].action
    },
    { $set: { state_delivery: state2}}
    )
  }
  } catch (err) {
    console.log(err)
    const error = new HttpError(
      'Creating updateServicesPlan failed, please try again.',
      500
    );
    return next(error);
  }
  res.status(201).json( service1 );
}

exports.updateServicesPlan = updateServicesPlan;