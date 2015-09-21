module.exports={ 
	admin:{         //管理员表的基本属性字段
		username: {type: String, unique: true},   //用户名
	    password: {type: String},   //密码
	    token: {type: String, default: ''}  //授权码
	},
	user:{                 //用户表的基本属性字段
		username: {type: String, unique: true},   //用户名
	    password: {type: String, select: false},   //密码
	    telphone: {type:Number},              //联系电话
	    email: {type:String}
	}, 
	category:{           //类别表的基本属性字段     主要指手机、U盘移动电源之类的     这张表主要用于导航栏的分类的显示
		cName: {type:String}
	},
	goods:{                 //商品的基本属性字段
		gName: {type:String},           //商品名
		gPrice: {type:Number},          //价格
		gDescription: {type:String},      //商品描述
		gSum: {type:Number},              //库存量
		gCategory:{type:String},       // 商品所属的类别，如手机，u盘
		gImg:{type:String}                //图片路径
	},
	cart:{            //购物车的基本属性字段     包含所有用户的购物车中的商品
		uid: {type:String},            //基本和goods表的属性差不多
		gid: {type:String},      
		gName: { type: String },        
        gPrice: { type: String },
        gImgSrc: { type:String },
        gQuantity: { type: Number },    //添加到购物车中的商品数量
        gState:{type:Boolean,default:false}           //商品的状态
	},
	orders:{            //订单的基本属性
		uid: {type:String},
		oDate: {type:Date},
        oCategory: { type:[        //订单的内容，类型:数组 ，指包含哪些商品 
        	{
        		gid:{type:String},       //主要包含购物车中的字段属性
        		gName:{type:String},
        		gPrice:{type:Number},
        		gImgSrc: { type:String },
                gQuantity: { type: Number },
        	}
        ]},
        state: {type:Boolean,default:false}       //订单状态  
	}
}