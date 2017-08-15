<template>
	<div class="loginpwd">
		<div class="header">
			<router-link to="/login"> <i class="iconfont icon-iconxiangzuo"></i></router-link>
			<span>密码登录</span>
		</div>
		<div class="inp">
			<input type="text" placeholder="手机号" id="iphone" v-model="username">
			<input type="验证码" placeholder="密码" id="yanz" v-model="psw">
			<span class="yzm">忘记密码？</span>
			<div class="log" @click="login">
				登录
			</div>
			<router-link tag="div" class="regi" to="/register">
				注册
			</router-link>
		</div>
	</div>
</template>

<script>
import router from "../router.js";
import Api from "./api.js";
	export default {
		data () {
			return {
				username:"",
				psw: ""
			}
		},
		methods:{
			login(){
				if(this.username!==''&&this.psw!==''){
					axios.post(Api.url + '/users/login4ajax', {
						username: this.username,
						psw : this.psw
						}).then(res=>{
							console.log(res);
							if(res.data.code===1){
								// console.log(res.data.msg)
								alert(res.data.msg)
								router.push({name:'loginafter'})
							}else{
								// console.log(res.data.msg)
								alert(res.data.msg)
							}
					})
				}else{
					console.log('请输入正确的用户名和密码')
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

.loginpwd{
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
		float: right;
		margin-top: pm(10px);
		color: #e33030;
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
		color: #e33030;
		text-align: center;
		border-radius: pm(10px);
		border:1px solid #e33030;
		margin-top: pm(150px);
	}
	.regi{
		width: 100%;
		height: pm(70px);
		line-height: pm(70px);
		background: #e33030;
		color: #fff;
		text-align: center;
		border-radius: pm(10px);
		margin-top: pm(30px);
	}
	
}
</style>