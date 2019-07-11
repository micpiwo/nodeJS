var express = require("express");
var router = express.Router();
const Users = require('../models/utilisateur');


/* GET users listing. */
router.get("/utilisateurs", async (req, res, next) => {
    /*Test de requete read*/
try {
    const users = await Users.find({});


    /*Sinon erreur*/
    /*test de la page liste .pug*/
    /*res.render('listes', {'mapage': smoothie});*/
    res.send(users);

} catch (err) {
    console.log(err);
    res.status(400).send(err);
}
});

module.exports = router;

