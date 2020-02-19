'use strict'

/**
 * Base routing of requests to other routers.
 */

const express = require('express');
const router = express.Router();

const simulatorRoutes = require('./simulatorRoutes');
const messageRoutes = require('./messageRoutes');
const userRoutes = require('./userRoutes');
const viewRoutes = require('./viewRoutes');
const flag_toolRoutes = require('./flag_toolRoutes');

const API_ROUTE = '/api/v1';

// Example middleware that time logs specific to this router
router.use(API_ROUTE, function timeLog(req, res, next) {
    console.log(req.baseUrl + ' : ', Date.now());
    next();
})

/* Routes */
router.use('/', viewRoutes);
router.use(API_ROUTE + '/simulator', simulatorRoutes);
router.use(API_ROUTE + '/message', messageRoutes);
router.use(API_ROUTE + '/user', userRoutes);
router.use(API_ROUTE + '/flag_tool', flag_toolRoutes);

/* Final middleware */
router.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' : was not found. Better luck next time.' })
});

module.exports = router;