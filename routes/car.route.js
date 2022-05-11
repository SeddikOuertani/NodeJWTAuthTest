const express = require('express');
const carRoute = express.Router();
const Car = require('../models/car');
const auth = require('../middleware/auth');

//add car
carRoute.post('/add', auth, (req, res, next) => {
    
    let car = req.body

    Car.create(car, (error, data) => {
        
        if(error) return next(error)
        
        res.json(data).status(200);

    })
} )

//get all cars
carRoute.get('/all', auth, (req, res, next) => {

    Car.find((error,data) => {
        
        if(error) return next(error)

        res.json(data).status(200)

    })
})

//get Cars By Model
carRoute.get('/:model', auth, (req, res, next) => {
    Car.find({model : req.params.model}, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data).status(200)
        }
    })
})



//get Cars By model and brand
carRoute.get('/:model/brand/:brand', auth, (req, res, next) => {
    Car.find({model : req.params.model, brand : req.params.brand}, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data).status(200)
        }
    })
})

//get Cars By brand
carRoute.get('/:brand', auth, (req, res, next) => {
    Car.find({brand : req.params.brand}, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data).status(200)
        }
    })
})

//get car by id
carRoute.get('/:idCar', auth, (req, res, next) => {
    Car.findById(req.params.idCar, (error, data) => {
        
        if (error) return next(error);
        
        res.json(data).status(200);
    })
})

//get Cars By owner ID
carRoute.get('/byOwner/:idOwner', auth, (req, res, next) => {
    Car.find({idOwner : req.params.idOwner}, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data).status(200)
        }
    })
})


module.exports = carRoute;