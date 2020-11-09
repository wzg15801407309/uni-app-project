<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<!-- 头像 -->
			<view class="item-wapper face-line-upbottom">
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
			<view class="item-wapper face-line-upbottom">
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
			<view class="item-wapper face-line-upbottom">
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
			<view class="item-wapper face-line-upbottom">
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
			<view class="footer-words" style="margin-top: 10upx;">
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
			clearStorage(){
				// 清楚所有的缓存
				// 也可以清楚某一个缓存。使用removeStorage() 加key 就可以清楚某一哥
				uni.clearStorageSync();
				uni.showToast({
					title:'清理缓存成功',
					mask:false,
					duration:1500
				})
			}
		}
	}
</script>

<style>
	@import url("meInfo.css");
</style>
