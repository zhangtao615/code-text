var http = require("http");
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var path =require('path');

http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goindex(res);
            break;
        case '/upload':
            goupload(req,res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('not found')
    }

}).listen(3000);
console.log("server start port 3000");

function goindex(res){
    var pathname = __dirname+"/"+url.parse('./upload.html').pathname;
    var data=fs.readFileSync(pathname,"utf-8");
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);
}

function goupload(req,res){
    //采用第三方包formidable
    var form = new formidable.IncomingForm();
    form.encoding= 'utf-8';
    var uploadpath =path.join(__dirname,'upload');
    form.uploadDir = uploadpath;
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
}