module.exports = {
    // システム全般の設定
    "general" : {
        // システム名。各ページのタイトルに表示される
         "system_title"      : "zaragami"
        // 各ページ下部に表示されるコピーライトなど。一行程度の文字列を想定している
        ,"footer_message"    : "Copyright © 1998-2012 CyberAgent, Inc. All Rights Reserved."
        // トークン発行のシード値。基本どんな文字列でも良い
        ,"token_seed"        : "zarazara"
    }

    // Redisの設定
    ,"redis" : {
         "db"     : "1"
        ,"prefix" : "session:"
        // redis.confのbindで指定するIPに合わせる
        ,"host"   : "192.168.56.152"
        ,"port"   : "6379"
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