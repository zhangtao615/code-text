var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
  });

exports.insert_data=function(name,password,callback){
    pool.query('insert into t_users(NAME,PASSWORD) values(?,?)',[name,password],function(error, results, fields){
        if(error) throw error;
        callback(error,results)
    })
    // connection.connect();
    // connection.query('SELECT * from t_users', function (error, results, fields) {
    //   if (error) throw error;
    //  // console.log('The solution is: ', results[0].solution);
    //   callback(error,results)
    //   connection.end();
    // });
}

exports.sel_login_data=function(name,password,callback){
    pool.query('SELECT * from t_users where NAME=? and PASSWORD=?',[name,password], function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0].solution);
        callback(error,results)
    });
}
 
