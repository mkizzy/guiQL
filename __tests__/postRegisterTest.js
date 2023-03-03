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

// access chai-http
chai.use(chaiHttp);

//test login functionality, test for proper status code, expect content type to be json object, req.body to be object
//not sure if done should be included, its for testing callbacks
//not 100% on how to test JWT tokens tbh
describe('post register', () => {
    const newUser = {
        firstName: 'Kevin',
        lastName: 'Lee',
        email: 'kevin.lee@gmail.com',
        password: 'KevinLee1!',
        // confirmPassword: 'KevinLee1!'
    }

    let token;

    // register
    beforeEach(() => {
        chai
            .request(app)
            .post("/register")
            .send(newUser)
            .end((err, res) => {
                token = req.body.userDetails.token;
                res.should.have.status(201);
            });
    });

    // sample test to check if jest works
    it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });

    // it('should create a token, check for valid credentials, and return JSON obj of info', (done) => {
    //     chai
    //         .request(app)
    //         .get('/register')
    //         .set({ userId: `Bearer ${token}` })
    //         .end((err, res) => {
    //             expect(res.statusCode).to.equal(201);
    //             expect(res.body).to.be.an('object');
    //             expect(res.body).should.have.property('userDetails');
    //             expect(token).to.have.property('userId');
    //             done();
    //         })
    // })
});