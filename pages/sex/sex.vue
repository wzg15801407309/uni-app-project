<template>
	<view class="page page-fill">
		<form @submit="submintsex">
			
			<view class="page-block" style="margin-top: 20upx;">
				<radio-group class="radio-sex" @change="radioChang">
					<label class="radio-single">
						<radio value="0" :checked="sex==0"/>女
					</label>
					<label class="radio-single">
						<radio value="1" :checked="sex==1"/>男
					</label>
				</radio-group>
			</view>
			<button type="primary" form-type="submit" class="submintbtn">提交</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sex:0
			}
		},
		methods: {
			submintsex(e){
				uni.navigateBack({
					delta:1
				})
			},
			radioChang(e){
				this.sex=e.detail.value;
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
	.radio-sex{
		display: flex;
		flex-direction: column;
	}
	.radio-single{
		padding: 20upx;
	}
	.submintbtn{
		width: 90%;
		margin-top: 40upx;
	}
</style>
