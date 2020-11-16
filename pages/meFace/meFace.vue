<template>
	<view class="page page-fill">
		<view class="pending-wapper">
			<image src="../../static/swper/swiper-1.jpeg" class="pending-face" mode="scaleToFill"></image>
		</view>
		<view class="notice">
			<view class="notice-words">
				*请从相册中选择等比宽高的图片噢～
			</view>
		</view>
		<view class="footer-opertor">
			<view class="opertor-words" @click="">
				重新选择
			</view>
			<view class="opertor-words" @click="">
				确认上传
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
			
		}
	}
</script>

<style>
	@import url("meFace.css");
</style>
