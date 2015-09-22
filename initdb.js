var models=require('./models');
var async=require('async');
var config=require('./config');
var crypto=require('crypto');
//管理员用户
var admins = [
    {
        username: 'admin',
        password: crypto.createHash('md5').update('admin').digest('hex')
    },
    {
        username: 'wjhuang',
        password: crypto.createHash('md5').update('123456').digest('hex'),
    }
];
var goods=[
    {gName:'红米2A增强版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Xiaomi/小米 红米2A增强版 双卡双待4G智能安卓大屏手机包邮预售',gSum:100,gCategory:'手机'},
    {gName:'红米2A增强版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Xiaomi/小米 红米2A增强版 双卡双待4G智能安卓大屏手机包邮预售',gSum:100,gCategory:'手机'},
    {gName:'红米2A增强版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Xiaomi/小米 红米2A增强版 双卡双待4G智能安卓大屏手机包邮预售',gSum:100,gCategory:'手机'},
    {gName:'红米2A增强版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Xiaomi/小米 红米2A增强版 双卡双待4G智能安卓大屏手机包邮预售',gSum:100,gCategory:'手机'},
    {gName:'红米2A增强版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Xiaomi/小米 红米2A增强版 双卡双待4G智能安卓大屏手机包邮预售',gSum:100,gCategory:'手机'},
    {gName:'红米2A增强版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Xiaomi/小米 红米2A增强版 双卡双待4G智能安卓大屏手机包邮预售',gSum:100,gCategory:'手机'},
    {gName:'三星版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'[分12期免息+送豪礼]Samsung/三星 GALAXY S6 Edge SM-G9250手机+',gSum:100,gCategory:'手机'},
    {gName:'三星版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'[分12期免息+送豪礼]Samsung/三星 GALAXY S6 Edge SM-G9250手机+',gSum:100,gCategory:'手机'},
    {gName:'三星版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'[分12期免息+送豪礼]Samsung/三星 GALAXY S6 Edge SM-G9250手机+',gSum:100,gCategory:'手机'},
    {gName:'三星版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'[分12期免息+送豪礼]Samsung/三星 GALAXY S6 Edge SM-G9250手机+',gSum:100,gCategory:'手机'},
    {gName:'三星版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'[分12期免息+送豪礼]Samsung/三星 GALAXY S6 Edge SM-G9250手机+',gSum:100,gCategory:'手机'},
    {gName:'三星版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'[分12期免息+送豪礼]Samsung/三星 GALAXY S6 Edge SM-G9250手机+',gSum:100,gCategory:'手机'},
    {gName:'OPPO版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'【分期0首付】OPPO 3005 四核电信4g版 纤薄智能拍照双卡4G手机',gSum:100,gCategory:'手机'},
    {gName:'OPPO版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'【分期0首付】OPPO 3005 四核电信4g版 纤薄智能拍照双卡4G手机',gSum:100,gCategory:'手机'},
    {gName:'OPPO版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'【分期0首付】OPPO 3005 四核电信4g版 纤薄智能拍照双卡4G手机',gSum:100,gCategory:'手机'},
    {gName:'OPPO版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'【分期0首付】OPPO 3005 四核电信4g版 纤薄智能拍照双卡4G手机',gSum:100,gCategory:'手机'},
    {gName:'OPPO版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'【分期0首付】OPPO 3005 四核电信4g版 纤薄智能拍照双卡4G手机',gSum:100,gCategory:'手机'},
    {gName:'OPPO版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'【分期0首付】OPPO 3005 四核电信4g版 纤薄智能拍照双卡4G手机',gSum:100,gCategory:'手机'},
    {gName:'LG版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'LG G4真皮版 H818GL 2K弧面量子屏双卡移动/联通双4G商务旗舰手机',gSum:100,gCategory:'手机'},
    {gName:'LG版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'LG G4真皮版 H818GL 2K弧面量子屏双卡移动/联通双4G商务旗舰手机',gSum:100,gCategory:'手机'},
    {gName:'LG版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'LG G4真皮版 H818GL 2K弧面量子屏双卡移动/联通双4G商务旗舰手机',gSum:100,gCategory:'手机'},
    {gName:'LG版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'LG G4真皮版 H818GL 2K弧面量子屏双卡移动/联通双4G商务旗舰手机',gSum:100,gCategory:'手机'},
    {gName:'LG版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'LG G4真皮版 H818GL 2K弧面量子屏双卡移动/联通双4G商务旗舰手机',gSum:100,gCategory:'手机'},
    {gName:'LG版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'LG G4真皮版 H818GL 2K弧面量子屏双卡移动/联通双4G商务旗舰手机',gSum:100,gCategory:'手机'},
    {gName:'魅族版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'急速发【送耳机+皮套+钢膜】Meizu/魅族 MX5移动版 双4G手机分期',gSum:100,gCategory:'手机'},
    {gName:'魅族版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'急速发【送耳机+皮套+钢膜】Meizu/魅族 MX5移动版 双4G手机分期',gSum:100,gCategory:'手机'},
    {gName:'魅族版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'急速发【送耳机+皮套+钢膜】Meizu/魅族 MX5移动版 双4G手机分期',gSum:100,gCategory:'手机'},
    {gName:'魅族版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'急速发【送耳机+皮套+钢膜】Meizu/魅族 MX5移动版 双4G手机分期',gSum:100,gCategory:'手机'},
    {gName:'魅族版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'急速发【送耳机+皮套+钢膜】Meizu/魅族 MX5移动版 双4G手机分期',gSum:100,gCategory:'手机'},
    {gName:'魅族版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'急速发【送耳机+皮套+钢膜】Meizu/魅族 MX5移动版 双4G手机分期',gSum:100,gCategory:'手机'},
    {gName:'VIVO版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'vivo X5Max+高配版小黄人限量版移动4g手机 八核双卡双待智能机',gSum:100,gCategory:'手机'},
    {gName:'VIVO版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'vivo X5Max+高配版小黄人限量版移动4g手机 八核双卡双待智能机',gSum:100,gCategory:'手机'},
    {gName:'VIVO版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'vivo X5Max+高配版小黄人限量版移动4g手机 八核双卡双待智能机',gSum:100,gCategory:'手机'},
    {gName:'VIVO版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'vivo X5Max+高配版小黄人限量版移动4g手机 八核双卡双待智能机',gSum:100,gCategory:'手机'},
    {gName:'VIVO版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'vivo X5Max+高配版小黄人限量版移动4g手机 八核双卡双待智能机',gSum:100,gCategory:'手机'},
    {gName:'VIVO版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'vivo X5Max+高配版小黄人限量版移动4g手机 八核双卡双待智能机',gSum:100,gCategory:'手机'},
    {gName:'华为版 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Huawei/华为 荣耀畅玩4C增强版 移动电信智能手机 4G安卓手机',gSum:100,gCategory:'手机'},
    {gName:'华为版1 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Huawei/华为 荣耀畅玩4C增强版 移动电信智能手机 4G安卓手机',gSum:100,gCategory:'手机'},
    {gName:'华为版2 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Huawei/华为 荣耀畅玩4C增强版 移动电信智能手机 4G安卓手机',gSum:100,gCategory:'手机'},
    {gName:'华为版3 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Huawei/华为 荣耀畅玩4C增强版 移动电信智能手机 4G安卓手机',gSum:100,gCategory:'手机'},
    {gName:'华为版4 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Huawei/华为 荣耀畅玩4C增强版 移动电信智能手机 4G安卓手机',gSum:100,gCategory:'手机'},
    {gName:'华为版5 白色 移动4G手机 双卡',gPrice:500.00,gImg:'gImg/1.png',gDescription:'Huawei/华为 荣耀畅玩4C增强版 移动电信智能手机 4G安卓手机',gSum:100,gCategory:'手机'}
]
var tasks=[
    'cleanAdmins',
	'initAdmins',
    'cleanGoods',
    'initGoods',
];
//初始化
var methods={
    cleanAdmins: function (callback) {
        models.adminModel.remove({}, function (err) {
            callback(err)
        });
    },
	initAdmins: function (callback) {
        admins.forEach(function (item) {
            models.adminModel.create(item, function (err,data) {
                if (err){
                    throw err;
                }else{
                	console.log(data);
                }
            })
        })
        callback();
    },
    cleanGoods: function (callback) {
        models.goodsModel.remove({}, function (err) {
            callback(err)
        });
    },
    initGoods: function (callback) {
        goods.forEach(function (item) {
            models.goodsModel.create(item, function (err,data) {
                if (err){
                    throw err;
                }else{
                    console.log(data);
                }
            })
        })
        callback();
    },
};
async.eachSeries(tasks, function (item, callback) {
    console.log(item);
    methods[item](callback);
}, function (err) {
    console.log(err);
});