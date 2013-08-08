module.exports = {
    // システム全般の設定
    "general" : {
    }

    // DBの設定
    ,"db" : {
         "db_name"       : "ta"
        ,"user_name"     : "root"
        ,"user_password" : ""
        ,"master" : {
             "host" : "localhost"
            ,"port" : "3306"
        }
        // trueにするとコンソールに発行したSQLのログを出力する（Sequelizeを使ったSQLのみ)
        ,"logging" : true
    }
}