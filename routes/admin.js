var adminModel=require('../models').adminModel;
var crypto=require('crypto');
//var url=require('url');

//管理员登录
exports.adminLogin=function(req,res){
	var password=crypto.createHash('md5').update(req.body.password).digest('hex');
	adminModel.findOne({username:req.body.username},function(err,data){
		if(data){
			if(data.password==password){
				res.send({code:200,result:data});
			}else{
				res.send({code:404,result:'用户名或密码错误'});
			}
		}else{
			res.send({code:403,result:'你为拥有管理员权限'});
		}
	});
	/*var admin=url.parse(req.url,true).query;
	var password=crypto.createHash('md5').update(admin.password).digest('base64');
	adminModel.findOne({username:admin.username},function(err,data){
		if(data){
			if(data.password==password){
				res.send(200);
			}else{
				res.send({message:'用户名或密码错误'});
			}
		}else{
			res.send({message:'该用户不存在'});
		}
	});*/
}