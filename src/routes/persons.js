// inyeccion de express, instancia del router
let express = require('express');
let router = express.Router();
var info = require('../models/person');

router.get('/persons', function(req,res,next) {
    info.find(function(err, persons){
        if (err) return next(err);
        res.json(persons);
    });
});

router.get('/person', (req, res) => {
    res.render('index');
});
router.post('/person', async (req, res) => {
    let personInfo = new info({
        firstName: req.body.fname,
        lastName: req.body.lname,
        age: req.body.age,
        socialServiceNumber: req.body.socialNumber,
        bloodType: req.body.bloodType})
    await personInfo.save()
    res.send(`Registrado: ${personInfo.firstName} ${personInfo.lastName} de ${personInfo.age} años`)
});

module.exports= router;