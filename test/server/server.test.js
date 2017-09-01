import test from 'ava'
import request from 'supertest'

import app from '../../server/server'


test.serial.cb('GET /questions', t => {
  request(app)
    .get('/questions')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 3)
      t.end()
    })
})
