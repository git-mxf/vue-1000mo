<template>
	<div class="Search">
		<div class="header">
			<router-link to="/market"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
			<span>搜索</span>
		</div>
		<div class="serch">
			<input type="text" placeholder="关键字/商品">
		</div>
		<div class="zuijin">
			<span>最近搜索</span>
			<a href="javascript:;">清除记录</a>
		</div>
	</div>
</template>

<script>
import "../assets/iconfont/iconfont.css";
	export default {
		data () {
			return {

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
.serch{
	width: 100%;
	margin-top: pm(20px);
	padding-left: pm(50px);
	input{
		height: pm(60px);
		background: #eee;
		border: 1px solid #ccc;
		width: 80%;
		text-align:center;
		font-size: 12px;
		border-radius: pm(5px);
	}
}
.zuijin{
	margin-top: pm(50px);
	margin-left: pm(10px);
	position: relative;
	span{
		font-size: 16px;
	}
	a{
		position: absolute;
		display: block;
		width: pm(160px);
		height: pm(60px);
		line-height: pm(60px);
		text-align : center;
		border-radius: pm(10px);
		border: 1px solid red;
		color: red;
		right: 10px;
		top: -5px;
	}
}
</style>