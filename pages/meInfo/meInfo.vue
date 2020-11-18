<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom" @click="operator">
				<view class="info-words">头像</view>
				
				<view class="right-wapper">
					<image src="../../static/default-header.png" class="face"></image>
					<view class="arrow-wapper">
						<image src="../../static/right-gray.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line"></view>
			</view>
			<!-- 呢称 -->
			<view class="item-wapper face-line-upbottom" @click="modifyNickChange">
				<view class="info-words">呢称</view>
				
				<view class="right-wapper">
					<view class="gray-fields">我的测试</view>
					<view class="arrow-wapper">
						<image src="../../static/right-gray.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line"></view>
			</view>
			<!-- 生日 -->
			<view class="item-wapper face-line-upbottom" @click="modifyBirthChange">
				<view class="info-words">生日</view>
				
				<view class="right-wapper">
					<view class="gray-fields">2020-11-09</view>
					<view class="arrow-wapper">
						<image src="../../static/right-gray.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
			<view class="line-top">
				<view class="line"></view>
			</view>
			<!-- 性别 -->
			<view class="item-wapper face-line-upbottom" @click="modifySexChange">
				<view class="info-words">性别</view>
				
				<view class="right-wapper">
					<view class="gray-fields">女</view>
					<view class="arrow-wapper">
						<image src="../../static/right-gray.png" class="arrow-ico"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer-wapper">
			<view class="footer-words" @click="clearStorage">
				清楚缓存
			</view>
			<view class="footer-words" style="margin-top: 10upx;" @click="loginOut">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 修改nickname
			modifyNickChange(){
				uni.navigateTo({
					url:'../meNick/meNick'
				})
			},
			// 修改 生日日期
			modifyBirthChange(){
				uni.navigateTo({
					url:'../meBirthday/meBirthday'
				})
			},
			// 性别
			modifySexChange(){
				uni.navigateTo({
					url:'../sex/sex'
				})
			},
			operator(){
				uni.showActionSheet({
					itemList:['查看头像','从相册选择上传'],
					success(res){
						// 这里犯了一个错误就是把tapindex写错了，导致不能浏览
						var index=res.tapIndex;
						if(index==0){
							var arr=[];
							arr.push('../../static/default-header.png');
							uni.previewImage({
								urls:arr,
								current:arr[0]
							})
						}else if(index==1){
							uni.chooseImage({
								count:1,
								sizeType:['compressed'],
								sourceType:['album'],
								success(res){
									// 上传文件的零时路径
									var tempfilepath=res.tempFilePaths[0];
									uni.navigateTo({
										url:"../meFace/meFace?tempfilepath="+tempfilepath
									})
									
								}
							})
						}
					}
				})
			},
			clearStorage(){
				// 清楚所有的缓存
				// 也可以清楚某一个缓存。使用removeStorage() 加key 就可以清楚某一哥
				uni.clearStorageSync();
				uni.showToast({
					title:'清理缓存成功',
					mask:false,
					duration:1500
				})
			},
			loginOut(){
				console.log('退出登陆');
				// 正常的流程就是  要请求告知后端要退出。然后清楚数据，跳转到登陆注册页面
				// 目前我们就清楚缓存就好了
				uni.removeStorageSync('globalUser');
				uni.switchTab({
					url:'../me/me'
				})
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
