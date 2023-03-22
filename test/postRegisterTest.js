//basic requirements for chai test
const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = require("assert");
const expect = chai.expect;
const fs = require("fs");
const path = require("path");
//remember to include path to what file your testing
const app = require("../server/controllers/postRegister.js");
const request = require("supertest")(app);
const server = "http://localhost:3000";
// const server = require('../server/server.js');
const bcrypt = require("bcryptjs");

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

//few things we are missing from this test
//1) mocking the servers
//2) beforeEach -> register user, afterEach -> delete user
//3) check if user already exists
//4) check if password !== confirmPassword
//5) check JWT token when login
describe("/POST register route", () => {
  describe("beforeEach, afterEach -> register and delete User", () => {
    // sample user
    const newUser = {
      firstName: "Kevin",
      lastName: "Lee",
      email: "kevin.lee@gmail.com",
      password: "KevinLee1!",
      confirmPassword: "KevinLee1!",
    };
    // register user before each test
    beforeEach(() => {
      chai
        .request(server)
        .post("/api/auth/register")
        .send(newUser)
        .end((err, res) => {
          // should receive 201 status with object
          expect(res.status).to.equal(201);
        });
    });

    // after each test, we will remove the user from the database
    afterEach(() => {
      chai
        .request(server)
        .delete("/api/auth/deleteUser")
        .send({email: "kevin.lee@gmail.com"})
        .end((err, res) => {
          expect(res.status).to.equal(204);
        });
    });

    // start tests
    it("should return an error if the email used to register already exists", () => {
      // test1 -> cannot register same email -> be is separate describe
      chai.request(server)
        .post("/api/auth/register")
        //send in user login data
        .send({
          firstName: "LeBron",
          lastName: "James",
          email: "test@email.com",
          password: "Test1234!",
          confirmPassword: "Test1234!"
        })
        .end((err, res) => {
          console.log(res)
          expect(res.status).to.equal(409);
        });
    });
    //mock server
    // describe("Mock HTTP server", () => {
    //   it("should respond with 200 response from server"), () => {
    //       const serverMock = chai
    //         .request(server)
    //         .get("/api/auth/register")
    //         .end((err, res) => {
    //           expect(res.status).to.equal(200);
    //         });
    //     };
    // });
    //test for checking password confirmation
    //assuming that user model with pw fields are stored and hashed in DB
    // describe('password validation', () => {
    //   it('should check password with encrypted password'), async ()=>{
    //     const password = 'secret';
    //     const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(password, salt);
    //     const user = new user({
    //       email: 'user@email.com',
    //       password: hashedPassword,
    //     });
    //     //use DB query to find email and use bcrypt compare for validation
    //     const userFromDB = await user.findByEmail('user@email.com');
    //     const validPassword = await bcrypt.compare(password, hashedPassword);
    //     expect(validPassword).to.be.true;
    //   }
    // })
    // it("check for JWT token after login", (done) => {
    //   chai
    //     .request(server)
    //     .post("/api/auth/register")
    //     .send(newUser)
    //     .end((err, res) => {
    //       // should receive 201 status with object
    //       expect(res.body).to.equal(201);
    //       // process login
    //       chai
    //         .request(server)
    //         .post("/api/auth/register")
    //         //send in user login data
    //         .send({
    //           firstName: "LeBron",
    //           lastName: "James",
    //           email: "test@test.com",
    //           password: "test1234",
    //         })
    //         .end((err, res) => {
    //           console.log("login part, should have unique email");
    //           console.log(res);
    //           expect(res.body).to.be.an("object");
    //           expect(res.status).to.equal(201);
    //           expect(res.body).to.have.a.property("email");
    //         });
    //       // token = req.body.userDetails.token;
    //       // res.should.have.status(201);
    //       let token = res.body.userDetails.token;
    //       //for request builders and response assertions for HTTP requests in node.js applications
    //       chai
    //         .request(server)
    //         .get("/api/auth/login")
    //         .set("Auth", "JWT" + token)
    //         .send({
    //           userDetails: {
    //             email: "user@email.com",
    //             firstName: "Taluk",
    //             lastName: "Talok",
    //             token: "token",
    //           },
    //         })
    //         .end((err, res) => {
    //           console.log(
    //             "token part, check for userDetails which holds token for user"
    //           );
    //           console.log(err);
    //           expect(res.body).to.be.an("object");
    //           expect(res.status).to.equal(201);
    //           expect(res.body).to.have.a.property("token");
    //           //or userDetails?
    //         });
    //       done();
    //     });
    // });
    // sample test to check if jest works
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
