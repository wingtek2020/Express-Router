const locations = ['Tacoma', 'Marysville', 'Seattle', 'Spokane', 'Bellingham'];
const express = require('express');
const locationRouter = express.Router();

locationRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.send(locations);
    })
    .post((req, res) => {
        locations.push(req.body.name);
        //res.end(`Will add the campsite: ${req.body.name}`);
        res.send(locations);
    });
    
module.exports = locationRouter;