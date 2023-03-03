//basic requirements for chai test
const chai = require('chai');
const assert = require('assert');
const expect = chai.expect
const fs = require('fs');
const path = require('path');
//remember to include path to what file your testing
const app = require('../server/controllers/postRegister.js');
const request = require('supertest')(app);
//test login functionality, test for proper status code, expect content type to be json object, req.body to be object
//not sure if done should be included, its for testing callbacks
//not 100% on how to test JWT tokens tbh
describe('post register', function() {
  it('should create a token, check for valid credentials, and return JSON obj of info', function(done){
    request(app)
      .get('/register')
      .set({})
      .end(function(err, res)) {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        done();
      }
  })
});