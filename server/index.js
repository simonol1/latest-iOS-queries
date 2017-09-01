var createServer = require('./server')

var env = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[env]

var db = require('knex')(config)

var server = createServer(db)

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
})
