var express = require('express');
var utility = require('../utility/utility');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/jamal',(req,res,next)=>{
  res.send({
    'name':'jamal'
  }).status(200);

});
router.get('/shah',(req,res,next)=>{
  res.send({
    'name':'shah'
  }).status(200);
});
router.get('/izhar',(req,res,next)=>{
  res.send({
    'name':'izhar'
  }).status(200);
});
router.get('/add',(req,res,next)=>{
  try {
    console.log(req.query);
    res.send({
      'result':int.parse(req.query['num1'])+int.parse(req.query['num2']),
      'k':'hoola'
    }).status(200);
  } catch (error) {
    res.send({
      error:'something went wrong try again',
    }).status(500);
  }
});

router.get('/makedecision',(req,res,next)=>{
  try {
    //normall you will make decisions here and these decisions will be based on what are possiblities
    //generate a random number
    let number =between(1,10);
    res.send({
      randNumber:number
    }).status(200);
    
  } catch (error) {
    console.log(error);
    res.send({
      error:'Sorry some error occured try again'
    }).status(500);
  }

});
module.exports = router;
