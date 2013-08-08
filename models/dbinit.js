/**
 * プログラムで記述したテーブル定義をDBに反映させる
 */
var seq = require('./dbconn').master();

// db init
var seq = require('./models/dbconn').master();
var User = require('./models/data_access/user').define(seq);

seq.sync( { force: false })
    .success(function() {
        console.log('-- sync success --');
    })
    .error(function(err) {
        console.log('-- sync error --');
        console.log(err);
    });