const express = require('express');
const { check } = require('express-validator');

const planControllers = require('../controllers/plan-controllers');
const planControllersv2 = require('../controllers/plan-controllersv2');

const router = express.Router();

router.get('/', planControllers.getPlan);
router.put('/planification', planControllers.CreatePlanification);
router.put('/distances', planControllers.GetDistances);
router.post('/location', planControllers.GetLocation);
router.get('/location/:moto/:fecha', planControllers.GetLocationByMotoDate);
router.get('/location/:moto', planControllers.GetCurrentLocation);



router.patch('/v2/changestate', planControllersv2.updateServicesPlan)

module.exports = router;