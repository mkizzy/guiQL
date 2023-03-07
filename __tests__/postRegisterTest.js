//basic requirements for chai test
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');
const expect = chai.expect
const fs = require('fs');
const path = require('path');
//remember to include path to what file your testing
const app = require('../server/controllers/postRegister.js');
const request = require('supertest')(app);
const server = 'http://localhost:3000'

// access chai-http
chai.use(chaiHttp);
//how to start writing a test :)
//AAA -> arrange, act, assert
//arrange test data and your test enviornment (path, file)
//act -> invoke the code being tested and
//assert -> assert your expected outcome 
//assertions can be 'expect, 'should', 'assert'
//test for edge cases and error scenarios
//refactor tests as needed


//test login functionality, test for proper status code, expect content type to be json object, req.body to be object
//not sure if done should be included, its for testing callbacks
//not 100% on how to test JWT tokens tbh
describe('post register API function', () => {
    const newUser = {
        firstName: 'Kevin',
        lastName: 'Lee',
        email: 'kevin.lee@gmail.com',
        password: 'KevinLee1!',
        confirmPassword: 'KevinLee1!'
    }
    it('should register the user, login user, check for JWT token, user will be removed after', () => {
        chai
            .request(server)
            .post("/api/auth/register")
            .send(newUser)
            .end((err, res) => {
                // should receive 201 status with object
                res.should.have.status(201)
                // process login
                chai.request(server)
                    .post('/api/auth/register')
                    //send in user login data
                    .send({
                        'firstName': 'LeBron',
                        'lastName' : 'James',
                        'email' : 'test@test.com',
                        'password' : 'test1234',
                    })
                        .end((err, res)=>{
                            console.log('login part, should have unique email');
                            expect(res.body).to.be.an('object');
                            res.should.have.status(201);
                            res.body.should.have.property('email');
                            done();
                        })
                // token = req.body.userDetails.token;
                // res.should.have.status(201);
                let token = res.body.userDetails.token;
                //for request builders and response assertions for HTTP requests in node.js applications
                chai.request(server)
                        .get('/api/auth/login')
                        .set('Auth', 'JWT' + token)
                        .send({ userDetails: {
                            email: 'user@email.com',
                            firstName: 'Taluk',
                            lastName: 'Talok',
                            token: 'token',
                            }
                        })
                        .end((err, res)=>{
                            console.log('token part, check for userDetails which holds token for user');
                            res.should.have.status(201);
                            expect(res.body).to.be.an('object');
                            res.body.should.have.property('token');
                            //or userDetails?
                            done();
                        })
            });
    });
    // afterEach(() => {
    //     // remove the registered user
    // })
    // sample test to check if jest works
    it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});
//check for valid credentials, and return JSON obj of info'
// expect(res.statusCode).to.equal(201);
// expect(res.body).to.be.an('object');
// expect(res.body).should.have.property('userDetails');
// expect(token).to.have.property('userId');
// done();