var mongoose = require('mongoose');
var schemas=require('./schema');
/*var userschema=new mongoose.Schema({});
var model=mongoose.model('',userschema);*/
//根据schema创建模型model
for(var key in schemas){
	mongoose.model(key,new mongoose.Schema(schemas[key]));     //给每个模式定义模型  其中new mongoose.Schema(models[key]))=models[key]).schema  
}

module.exports={
	getModel:function(type){
		return mongoose.model(type);
	}
}