var userModel=require('../models').userModel;
var crypto=require('crypto');

exports.userReg=function(req,res){
	var password=crypto.createHash('md5').update(req.body.password).digest('hex');
	var user={
		username:req.body.username,
		password:password,
		telphone:req.body.telphone,
		email:req.body.email
	};
	userModel.findOne({username:user.username},function(err,data){
		if(data){
			res.send({code:1,message:'该用户已存在'});
		}else{
			userModel.create(user,function(err,data){
				if(err){
					console.log(err);
				}else{
					console.log(data);
					res.send(200);
					req.session.user=data;
				}
			});
		}
	});
};
exports.userLogin=function(req,res){
	var password=crypto.createHash('md5').update(req.body.password).digest('hex');
	userModel.findOne({username:req.body.username},function(err,data){
		if(data){
			if(data.password==password){
				req.session.user=data;
				res.send(200);
			}else{
				res.send({message:'用户名或密码错误'});
			}
		}else{
			res.send({message:'该用户不存在'});
		}
	});
};
exports.quit=function(req,res){
	req.session.user = null;
	res.redirect('/');
};