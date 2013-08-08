
/*
 * GET home page.
 */

var _ = require('underscore');
var config = require('../conf/config');

exports.index = function(req, res) {
    if (!req.session) {
        return res.redirect('/user/login');
    }
    res.redirect('/main/top');
};

exports.top = function(req, res) {
    res.render('main', _.extend({
        title   : 'Top page',
        message : 'authorized access',
        session : req.session
    }, config.general));
};
