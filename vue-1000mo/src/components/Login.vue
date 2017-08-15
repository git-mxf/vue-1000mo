<template>
	<div class="login">
		<div class="header">
			<router-link to="/person"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
			<span>登录</span>
		</div>
		<div class="inp">
			<input type="text" placeholder="手机号" id="iphone">
			<input type="验证码" placeholder="验证码" id="yanz">
			<span class="yzm">获取验证码</span>
			<span class="protocol-text">从未登录的手机号，登录时将自动注册，且代表您已同意<span>《用户协议》</span></span>
			<div class="log">
				登录
			</div>
		</div>
		<div class="pwdlo">
			<p>不想等验证码？</p>
			<router-link to="/loginpwd" tag="div">密码登录</router-link>
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
.login{
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
.inp{
	margin-top: pm(30px);
	position: relative;
	padding: 0 pm(40px);
	input{
		display: block;
		width: 100%;
		margin-top: pm(50px);
		height: pm(60px);
		border: 0;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.yzm{
		display: block;
		position: absolute;
		width: pm(176px);
		height: pm(66px);
		text-align: center;
		line-height: pm(66px);
		background: #ff8000;
		color: #fff;
		border-radius: pm(6px);
		right: pm(40px);
		top: pm(100px);
	}
	.protocol-text{
		display: block;
		margin-top:pm(20px);
		font-size: 14px;
		span{
			color: #e33030;
		}
	}
	.log{
		width: 100%;
		height: pm(66px);
		line-height: pm(66px);
		background: #e33030;
		color: #fff;
		text-align: center;
		border-radius: pm(10px);
		margin-top:pm(100px);
	}
}
.pwdlo{
	width: 100%;
	margin:0 auto;
	text-align: center;
	margin-top: pm(370px);
	p{
		margin: 0 0 pm(20px);
	}
	div{
		width: pm(180px);
		height: pm(66px);
		line-height: pm(66px);
		text-align: center;
		border:1px solid #e33030;
		color: #e33030;
		border-radius: pm(6px);
		margin: 0 auto;
	}
}
</style>