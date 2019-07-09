var express = require("express");
var router = express.Router();
const Smoothie = require('../models/smoothie');


/* GET users listing. */
router.get("/listes", async (req, res, next) => {
    /*Test de requete read*/
try {
    const smoothie = await Smoothie.find({});
    console.log(smoothie);
    res.send(smoothie);
    /*Sinon erreur*/
    res.render('listes' + req.smoothie.title);


} catch (err) {
    console.log(err);
    res.status(400).send(err);
}
});

/*Appel par id*/
router.get("/listes/:id", async (req, res, next) => {
     
    /*Assignation de id request => paramètres + id*/

    const id = req.params.id;

    try {
        const smoothie = await Smoothie.findById({id});
       
        
        res.send(smoothie);
        console.log(smoothie(id));
        /*Sinon erreur*/       
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
    });

module.exports = router;

