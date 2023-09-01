const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
    },
    zip :{
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    }

});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema;
// // {
//     "isAdmin": false,
//     "street": "",
//     "apartment": "",
//     "zip": "",
//     "city": "",
//     "country": "",
//     "_id": "64f146a3a87db306e44cd0d1",
//     "name": "gautam b",
//     "email": "gautamgautam@gmail.com",
//     "passwordHash": "$2a$10$cwVa887Vi05tWa4z3qhGTuKin5aP0D5MoLakly6UmaWJaKwyVn3dy",
//     "phone": "12345",
//     "__v": 0,
//     "id": "64f146a3a87db306e44cd0d1"

// {
//     "user": "gautambiloniya202@gmail.com",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYxNTBmMDFkOGQ0NjFhMjg5YWYzNDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTM1MzY1MjEsImV4cCI6MTY5MzYyMjkyMX0.a_qIinyJPr1AbXQqyG4ky8_LcAtiohZhKxsZL9lwLEw"
// }

/*"name":"Gautam Biloniya",
"email":"gautambiloniya202@gmail.com",
"passwordHash":"123456",
"phone": "12345789",
"isAdmin":true */