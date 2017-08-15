<template>
	<div class="shopcar">
		<div class="header">
			<i class="iconfont icon-iconxiangzuo"></i>
			<span>购物车</span>
		</div>
		<div class="section">
			<img src="../assets/img/shopcar.png" />
		</div>
		<div class="btom">
			<img src="../assets/img/hot.png" />
		</div>
		<div class="produ">
			<dl v-for="(data,index) in datalist" :key="data.id" @click="handleClick(data.id)">
				<dt>
					<img :src="data.mainPicture" />
				</dt>
				<dd>
					<p>
						<span class="product-name">{{data.name}}</span>
						<span class="product-sellNum">{{data.sellNum}}人付款</span>
					</p>
					<p class="shop-name">【{{data.shop.name}}】</p>
					<p>
						<span class="product-price">{{data.price}}元/{{data.unit}}</span>
						<span class="product-unitPrice">{{data.unitPrice}}</span>
					</p>
				</dd>
			</dl>
		</div>
		<div class="foot">
			<div class="lef">
				<span></span>
				<span>全选</span>
			</div>
			<div class="rig">
				合计：<span>0元</span>
				<span>结算(<i>0</i>)</span>
			</div>
		</div>
	</div>
</template>

<script>
import router from "../router.js"
import Api from "./api.js";
	export default {
		data () {
			return {
				datalist:[],
				datalist1:[]
			}
		},
		mounted(){
			axios.get(Api.url + "/api/shopcar").then(res=>{
				// console.log(res.data.items);
				this.datalist = res.data.items;
			})

			axios.get(Api.url + "/cart/list").then(res=>{
				console.log(res);
			})
		},
		methods:{
			handleClick(id){
				router.push({name:'detail', params:{myid: id}})
			}
		}
	}
</script>

<style lang="scss" scoped>
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}
.shopcar{
	height:100%;
	background: #eee;
}
.header{
	height: pm(80px);
	width: 100%;
	text-align: center;
	line-height: pm(80px);
	background: #f6f6f6;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	font-size: 14px;
	.iconfont{
		position: absolute;
		left: pm(10px);
	}
}
.section{
	padding-top: pm(150px);
	img{
		width: 50%;
		margin: 0 auto;
	}
}
.btom{
	margin-top: pm(60px);
	margin-bottom: pm(20px);
	img{
		width: 60%;
		margin: 0 auto;
	}
}
.foot{
	height: pm(80px);
	width: 100%;
	position: fixed;
	bottom:pm(80px);
	left: 0;
	line-height: pm(80px);
	padding-left: pm(10px);
	border-top:1px solid #eee;
	background: #fff;
	.lef{
		float: left;

		span:first-child{
			float: left;
			display: block;
			width: pm(33px);
			height: pm(33px);
			border:1px solid #ccc;
			margin-top: pm(20px);
			border-radius: 50%;
			margin-right: pm(30px);
		}
		span:last-child{
			font-size: 14px;
		}
	}
	.rig{
		float: right;
		
		span:first-of-type{
			color: #e33030;
		}

		span:last-of-type{
			display:inline-block;
			width: pm(176px);
			height: 100%;
			background: #ff8000;
			color: #fff;
			text-align: center;
		}
	}
}
.produ{
	margin-bottom: pm(160px);
	overflow: hidden;
	dl{
		width: 50%;
		overflow: hidden;
		padding-bottom: pm(2px);
		float: left;
		padding-right:pm(2px);
		box-sizing: border-box;
		dt{
			width: pm(318px);
			height: pm(318px);
			img{
				width: 100%;
				height: 100%;
			}
		}
		dd{
			padding-left:pm(10px);
			padding-right: pm(10px);
			padding-bottom: pm(20px);
			background: #fff;
			p{
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				padding-top: pm(10px);
				span{
					display: inline-block;
				}
				.product-name{
					width: 50%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					float: left;
				}
				.product-sellNum{
					float: right;
					color: #aaa;
				}
				.product-price{
					color: red;
				}

			}
		}
	}
}

</style>