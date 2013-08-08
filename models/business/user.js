// user bussiness model

var userDataModel = require('../data_access/user');

exports.isAuthenticate = function(params, callback) {
    userDataModel.find(params.userName, params.password, function(err, user) {
        if (err) return callback(err);
        callback(null, user);
    });
};

exports.userList = function(params, callback) {
    var role = params.role || '';
    userDataModel.findAll(role, function(err, users) {
        if (err) return callback(err);
        callback(null, users);
    });
};

exports.userDetail = function(params, callback) {
    var uid = params.uid;
    userDataModel.findByUid(uid, function(err, user) {
        if (err) return callback(err);
        callback(null, user);
    });
};

exports.userUpdate = function(params, callback) {
    var uid       = params.uid;
    var firstName = params.firstName;
    var lastName  = params.lastName;
    var age       = params.age;
    userDataModel.update(uid, firstName, lastName, age, function(err, user) {
        if (err) return callback(err);
        callback(null, user);
    });
};