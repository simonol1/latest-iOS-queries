var express = require('express')
var router = express.Router()

var request = require('superagent')


router.get('/', (req, res) => {
  request
    .get('https://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=ios&site=stackoverflow')
    .end((error, response) => {
      error ? console.log(error) : res.json(response.body)
    })
})

module.exports = router
