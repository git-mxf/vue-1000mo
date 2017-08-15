<template>
	<div class="loginbefore">
		<div class="header">
			<span>个人中心</span>
		</div>
		<div class="section">
			<img src="../assets/img/person.png" />
			<router-link to="/login" tag="div" class="log">登录集市</router-link>
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

.header{
	height: pm(80px);
	text-align: center;
	line-height: pm(80px);
	background: #f6f6f6;
	position: relative;
	font-size: 14px;
	border-bottom: 1px solid #ccc;
}

.section{
	img{
		width: 50%;
		margin: pm(350px) auto 0;
	}
	.log{
		width: pm(218px);
		height: pm(70px);
		text-align: center;
		line-height: pm(70px);
		border:1px solid #e33030;
		color: #e33030;
		border-radius: pm(5px);
		margin: pm(30px) auto 0;
	}
}
</style>