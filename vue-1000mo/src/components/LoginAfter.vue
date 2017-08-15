<template>
	<div>
		<div class="header">
			<span>个人中心</span>
			<router-link to="/person/loginbefore" class="out">退出登录</router-link>
		</div>
		<div class="section">
			<div class="xinxi">
				<img src="../assets/img/tx.jpg" @click="photo" />
				<div>
					<p>12345678</p>
					<p>昵称未填写</p>
				</div>
				<i class="iconfont icon-arrows-down-copy"></i>
			</div>
			<div class="mybb">
				<span></span>
				我的阡陌币
				<i class="iconfont icon-arrows-down-copy"></i>
			</div>
		</div>
	</div>
</template>

<script>
import "../assets/iconfont/iconfont.css";

	export default {
		data () {
			return {
				username:""
			}
		},
		mounted(){
			// axios.post('/users/login4ajax').then(res=>{
			// 	console.log(res);
			// })
		},
		methods:{
			photo(){
				
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
	.out{
		position: absolute;
		right: pm(10px);
	}
}
.section{
	margin-top: pm(15px);
	.xinxi{
		width: 100%;
		height: pm(110px);
		background: #fff;
		padding: pm(27px) pm(14px);
		position: relative;
		img{
			width: pm(109px);
			float: left;
		}
		div{
			float: left;
			margin-left: pm(20px);
			p{
				margin-top: pm(15px);
				font-size: 14px;
			}
		}
		.iconfont{
			position: absolute;
			right: pm(60px);
			top: pm(60px);
			color: #d9d9dc;
		}
	}
	.mybb{
		height: pm(35px);
		background: #fff;
		padding: pm(27px) pm(14px);
		margin-top: pm(15px);
		span{
			display: block;
			float: left;
		}
	}
}
</style>