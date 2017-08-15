<template>
	<div class="registe">
		<div class="header">
			<router-link to="/loginpwd"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
			<span>注册</span>
		</div>
		<div class="inp">
			<input type="text" placeholder="请输入您的手机号码" id="iphone" v-model="username">
			<input type="验证码" placeholder="请输入您的验证码" id="yanz">
			<input type="验证码" placeholder="请设定您的密码（至少6位）" id="yanz" v-model="psw">
			<span class="yzm">获取验证码</span>
			<span class="protocol-text">我已阅读并同意<span>《用户协议》</span></span>
			<div class="log" @click="regist">
				确定
			</div>
		</div>
	</div>
</template>

<script>
import router from "../router.js";
import Api from "./api.js"

	export default {
		data () {
			return {
				username:"",
				psw:""
			}
		},
		methods:{
			regist(){
				if(this.username!=''&&this.psw!=''){
					axios.post(Api.url + '/users/regist4ajax', {
					username: this.username,
					psw : this.psw
					}).then(res=>{
						console.log(res.data);
						if(res.data.code===1){
							// console.log(res.data.msg)
							alert(res.data.msg)
							router.push({name:'login'})
						}else{
							// console.log(res.data.msg)
							alert(res.data.msg)
						}
					})
				}else{
					alert('注册失败')
					console.log('注册失败');
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
.registe{
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
</style>