<template>
	<view class="page page-fill">
		<form @submit="submitBirth">
			
			<view class="page-block" style="margin-top: 20upx;">
				<picker mode="date" @change="dateChang">
					<view class="birthday">{{ birthday }}</view>
				</picker>
			</view>
			<button type="primary" form-type="submit" class="submitBirth">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				birthday:'2020-11-18'
			}
		},
		methods: {
			submitBirth(e){
				var value=this.birthday;
				uni.navigateBack({
					delta:1
				})
			},
			dateChang(e){
				this.birthday=e.detail.value;
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
	.submintbtn{
		width: 90%;
		margin-top: 40upx;
	}
</style>
