<template>
	<div class="shoplist">
		<div class="header">
			<router-link to="/market"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
			<span>全部</span>
		</div>
		<div class="sect">
			<figure v-for="(data,index) in datalist" :key="data.id" @click="handleClick(data.id)">
					<img :src="data.picture" />
					<figcaption>{{data.name}}</figcaption>
			</figure>
		</div>
	</div>
</template>

<script>
import router from "../router.js";
import Api from "./api.js";
import { Indicator } from 'mint-ui';

	export default {
		data () {
			return {
				datalist:[]
			}
		},
		mounted(){
			Indicator.open('加载中...');

			axios.get(Api.url + "/api/shoplist").then(res=>{
				console.log(res.data.items);
				this.datalist = res.data.items;

				Indicator.close();
			})
		},
		methods:{
			handleClick(id){
				console.log(id)
				router.push({name:'shoplistchild', params:{id: id}})
			}
		}
	}
</script>

<style lang="scss" scoped>
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}
.shoplist{
	height: 100%;
	background: #fff;
}
.header{
	width: 100%;
	height: pm(80px);
	text-align: center;
	line-height: pm(80px);
	background: #f6f6f6;
	position: relative;
	font-size: 14px;
	.iconfont{
		position: absolute;
		left: pm(10px);
	}
}
.sect{
	width: 100%;
	height: pm(320px);

	// display: flex;
	figure{
		width: 25%;
		text-align:center;
		margin-top: pm(40px);
		float: left;
		img{
			width:pm(76px);
			display:inline-block;
		}
		figcaption{
			margin-top: pm(20px);
		}
	}
}
</style>