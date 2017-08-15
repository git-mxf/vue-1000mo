<template>
	<div class="peisong">
		<div class="kk">
			<img src="../assets/img/order.png" />
			<router-link to="/market" tag="div" class="go">去逛逛</router-link>
		</div>
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

.peisong{
	height: 100%;
	background: #eee;
}
.kk{
	margin-top: pm(100px);
	img{
		width: 50%;
		margin: 0 auto;
	}
	.go{
		width: pm(130px);
		height: pm(60px);
		line-height: pm(60px);
		text-align: center;
		background: #e33030;
		color: #fff;
		border-radius: pm(5px);
		margin: pm(30px) auto;
	}
}
</style>