<template>
	<view class="page page-fill"> 
		<view class="header">
			<view v-if="userIsLogin">
				<image src="../../static/nazha.jpeg" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/default-header.png" class="face"></image>
			</view>
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">
					NEXT 学院
				</view>
				<view class="nav-info">id:25105 29233 20320</view>
			</view>
			<view v-else>
				<navigator url="../registLogin/registLogin">
					<view class="nickname regist-login">
						注册/登陆
					</view>
				</navigator>

			</view>
			<view v-if="userIsLogin" class="set-wapper">
				<image src="../../static/setting.png" class="settings"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin:false
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("me.css");
</style>
