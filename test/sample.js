//basic requirements for chai test
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert')
const expect = chai.expect
const fs = require('fs');
const path = require('path');
//remember to include path to what file your testing
const server = require('../server/server.js')
// const request = require('supertest')(server);
chai.use(chaiHttp);

describe('/POST register route', () => {
  describe('beforeEach, afterEach -> register and delete User', () => {
    // sample user
    const newUser = {
      firstName: 'Kevin',
      lastName: 'Lee',
      email: 'kevin.lee@gmail.com',
      password: 'KevinLee1!',
      confirmPassword: 'KevinLee1!'
  }
    // register user before each test
    // beforeEach(() => {
    //   chai.request(server)
    //     .post("/api/auth/register")
    //     .send(newUser)
    //     .end((err, res) => {
    //       // should receive 201 status with object
    //       res.should.have.status(201)
    //     })
    // })

    // after each test, we will remove the user from the database
    // afterEach(() => {
    //   chai.request(server)
    //     .post("/api/auth/deleteUser")
    //     .send()
    //     .end((err, res) => {
    //       res.should.have.status(204)
    //     })
    // })

    // start tests
    it('should return an error if the email used to register already exists', () => {
      // test1 -> cannot register same email -> be is separate describe
    chai.request(server)
      .post('/auth/register')
      //send in user login data
      .send({
          'firstName': 'LeBron',
          'lastName' : 'James',
          'email' : 'test@test.com',
          'password' : 'test1234',
      })
      .end((err, res)=>{
          //console.log('login part, should have unique email');
          expect(res.body).to.be.an('object');
          expect(res.status).to.equal(201);
          // res.body.should.have.property('email');
      })
    })

    // sample test to check if jest works
    it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });

  })
});