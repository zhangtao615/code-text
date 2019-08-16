var User_model=require('../model/user_model.js')

exports.reg = function(req,res,next){
    res.render('reg',{
        'name':'zt',
        'info':[{'id':1,'name':'zt'},{'id':2,'name':'vv'}]
    })
}
exports.do_reg=function(req,res,next){
    var name = req.body.uname
    var password=req.body.password
    // console.log(name)
    // console.log(password)
    // User_model.insert_data(function(err,data){
    //     console.log(data);
    // })
    User_model.sel_login_data(name,password,function(error,data){
        console.log(data);
    })
}