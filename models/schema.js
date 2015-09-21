module.exports={ 
	admin:{         //管理员表的基本属性字段
		username: {type: String, unique: true},   //用户名
	    password: {type: String},   //密码
	    token: {type: String, default: ''}  //授权码
	},
	user:{                 //用户表的基本属性字段
		username: {type: String, unique: true},   //用户名
	    password: {type: String, select: false},   //密码
	    telphone: {type:Number},
	    email: {type:String}
	},
	category:{           //类别表的基本属性字段     主要指手机、U盘移动电源之类的
		cName: {type:String}
	},
	goods:{                 //商品的基本属性字段
		gName: {type:String},
		gPrice: {type:Number},
		gDescription: {type:String},
		gSum: {type:Number},
		gCategory:{type:String},
		gImg:{type:String}
	},
	cart:{            //购物车的基本属性字段
		uid: {type:String},
		gid: {type:String},
		gName: { type: String },
        gPrice: { type: String },
        gImgSrc: { type:String },
        gQuantity: { type: Number },
        gState:{type:Boolean,default:false}
	},
	orders:{            //订单的基本属性
		uid: {type:String},
		oDate: {type:Date},
        oCategory: { type:[
        	{
        		gid:{type:String},
        		gName:{type:String},
        		gPrice:{type:Number},
        		gImgSrc: { type:String },
                gQuantity: { type: Number },
        	}
        ]},
        state: {type:Boolean,default:false}
	}
}