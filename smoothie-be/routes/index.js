var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Appel du template index.pug qui depend de layout.pug
  res.render('index', { title: 'Mic App avec ExpressJs et NodeJs + MongoDB + Angular 8',  
                        welcome: 'Message de bienvenue',
  });
});

router.get('/home', function(req, res, next) {
  //Appel du template home.pug qui depend de layout.pug
  res.render('home', { title: 'Une autre page depuis le controller'                    
  });
});

module.exports = router;
