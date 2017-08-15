<template>
	<div class="detail">
		<div class="header">
			<i class="iconfont icon-iconxiangzuo" @click="returnClick"></i>
			<span>商品详情</span>
		</div>
		<div class="sec" v-if="datalist">
			<swipe class="my-swipe">
			  <swipe-item>
				<img :src="datalist.mainPicture" />
			  </swipe-item>
			  <swipe-item v-for="(data,index) in datalist1">
				<img :src="data" />
			  </swipe-item>
			</swipe>
			<div class="main">
				<p class="frs">
					<span><i>{{datalist.name}}</i>/{{datalist.unit}}</span>
					<span>{{datalist.sellNum}}人付款</span>
				</p>
				<div class="pric">
					<span>{{datalist.price}}元</span>
					<span>{{datalist.unitPrice}}</span>
				</div>
				<div class="guig">
					<span>规格</span>
					<span>整框装</span>
				</div>
				<div class="kong"></div>
				<div class="intro">
					<img src="../assets/img/intro.png" />
					<div class="neirong">
						<pre>{{datalist.description}}</pre>
						<img v-for="(data,index) in piclist" :src="data" />
					</div>
				</div>
			</div>
		</div>
		<div class="fott">
			<div class="into" @click="handle">
				加入购物车
			</div>
			<router-link to="/shopcar" tag="span"></router-link>
		</div>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import "vue-swipe/dist/vue-swipe.css";
import Vue from "vue";
import router from "../router.js";
import Api from "./api.js";

import { Indicator } from 'mint-ui';

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

	export default {
		data () {
			return {
				datalist:null,
				datalist1:[],
				piclist:[],
				username: [],
				goodsname:[],
				price:[],
				count:0
			}
		},
		mounted(){
			Indicator.open('加载中...');
			console.log(this.$route.params.myid);
			axios.get(Api.url + `/api/detail?id=${this.$route.params.myid}`).then(res=>{
				// console.log(res.data);
				this.datalist1 = res.data.pictureList;
				this.datalist1 = this.datalist1.split(",");
				// console.log(this.datalist1)

				this.datalist = res.data;
				console.log(this.datalist)

				this.piclist = res.data.descriptionPicture;
				this.piclist = this.piclist.split(",");
				console.log(this.piclist);

				this.username = res.data.id
				this.goodsname = res.data.name;
				this.price = res.data.price;
				this.count = this.count++;
				console.log(this.goodsname)
				console.log(this.price)
				console.log(this.count)

				Indicator.close();
			})
		},
		methods:{
			handle(){
				// console.log(this.datalist);
				axios.get(Api.url + '/cart/add',{
					username: this.username,
					goodsname: this.goodsname,
					price: this.price,
					count: this.count
				}).then(res=>{
					console.log(res.data);
				})
			},
			returnClick(){
				// router.push({name:'shoplistchild'})
				router.push({name:'shoplistchild'})
			}
		}
	}
</script>

<style lang="scss" scoped>
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}
.detail{
	height: 100%;
	background: #fff;
}

.header{
	width: 100%;
	height: pm(80px);
	text-align: center;
	line-height: pm(80px);
	background: #f6f6f6;
	position: fixed;
	font-size: 14px;
	top: 0;
	left: 0;
	z-index: 99;
	.iconfont{
		position: absolute;
		left: pm(10px);
	}
}
.sec{
	margin-top: pm(80px);
	.main{
		.frs{
			background: #fff;
			height: pm(80px);
			line-height: pm(80px);
			padding:0 pm(10px);
			span{
				color: #aaa;
				i:first-child{
					color: #333;
					font-size: 16px;
				}
			}
			span:last-child{
				color: #333;
				float: right;
			}
		}
		.pric{
			height: pm(60px);
			line-height: pm(60px);
			background: #fff;
			border-bottom: 1px solid #eee;
			margin: 0 pm(10px);
			font-size: 16px;
			color: #e33030;
			span:last-child{
				color: #333;
				font-size: 12px;
			}
		}
		.guig{
			padding: 0 pm(15px);
			height: pm(80px);
			line-height: pm(80px);
			span:last-child{
				display: inline-block;
				width: pm(170px);
				height: pm(63px);
				line-height: pm(63px);
				text-align: center;
				background: #e33030;
				color: #fff;
				border-radius: pm(8px);
				margin-left: pm(20px);
			}
		}
		.kong{
			width: 100%;
			height: pm(20px);
			background: #eee;
			margin-top: pm(10px);
		}
		.intro{
			padding: pm(20px) pm(10px) pm(85px);
			img{
				width: 60%;
				margin: 0 auto;
			}
			.neirong{
				margin-top: pm(20px);

				img{
					width: 100%;
				}
				pre{
				    white-space: pre-wrap;	
				}
			}
		}
	}
}
.fott{
	.into{
		width: 100%;
		height: pm(85px);
		line-height: pm(85px);
		text-align: center;
		background: #e33030;
		color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	span{
		display: block;
		position: fixed;
		right: pm(20px);
		bottom: pm(100px);
		width: pm(82px);
		height: pm(82px);
		border-radius: 50%;
		background: url("../assets/img/cart.png") no-repeat;
		background-size: 100% 100%;
	}
}

.my-swipe {
  height: pm(640px);
  color: #fff;
  font-size: 30px;
  text-align: center;
  width: 100%;
  img{
  	width: 100%;
  }
}

</style>