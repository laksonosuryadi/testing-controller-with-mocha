var chai = require('chai');
var chaiHTTP = require('chai-http');
var mongoose = require('mongoose');
var User = require('../models/food');
var should = chai.should();

chai.use(chaiHTTP);

describe('TESTING CRUD DB USER', () => {

  //TESTING CREATE (POST)
  it('it should POST one food', (done) => {
    chai.request('http://localhost:3000')
    .post('/foods')
    .send({name: 'pizza', price: '80000'})
    .end((err, res) => {
      res.should.have.status(200);
      done()
    })
  })

  //TESTING READ (GET)
  it('it should GET all foods', (done) => {
    chai.request('http://localhost:3000')
    .get('/foods')
    .end((err, res) => {
      console.log(res.body);
      res.should.have.status(200);
      res.body.should.be.a('array');
      done()
    })
  })

  //TESTING UPDATE
  it('it should UPDATE one food', (done) => {
    chai.request('http://localhost:3000')
    .put('/foods/58f5778cb486d1144c5b368d')
    .send({name: 'burger', price: '50000'})
    .end((err, res) => {
      res.should.have.status(200);
      done()
    })
  })

  //TESTING DELETE
  it('it should DELETE one food', (done) => {
    chai.request('http://localhost:3000')
    .delete('/foods/58f5778cb486d1144c5b368d')
    .end((err, res) => {
      res.should.have.status(200);
      done()
    })
  })
})
