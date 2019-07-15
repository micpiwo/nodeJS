var express = require("express");
var router = express.Router();
const Users = require('../models/utilisateur');
const mongoose = require('mongoose');


/* GET users listing. */
router.get("/users", async (req, res, next) => {
    /*Test de requete read*/
try {
    const users = await Users.find({});

    res.send(users);
    console.log(users);

} catch (err) {
    console.log(err);
    res.status(400).send(err);
}
});


/*Appel par id*/
router.get("/users/:id", async (req, res, next) => {
     
    /*Assignation de id request => paramètres + id*/

    const id = mongoose.Types.ObjectId(req.params.id);

    try {
        const users = await Users.findById(mongoose.Types.ObjectId(req.params.id)).exec();
       
        res.send(users);
        console.log(users(id));
        /*Sinon erreur*/       
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
    });

module.exports = router;

