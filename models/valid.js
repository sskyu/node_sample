var _ = require('underscore');
var Validator = require('validator').Validator;

Validator.prototype.error = function(msg) {
    this._errors.push(msg);
};
Validator.prototype.getErrors = function() {
    return this._errors;
};

// 認証チェック
exports.isAuthorized = function(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/user/login');
    }
    next();
};

exports.forAdmin = function(req, res, next) {
    var userRole = req.session.user.user_role;
    if (userRole.indexOf('admin')) {
        return res.redirect('back');
    }
    next();
};