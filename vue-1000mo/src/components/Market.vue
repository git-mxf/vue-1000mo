<template>
	<div class="market">
		<div class="header">
			<span>杭州</span>
			<router-link to="/search" tag="div" class="sarch">关键字/商品</router-link>
		</div>
		<mt-loadmore :top-method="loadTop"  ref="loadmore">
		<swipe class="my-swipe">
		  <swipe-item v-for="(data,index) in listdata1" :key="data.id">
		  	<img :src="data.picture" />
		  </swipe-item>
		</swipe>
		<div class="list" :style="{backgroundImage:databg2}">
			<figure>
				<router-link to="/shoplist">
					<img src="../assets/img/list-1.png" />
					<figcaption>品种分类</figcaption>
				</router-link>
			</figure>
			<figure v-for="(data,index) in listdata2" :key="data.id" @click="clic(data.id)">
				<img :src="data.smallPicture" />
				<figcaption>{{data.name}}</figcaption>
			</figure>
		</div>
		<div class="serch">
			<img :src="databg1" />
		</div>

		<div class="muen">
			<img v-for="(data,index) in listdata6" :key="data.id" :src="data.picture" @click="muenclick(data.id)" />
		</div>
		
		<div class="newperson">
			<img src="../assets/img/newperson.png" />
		</div>
		<div class="product">
			<ul>
				<li v-for="(data,index) in listdata3" :key="data.id" @click="handleClick(data.id)">
					<img :src="data.recommendPicture" />
					<img src="../assets/img/youxia.png" />
				</li>
			</ul>
		</div>
		<div class="newperson">
			<img src="../assets/img/jishi.png" />
		</div>
		<div class="product">
			<ul>
				<li v-for="(data,index) in listdata4" :key="data.id" @click="handleClick(data.id)">
					<img :src="data.recommendPicture" />
					<img src="../assets/img/youxia.png" />
				</li>
			</ul>
		</div>
		<div class="newpro">
			<img src="../assets/img/new.png" />
		</div>
		<div class="newperson">
			<img src="../assets/img/like.png" />
		</div>
		<div class="likepro">
			<dl v-for="(data,index) in listdata5" :key="data.id" @click="handleClick(data.id)">
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
						<span class="product-price">{{data.price}}元/盒</span>
						<span class="product-unitPrice">{{data.unitPrice}}</span>
					</p>
				</dd>
			</dl>
		</div>
		</mt-loadmore>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import "vue-swipe/dist/vue-swipe.css";
import Vue from "vue";
import router from "../router";
import Api from "./api.js";
import { Indicator } from 'mint-ui';

import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

	export default {
		data () {
			return {
				databg2:null,
				databg1:null,
				listdata1:[],
				listdata2:[],
				listdata3:[],
				listdata4:[],
				listdata5:[],
				listdata6:[],
			}
		},
		mounted(){
			Indicator.open('加载中...');

			axios.get(Api.url + "/api/banner").then(res=>{
				// console.log(res.data.items);
				this.listdata1 = res.data.items;


			});

			axios.get(Api.url + "/api/bg1").then(res=>{
				console.log(res.data.items[0].picture);
				this.databg1 = res.data.items[0].picture;
			});

			axios.get(Api.url + "/api/bg2").then(res=>{
				// console.log(res.data.backgroundPicture);
				 this.databg2 = "url(" + res.data.backgroundPicture + ")";
				// this.databg2 = "url(" + require(""+url+"") + ")"
			});


			axios.get(Api.url + "/api/muen").then(res=>{
				// console.log(res.data.items);
				this.listdata2 = res.data.items;
				Indicator.close();
			})

			axios.get(Api.url + "/api/muen2").then(res=>{
				console.log(res.data.items);
				this.listdata6 = res.data.items;
			})

			axios.get(Api.url + "/api/newperson").then(res=>{
				// console.log(res.data.items);
				this.listdata3 = res.data.items;
			})

			axios.get(Api.url + "/api/jishi").then(res=>{
				// console.log(res.data.items);
				this.listdata4 = res.data.items;
			})

			axios.get(Api.url + "/api/like").then(res=>{
				// console.log(res.data.items);
				this.listdata5 = res.data.items;
			})
		},
		 methods:{
		 	handleClick(id){
		 		router.push({name:'detail',params:{myid: id}});
		 	},
		 	clic(id){
		 		router.push({name:'shoplistchild', params:{id: id}})
		 	},
		 	muenclick(id){
		 		router.push({name:'section', params:{id: id}})
		 	},
		 	loadTop(){
				console.log('加载数据');

				setTimeout(()=>{
					this.$refs.loadmore.onBottomLoaded();
				},500)
			}
		 }
	}
</script>

<style lang="scss" scoped>
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}
.market{
	height: 100%;
	background: #eee;
}
.header{
	height: pm(80px);
	width: 100%;
	background: rgba(100%,100%,100%,0.5);
	line-height: pm(80px);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	padding-left:pm(10px);
	span{
		z-index:100;
		color: #000;
		float: left;
	}

	.sarch{
		margin-top: pm(15px);
		float: left;
		margin-left:pm(10px);
		border: 0;
		background: #eee;
		border-radius: pm(10px);
		height:pm(50px);
		width: pm(500px);
		text-align:center;
		font-size: 12px;
		line-height: pm(50px);
	}
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  width: 100%;
  img{
  	height: 200px;
  	width: 100%;
  }
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}

.list{
	width: 100%;
	height: pm(320px);
	// background: url("../assets/img/bg-1.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
	// display: flex;
	figure{
		width: 20%;
		text-align:center;
		margin-top: pm(25px);
		float: left;
		img{
			width:pm(76px);
			display:inline-block;
		}
	}
}
.serch{
	img{
		width: 100%;
	}
}
.muen{
	padding-top: pm(20px);
	background: #eee;
	overflow: hidden;
	img{
		width: pm(213px);
		float: left;
	}
}
.newperson{
	width: 100%;
	background: #fff;
	height: pm(36px);
	border-bottom: 2px solid #eee;
	padding: pm(20px) 0;
	overflow: hidden;
	margin-top: pm(20px);
	img{
		height: pm(36px);
		margin:0 auto;
	}
}
.product{
	overflow: hidden;
	ul{
		li{
			position: relative;
			overflow: hidden;
			img{
				width: 100%;
			}
			img:last-child{
				position:absolute;
				top: 0;
				left: 0;
			}
		}
	}
}
.newpro{
	overflow: hidden;
	margin-top: pm(20px);
	img{
		width: 100%;
	}
}
.likepro{
	margin-bottom: pm(100px);
	overflow: hidden;
	dl{
		width: 50%;
		overflow: hidden;
		background: #fff;
		padding-bottom: pm(20px);
		float: left;
		box-sizing: border-box;
		padding-right:pm(2px);
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