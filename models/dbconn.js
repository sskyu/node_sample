/**
 * mysqlへのコネクション確立先を設定する
 * /conf/config.js にて設定を行う
 */

var Sequelize   = require('sequelize');
var config      = require('../conf/config');
var DB_NAME     = config.db.db_name;
var USER_NAME   = config.db.user_name;
var USER_PASSWD = config.db.user_password;

exports.master = function() {
    return new Sequelize(DB_NAME, USER_NAME, USER_PASSWD, {
         host: config.db.master.host
        ,mport: config.db.master.port
        ,logging: config.db.logging
        //,pool: { maxConnections: 10, maxIdleTime: 30 }
    });
}

exports.Sequelize = Sequelize;