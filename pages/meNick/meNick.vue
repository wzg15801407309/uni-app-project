<template>
	<view class="page page-fill">
		<form @submit="submitNickName">
			
			<view class="page-block" style="margin-top: 20upx;">
				<input type="text" value="" class="input" 
					   placeholder="请输入呢称" placeholder-class="graywords" 
					   maxlength="10" name='nickname'/>
			</view>
			<button type="primary" form-type="submit" class="submintbtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return { }
		},
		methods:{
			submitNickName(e){
				// input的
				var value=e.detail.value.nickname
				// 提交服务器
				// 返回到上一个界面
				uni.navigateBack({
					delta:1
				})
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
	.graywords{
		color: #EAEAEA;
	}
	.input{
		height: 80upx;
		line-height: 80upx;
		width: 500upx;
		margin-left: 40upx;
	}
	.submintbtn{
		width: 90%;
		margin-top: 40upx;
	}
</style>
