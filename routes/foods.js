var express = require('express');
var router = express.Router();
var foodsController = require('../controllers/foodsController');

//Test express connection
// router.get('/', function(req,res){
//   res.send('connection OK')
// })

/* ADD FOOD */
router.post('/foods', foodsController.addFood);

/* SHOW FOODS */
router.get('/foods', foodsController.showFoods);

/* DELETE FOOD */
router.delete('/foods/:foodId', foodsController.deleteFood);

/* UPDATE FOOD */
router.put('/foods/:foodId', foodsController.updateFood);

/* FIND 1 FOOD */
//router.get('/foods/:foodId', foodsController.findFood);

module.exports = router;
