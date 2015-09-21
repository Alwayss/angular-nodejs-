var orderModel=require('../models').orderModel;
var goodsModel=require('../models').goodsModel;

exports.add=function(req,res){
	var arrList=[];            //创建数组存储订单中的商品
	var arrId=req.query.goodsId;    //接受get请求传来的商品id
	for(var i=0;i<arrId.length;i++){         //根据请求传来的商品id查询商品信息
		goodsModel.findOne({_id:arrId[i]},function(err,data){
			arrList.push(data);              
		})
	}
	var order={
		uid:req.session.user['_id'],
		oDate:new Date().toLocaleString(),
		oCategory:arrList,
		state:true
	};
	orderModel.create(order,function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
			res.send(200);
		}
	});
}
exports.show=function(req,res){
	orderModel.find({uid:req.session.user['_id']},function(err,data){
		if(err){
			console.log(err);
		}else{
			res.send(data);
		}
	});
}