<template>
	<view class="black">
		<image :src="cover" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cover:""
			}
		},
		onLoad(params){
			// 获取页面传过来的值
			console.log(params)
			this.cover=params.cover
			// 通过api的值来修改导航栏的值
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:'#000000'
			})
		},
	}
</script>

<style>
.black{
	background-color: #000000;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
