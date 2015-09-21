var cartModel=require('../models').cartModel;
var goodsModel=require('../models').goodsModel;


exports.show=function(erq,res){
	if(!req.session.user){
		res.send({code:1,message:'用户已过期，请重新登录'});
	}else{
		cartModel.find({uId:req.session.user['_id']},function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log(data);
				res.send(200);
			}
		});
	}
};
exports.add=function(req,res){
	cartModel.find({uId:req.session.user['_id'],gId:req.params.id},function(err,data){
		if(err){
			console.log(err);
		}else{
			if(data){    //若购物车中存在该件商品，使其gQuantity加1
				var num=data.gQuantity+1;
				cartModel.update({uId:req.session.user['_id'],gId:req.params.id},{$set:{gQuantity:num}},function(err){
					if(err){
						console.log(err);
					}else{
						ses.send(200);
					}
				});
			}else{       //若不存在，在添加到购物车中
				//从商品库中查询该商品的详细信息
				goodsModel.findOne({_id:req.params.id},function(err,data){
					if(err){
						console.log(err);
					}else{
						var goods={
							uid: req.session.user['_id'],
							gid: req.params.id,
							gName: data.gName,
					        gPrice: data.gPrice,
					        gImgSrc: data.gImgSrc,
					        gQuantity: 1,
					        gState:false
						};
						cartModel.create(goods,function(err,data){
							if(err){
								console.log(err);
							}else{
								console.log(data);
								res.send(200);
							}
						});
					}
				});
			}
		}
	});
};
exports.reduce=function(req,res){
	cartModel.findOne({uId:req.session.user['_id'],gId:req.params.id},function(err,data){
		if(err){
			console.log(err);
		}else{
			if(data.gQuantity>1){
				var num=data.gQuantity-1;
				res.json({sum:num});
				cartModel.update({uId:req.session.user['_id'],gId:req.params.id},{$set:{gQuantity:num}}, function(err){
					if(err){
						console.log(err);
					}else{
						res.send(200);
					}
				});
			}
		}
	});
};
