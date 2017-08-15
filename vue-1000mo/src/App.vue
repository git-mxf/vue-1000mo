<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
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

<style lang="scss">
$ui-width: 640px;
@function pm($px) {
    @return $px/$ui-width*6.4rem;
}

body,html,h1,h2,h3,h4,h5,h6,ol,ul,li,div,p,input,img,dl,dt,dd,figure,figcaption{
	margin: 0;
	padding: 0;
}
body,html{
	width: 100%;
	height: 100%;
	font-size: pm(12px);
	color: #333;
}
ol,ul{
	list-style: none;
}
a{
	text-decoration: none;
	color: #333;
}
img{
	display: block;
}
input{
	outline: none;
}
h1,h2,h3,h4,h5,h6{
	font-weight: none;
}
em,i,b{
	font-style: normal;
}
#app{
	height: 100%;
	background: #eee;
	section{
		height: 100%;
		background: #eee;
	}
}

</style>
