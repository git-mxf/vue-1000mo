<template>
	<div class="person">

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


</style>