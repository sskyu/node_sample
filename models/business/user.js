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

// TODO: 途中
exports.createDummyData = function(callback) {
    var _ = require('underscore');
    var dummyDatas = [
        {
            uid        : 'admin',
            firstname  : 'taro',
            lastname   : 'admin',
            age        : 30,
            password   : '91tXzyZxa',
            user_roles : 'admin,editor,tester',
            tags       : 'hoge,fuga',
            servers    : 'none'
        },
        {
            uid        : 'admin2',
            firstname  : 'jiro',
            lastname   : 'admin',
            age        : 29,
            password   : 'asiE65Jzf',
            user_roles : 'admin,editor,tester',
            tags       : 'hoge,fuga',
            servers    : 'none'
        },
        {
            uid        : 'user001',
            firstname  : 'yuki',
            lastname   : 'saitou',
            age        : 25,
            password   : '6Qujg4isH',
            user_roles : 'editor,tester',
            tags       : 'hoge,fuga',
            servers    : 'none'
        },
        {
            uid        : 'user002',
            firstname  : 'yoko',
            lastname   : 'nanno',
            age        : 24,
            password   : 'a3ecCvoB3',
            user_roles : 'editor,tester',
            tags       : 'hoge,fuga',
            servers    : 'none'
        }
    ];
    _.each(dummyDatas, function(data) {
        userDataModel.add(data, function(err) {
            callback();
        });
    });
};