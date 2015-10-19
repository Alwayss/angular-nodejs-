var express=require('express');
var mongoose=require('mongoose');
var session=require('express-session');
var MongoStore=require('connect-mongo')(session);
var bodyparser=require('body-parser');
var app=express();
var formidable=require('formidable');
var fs=require('fs');
var routes=require('./routes');
//连接数据库
var config=require('./config');
//mongoose.connect("mongodb://127.0.0.1:27017/superStore");
var uploadDir=require('path').join(__dirname+'/public/images');

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
app.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = uploadDir;
    form.parse(req, function (error, fields, files) {
        //var name = uuid.v4();
        var filename = files.upload.name;
        fs.renameSync(files.upload.path, uploadDir + '/' + filename);
        //res.writeHead(200, {'Content-Type': 'application/json'});
        //res.charset = 'utf-8';
        console.log(filename);
        //res.send({name: name + filename.substr(filename.lastIndexOf('.')),uuid:name,origin:filename});
        //res.end(util.inspect({fields: fields, files: files}));
    });
    /*form.on('progress',function(bytesReceived,bytesExpected){     //进度不发生变化都会发送数据，不用使用计时器
        var percent=Math.floor(bytesReceived/bytesExpected*100);
        io.emit('progress',{percent:percent});
    });*/
});
app.get('/goods/:goodsname',routes.goods.select);
app.get('/search/:goodsname',routes.goods.search);
app.post('/adminLogin',routes.admin.adminLogin);
app.post('/userReg',routes.user.userReg);
app.post('/userLogin',routes.user.userLogin);
app.get('/goods/paged/:pageid',routes.goods.show);
app.post('/goodsAdd',routes.goods.add);
app.post('/goodsDel',routes.goods.del);
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
app.listen(8000);

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




