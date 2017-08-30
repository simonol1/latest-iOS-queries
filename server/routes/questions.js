var express = require('express')
var router = express.Router()

var db = require('../db/questions')

router.get('/', function (req, res) {
  res.json(db.getQuestions())
})


module.exports = router
