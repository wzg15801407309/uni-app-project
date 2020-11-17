<template>
	<view class="page page-fill">
		<view class="pending-wapper">
			<!-- <image src="../../static/swper/swiper-1.jpeg" class="pending-face" mode="scaleToFill"></image> -->
			<image :src="tempfilepath" class="pending-face" mode="scaleToFill"></image>
		</view>
		<view class="notice">
			<view class="notice-words">
				*请从相册中选择等比宽高的图片噢～
			</view>
		</view>
		<view class="footer-opertor">
			<view class="opertor-words" @click="changePendingFace">
				重新选择
			</view>
			<view class="opertor-words" @click="upload">
				确认上传
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempfilepath:''
			}
		},
		onLoad(params){
			var tempfilepath=params.tempfilepath;
			this.tempfilepath=tempfilepath;
		},
		methods: {
			// 重新上传
			changePendingFace(){
				var me=this;
				uni.chooseImage({
					count:1,
					sizeType:['compressed'],
					sourceType:['album'],
					success(res){
						// 上传文件的零时路径
						var tempfilepath=res.tempFilePaths[0];
						me.tempfilepath=tempfilepath;
					}
				})
			},
			// 确定上传
			upload(){
				var me=this;
				uni.showLoading({
					mask:true,
					title:'上传中，请稍后...'
				});
				setTimeout(function(){
					uni.hideLoading();
					// 返回上个页面
					uni.navigateBack({
						delta:1
					})
				},20000);
				// 上传的文件的方法
				// uni.uploadFile({
				// 	url:me.serverUrl+'/user/uploadFace?userId='+'用户的id',
				// 	filePath:me.tempfilepath,
				// 	// 上传的文件名是后端规定的 file
				// 	name:'file',
				// 	success(res){
				// 		var resData=res.data;
				// 		console.log(resData);
				// 		得到数据做数据处理
				// 	},
				// 	complete(){
				// 		uni.hideLoading();
				// 	}
				// })
			}
		}
	}
</script>

<style>
	@import url("meFace.css");
</style>
