var models=require('./models');
var async=require('async');

//管理员用户
var admins = [
    {
        username: 'admin',
        password: 'admin',
    },
    {
        username: 'wjhuang',
        password: '123456',
    }
];
var tasks=[
	'initAdmins',
];
var methods={
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
};
async.eachSeries(tasks, function (item, callback) {
    console.log(item);
    methods[item](callback);
}, function (err) {
    console.log(err);
});