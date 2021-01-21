const express = require("express")
const carRouter = express.Router()
const Car = require("../routes/carRouter.js")
// get all cars
carRouter.get("/", (req, res, next) => {
    Car.find((err, cars) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cars)
    })
})
//post new car
carRouter.post("/", (req, res, next) => {
    const newCar = new Car(req.body)
    newCar.save((err, savedCar) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.stataus(201).send(savedCar)
    })
})
module.exports = carRouter