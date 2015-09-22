var mongoose=require('mongoose');

exports.config={
	db:mongoose.connect("mongodb://127.0.0.1:27017/superStore")
}