const mongoose = require('mongoose');

const smoothieSchema = mongoose.Schema({
    title: {
        type: String,
        required: false,

    },
    ingredients: [
        {
        nom:
        {
            type: String,
        },
        quantite:
        {
            type: String
        }
    }
    ],
    features: [
       {
           cost:{
               type: String,
           },
           prepareTime:{
               type: String
           }
       }
    ],
    advice:{
        type:String
    },
    description:{
        type: String
    },
    steps:[
        {
            stepText:{
                type:String
            }  
        }
    ]  
});
/*Création d'un objet smoothie de la collection utilisable depuis pug, twig ou angular*/
/*ATTENTION LORS DE L'APPEL la collection prend un S*/
const Smoothie = module.exports = mongoose.model('catalogue', smoothieSchema,'catalogue');
