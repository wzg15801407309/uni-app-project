<template>
	<view class="page page-fill">
		<form @submit="submitBirth">
			
			<view class="page-block" style="margin-top: 20upx;">
				<!-- <picker mode="date" :range="" @change=""> -->
				<picker mode="date" >
					<view>{{}}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="submintbtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			submitBirth(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	.page-fill{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.birth-input{
		background-color: white;
		height: 80upx;
		line-height: 80upx;
		padding-left: 20upx;
	}
	.birthday{
		background-color: white;
		height: 80upx;
		padding-left: 20upx;
		padding-top: 30upx;
	}
</style>
