<template>
	<div class="order">
		<div class="header">
			<span>订单</span>
			<span class="ipho">联系客服</span>
		</div>
		<div class="ord">
			<ul>
				<router-link to="/order/orders" tag="li" active-class="active">已下单</router-link>
				<router-link to="/order/peisong" tag="li" active-class="active" >已配送</router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
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
.order{
	height:100%;
	background: #eee;
}
.header{
	height: pm(80px);
	text-align: center;
	line-height: pm(80px);
	background: #f6f6f6;
	position: relative;
	font-size: 14px;
	border-bottom: 1px solid #ccc;
	.ipho{
		position: absolute;
		right: 15px;
	}
}
.ord{
	background: #fff;
	width: 100%;
	height: pm(70px);
	line-height: pm(70px);
	overflow: hidden;
	padding-bottom: pm(5px);
	ul{
		li{
			float: left;
			width: 50%;
			text-align: center;
			box-sizing: border-box;
		}
	}
}
.active{
	color: #e33030;
	border-bottom: 3px solid #e33030
}
</style>