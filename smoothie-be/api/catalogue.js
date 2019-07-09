var express = require("express");
var router = express.Router();
const Smoothie = require('../models/smoothie');


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

