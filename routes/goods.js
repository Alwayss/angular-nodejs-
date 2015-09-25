var goodsModel=require('../models').goodsModel;

exports.show=function(req,res){       //商品显示
	goodsModel.find({},function(err,data){
		if(err){
			console.log(err);
		}else{
			res.send(data);
		}
	});
};
exports.select=function(req,res){
	var name=req.params.goodsname;
	var pattern=new RegExp(name);
	goodsModel.find({gName:pattern},function(err,data){
		if(err){
			throw err;
		}else{
			res.send(data);
		}
	});
};
exports.add=function(req,res){           //商品添加
	var goods={
		gName: req.body.gName,
		gPrice: req.body.gPrice,
		gDescription: req.body.gDescription,
		gCategory: req.body.gCategory,
		gSum: req.body.gSum
	};
	goodsModel.create(goods,function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
			res.send(200);
		}
	});
};
exports.del=function(req,res){           //删除商品
	goodsModel.remove({_id:req.params.id},function(err){
		if(err){
			console.log(err);
		}else{
			res.send(200);
		}
	});
};
//var id='';
exports.Des=function(req,res){
	//id=req.params.id;
	goodsModel.findOne({_id:req.params.id},function(err,data){
		if(err){
			console.log(err);
		}else{
			res.send(data);
		}
	})
};
exports.modify=function(req,res){       //修改商品信息
	var goods={
		gName: req.body.gName,
		gPrice: req.body.gPrice,
		gDescription: req.body.gDescription,
		gCategory: req.body.gCategory,
		gSum: req.body.gSum
	};
	goodsModel.update({_id:req.params.id},{$set:goods},function(err){
		if(err){
			console.log(err);
		}else{
			res.send(200);
		}
	});
};