<template>
  <div id="all">
    <section>
      <router-view></router-view>
    </section>

    <footer>
    	<ul>
    		<router-link to="/market" tag="li" activeClass="app-active">
				<i class="iconfont icon-zhuye1"></i>
    			集市</router-link>
	    	<router-link to="/shopcar" tag="li" activeClass="app-active">
				<i class="iconfont icon-gouwuchekong"></i>
	    		购物车</router-link>
	    	<router-link to="/order" tag="li" activeClass="app-active">
				<i class="iconfont icon-dingdan-copy"></i>
	    		订单</router-link>
	    	<router-link to="/person" tag="li" activeClass="app-active">
				<i class="iconfont icon-wode"></i>
	    		个人中心</router-link>
    	</ul>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import "../assets/iconfont/iconfont.css";


export default {

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}
#all{
	box-sizing: border-box;
	footer{
		width: 100%;
		overflow: hidden;
		position: fixed;
		bottom:0;
		left: 0;
		background: #fff;
		margin-top: pm(60px);
		ul{
			width: 100%;
			height: pm(60px);
			padding: pm(10px) 0;
			border-top: 1px solid #ccc;
			display:flex;
			justify-content: space-around;
        	align-items: center;
			li{
				font-size:pm(26px);
				text-align: center;

				.iconfont{
					display: block;
					font-size:pm(28px);
				}
			}
		}
	}
	.app-active{
		color: red;
	}
}

</style>
