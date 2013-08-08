
/*
 * GET users listing.
 */

var _ = require('underscore');
var config = require('../conf/config');
var userModel = require('../models/business/user');

exports.loginPage = function(req, res) {
    res.render('user/login', _.extend({
        title: 'Login'
    }, config.general));
};

// post method
exports.login = function(req, res) {
    userModel.isAuthenticate({
        userName : req.body.username,
        password : req.body.password
    }, function(err, user) {
        if (err) {
            // express3 not work flash()
            return res.redirect('/user/login');
        }
        req.session.userName = req.body.username;
        req.session.user = user;
        res.redirect('/main/top');
    });
};

exports.logoutPage = function(req, res) {
    var userName = req.session.userName;
    req.session.destroy(function() {
        res.render('user/logout', {
            title    : 'Logout',
            message  : '',
            userName : userName,
            session  : { userName: '' }
        });
    });
};

// ユーザ一覧
exports.listPage = function(req, res) {
    userModel.userList({
        role : req.params.role
    }, function(err, users) {
        res.render('user/list', {
            title   : 'User list',
            message : '',
            users   : users,
            session : req.session
        });
    });
};

// ユーザ詳細
exports.viewPage = function(req, res) {
    userModel.userDetail({
        uid : req.params.uid
    }, function(err, user) {
        res.render('user/view', {
            title   : 'User Profile',
            message : '',
            user    : user,
            session : req.session,
            err     : err
        });
    });
};

// ユーザ情報の編集
exports.editPage = function(req, res) {
    userModel.userDetail({
        uid : req.params.uid
    }, function(err, user) {
        res.render('user/edit', {
            title   : 'User Profile Edit',
            message : '',
            user    : user,
            session : req.session,
            err     : err
        });
    });
};

// post method
exports.edit = function(req, res) {
    userModel.userUpdate({
        uid       : req.body.uid,
        firstName : req.body.first_name,
        lastName  : req.body.last_name,
        age       : req.body.age
    }, function(err, user) {
        if (err) {
            // TODO: 何かしらのエラーメッセージを出したい
            return res.redirect('back');
        }
        res.redirect('/user/edit/' + req.body.uid);
    });
};
