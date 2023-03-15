// Here we will be unit testing the userSchema db from server/models/db/user.test.json
const fs = require('fs');
const path = require('path');
const userTestFile = require('../server/models/db/user.test.json');
const assert = require('chai').assert;

// need db middleware & setup to run functionalities

// testing functionalities of DB write
describe('Database', () => {
    const newUserList = [
        {
            firstName: 'Kevin',
            lastName: 'Lee',
            email: 'kevin.lee@gmail.com',
            password: 'KevinLee1!',
            confirmPassword: 'KevinLee1!'
        },
        {
            firstName: 'Dan',
            lastName: 'Chen',
            email: 'Dan.chen@gmail.com',
            password: 'DanChen1!',
            confirmPassword: 'DanChen1!'
        },
        {
            firstName: 'Joe',
            lastName: 'Mom',
            email: 'Joe.mom@yahoo.com',
            password: 'JoeMom1!',
            confirmPassword: 'JoeMom1!'
        }
    ];
    // generate json userdata for now
    beforeAll((done) => {
        fs.writeFile(userTestFile, JSON.stringify([]), () => {
            
        })
    })
    }
)
