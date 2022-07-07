const app = require('../../server');
const request = require('supertest');
const mongoose = require("mongoose");

const User = require('../../models/User');

jest.setTimeout(10000);

let userID = '';
let userEmail = '';

/**
 * Before starting the test delete all user entries on the test database
 */
beforeAll(async () => {

    //delete already exist users on CMT Test database
    await User.deleteMany();

});

//****************************User Management**********************************
/**
 * TEST CASE DESIGNED BY        -       Kasuni Makalanda
 */
/**
 * TEST CASE ID     -       01
 * SCENARIO         -       Create a new User
 */
describe('Post Endpoint', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/user/addUser')
            .send({
                userFullName: "TestUser",
                userEmail: "testUser@gmail.com",
                userPassword: "TestUser@123",
                userContact: "0770834411",
                userCategory: "Student",
                resetAnswer: 1122
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.data.userFullName).toEqual('TestUser')
        expect(res.body.data.userEmail).toEqual('testUser@gmail.com')
        userID = res.body.data._id;
        userEmail = res.body.data.userEmail;
    })
});

/**
 * TEST CASE ID     -       02
 * SCENARIO         -       Get user By user ID
 */
describe('Get Endpoint', () => {
    it('should get user by Id', async () => {
        const res = await request(app)
            .get(`/user/getUserById/${userID}`)
        expect(res.statusCode).toEqual(200)
        expect(res.body.data.userFullName).toEqual('TestUser')
        expect(res.body.data.userPassword).toEqual('TestUser@123');
    })
});

/**
 * TEST CASE ID     -       03
 * SCENARIO         -       Get user By user email address
 */
describe('Get Endpoint', () => {
    it('should get user by email', async () => {
        const res = await request(app)
            .get(`/user/getUserByEmailID/${userEmail}`)
        expect(res.statusCode).toEqual(200);
    })
});

afterAll(async () => {
    mongoose.disconnect();
});