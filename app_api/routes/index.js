const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const authentication = require('../controllers/authentication');
const passport = require('../config/passport');
const { expressjwt: jwt } = require('express-jwt');

const requireAuth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
});

// Authentication endpoints
router.post('/register', authentication.register);
router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    authentication.login
);

// Public trip browsing
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// Protected trip management
router.post('/trips', requireAuth, tripsController.tripsAddTrip);
router.put('/trips/:tripCode', requireAuth, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', requireAuth, tripsController.tripsDeleteTrip);

module.exports = router;
