<template>
	<div class="xianliang">
		<div class="top">
			<div class="header">
				<router-link to="/market"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
				<span>限量秒杀</span>
			</div>
			<div class="tab">
				<ul>
					<li v-for="(data, index) in datalist" @click="handleClick(index)" :class="currentIndex===index?'active':'' ">{{data}}
						<span v-if="index==2" :class="istop?'top':'bottom'">
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="likepro">
			<dl v-for="(data,index) in listdata1" :key="data.id">
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
	</div>
</template>

<script>
import "../assets/iconfont/iconfont.css";
import img from "../assets/img/bottom.png";
import Api from "./api.js";
	export default {
		data () {
			return {
				datalist:["上市时间","销量优先","价格"],
				currentIndex:0,
				listdata1:[],
				istop:true
			}
		},
		mounted(){
			axios.get(Api.url + `/api/xianliang?id=${this.$route.params.id}`).then(res=>{
				console.log(res.data.items);
				this.listdata1 = res.data.items
			})
		},
		methods:{
			handleClick(index){
				console.log(index);
				this.currentIndex = index;
				if(index===2){
					this.istop=!this.istop;
				}

				if(index===1){
					return this.listdata1.sort((a,b)=>a.sellNum-b.sellNum);
				}
			}

		}
	}
</script>

<style lang="scss" scoped>
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}

.xianliang{
	height: 100%;
	background: #eee;
	// overflow: hidden;
}
.top{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
}

.header{
	width: 100%;
	height: pm(80px);
	text-align: center;
	line-height: pm(80px);
	background: #f6f6f6;
	position: fixed;
	font-size: 14px;
	top:0;
	left:0;
	.iconfont{
		position: absolute;
		left: pm(10px);
	}
}
.tab{
	width: 100%;
	overflow: hidden;
	margin-top: pm(80px);
	ul{
		li{
			float: left;
			width: 33.3%;
			text-align: center;
			height: pm(70px);
			line-height: pm(70px);
			background: #fff;
			font-size: 14px;
		}
		li:last-of-type{
			position: relative;
			span{
					position: absolute;
					top: pm(24px);
					left: pm(140px);
					content: "";
					display:block;
					width: pm(19px);
					height: pm(19px);
			}
			.top{
				background-image: url("../assets/img/top.png");
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
			.bottom{
				background-image: url("../assets/img/bottom.png");
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
		}
	}
}
.active{
	color: red;
}
.likepro{
	margin-top: pm(150px);
	margin-bottom: pm(10px);
	width: 100%;
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