var express = require("express");
var router = express.Router();
const Smoothie = require('../models/smoothie');
const mongoose = require('mongoose');


/* GET users listing. */
router.get("/listes", async (req, res, next) => {
    /*Test de requete read*/
try {
    const smoothie = await Smoothie.find({});


    /*Sinon erreur*/
    /*test de la page liste .pug*/
    /*res.render('listes', {'mapage': smoothie});*/
    res.send(smoothie);

} catch (err) {
    console.log(err);
    res.status(400).send(err);
}
});

/*Appel par id*/
router.get("/listes/:id", async (req, res, next) => {
     
    /*Assignation de id request => paramètres + id*/

    const id = mongoose.Types.ObjectId(req.params.id);

    try {
        const smoothie = await Smoothie.findById(mongoose.Types.ObjectId(req.params.id)).exec();
       
        res.send(smoothie);
        console.log(smoothie(id));
        /*Sinon erreur*/       
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
    });

    router.post('/listes/ajouter', async (req, res, next) => {

    

        let newSmoothie = new Smoothie();
        newSmoothie.title = req.body.title;
    
        try {
            const smoothie = await newSmoothie.save();
            console.log(smoothie);
            res.send(smoothie);
            console.log('arrivee dans la route ajouter : ', req.body);
        } catch(err) {
            res.status(400).send(err);
        }
    });

module.exports = router;

