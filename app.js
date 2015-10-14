var express=require('express');
var mongoose=require('mongoose');
var session=require('express-session');
var MongoStore=require('connect-mongo')(session);
var bodyparser=require('body-parser');
var app=express();

var routes=require('./routes');
//连接数据库
var config=require('./config');
//mongoose.connect("mongodb://127.0.0.1:27017/superStore");

app.use(express.static(require('path').join(__dirname+'/public')));  //设置静态资源路径

//解析请求中body部分
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
		extended:false
	})
);
//配置session
app.use(session({
    secret:'secret',
    cookie:{
        maxAge:1000*60*30
    }
}));
app.use(function(req,res,next){           //将session绑定值本地session
	res.locals.user= req.session.user;
	next();
});

app.get('/goods/:goodsname',routes.goods.select);
app.post('/adminLogin',routes.admin.adminLogin);
app.post('/userReg',routes.user.userReg);
app.post('/userLogin',routes.user.userLogin);
app.get('/goods/page/:pageid',routes.goods.show);
app.post('/goodsAdd',routes.goods.add);
app.get('/goodsDel/:id',routes.goods.del);
app.get('/goodsDes/:id',routes.goods.Des);
app.post('/goodsModify',routes.goods.modify);
app.get('/cart/:id',routes.cart.show);
app.post('/addToCart',routes.cart.add); //从商品详情页中加入购物车
app.post('/reduceFromCart',routes.cart.reduce);
app.get('/jiesuan',routes.order.add);  
app.get('/order',routes.order.show);
app.get('/category',routes.category.show);
app.get('/categoryAdd',routes.category.add);
app.get('/categoryDel',routes.category.del);
//启动服务应用
app.listen(80);

//var crypto=require('crypto');
//var password=crypto.createHash('md5').update('123456').digest('base64');


var goodsModel=require('./models').goodsModel;
/*goodslist.forEach(function (item) {
	goodsModel.create(item, function (err) {
	    if (err)
	        throw err;
	})
});*/

/*goodsModel.update({gSum:100},{$set:{gPrice:1999.00}},function(err){
	console.log('success');
})*/




