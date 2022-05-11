const express = require('express');
const ownerRoute = express.Router();
const auth = require('../middleware/auth');

const Owner = require('../models/owner');

//add owner 
ownerRoute.post('/',auth, (req, res, next) => {
    let owner  = req.body
    Owner.create(owner , (error, data) => {
        
        if(error) return next(error)
        
        res.json(data).status(200);

    })
} )

//get owner  by id
ownerRoute.get('/:idOwner ',auth, (req, res, next) => {
    Owner.findById(req.params.idOwner , (error, data) => {
        
        if (error) return next(error);
        
        res.json(data).status(200);

    })
})

//get all owners
ownerRoute.get('/', (req, res, next) => {

    Owner.find((error,data) => {
        
        if(error) return next(error)

        res.json(data).status(200)
    })
})

module.exports = ownerRoute;