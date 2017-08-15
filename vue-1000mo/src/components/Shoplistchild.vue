<template>
	<div>
		<div class="header">
			<router-link to="/shoplist"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
			<span>全部</span>
		</div>
		<div class="produ">
		<mt-loadmore :top-method="loadTop"  ref="loadmore">
			<dl v-for="(data,index) in datalist" :key="data.id" @click="handle(data.id)">
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
		</mt-loadmore>
		</div>
	</div>
</template>

<script>
import router from "../router";
import Api from "./api.js";
import Vue from "vue";
import { Indicator } from 'mint-ui';
import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

	export default {
		data () {
			return {
				datalist:[]
			}
		},
		mounted(){
			Indicator.open('加载中...');

			console.log(this.$route.params.id);
			axios.get(Api.url + `/api/shoplistchild?id=${this.$route.params.id}`).then(res=>{
				console.log(res.data.items);
				this.datalist = res.data.items

				Indicator.close();
			})
		},
		methods:{
			handle(id){
				console.log(id);
				router.push({name:'detail', params:{myid: id}})
			},
			loadTop(){
				console.log('加载数据');

				setTimeout(()=>{
					this.$refs.loadmore.onBottomLoaded();
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
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
	.iconfont{
		position: absolute;
		left: pm(10px);
	}
}
.produ{
	margin-top: pm(80px);
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