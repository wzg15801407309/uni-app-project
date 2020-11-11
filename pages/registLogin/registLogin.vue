<template>
	<view class="body">
		<form @submit="formSubmit" >
			<view class="face-wapper">
				<image src="../../static/default-header.png" class="face"></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name='username' type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"></input>
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name='password' type="text" password="true" value="" class="input" placeholder="请输入密码" placeholder-class="graywords"></input>
			</view>
			<button type="primary" form-type="submit" style="margin-top: 60upx; width: 90%;">注册/登陆</button>
		</form>
		<!-- 第三方登陆 -->
		<!-- 如果不是H5平台就可以有第三方登陆 -->
		<!-- #ifndef H5 -->
			<view class="third-wapper">
				<view class="third-line">
					<view class="single-line">
						<view class="line"></view>
					</view>
					<view class="third-words">第三方登陆</view>
					<view class="single-line">
						<view class="line"></view>
					</view>
				</view>
				

				
				<view class="third-icos-wapper">
					<!-- #ifdef APP-PLUS -->
						<image src="../../static/QQ.png" class="third-ico"></image>
						<image src="../../static/微博.png" class="third-ico"></image>
						<image src="../../static/微信.png" class="third-ico"></image>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
						<button open-type="getUserInfo" @getuserinfo="wxLogin" class="third-btn-ico"></button>
					<!-- #endif -->
				</view>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 实现在微信小程序端的微信登陆
			wxLogin(e){
				console.log(e,'%%%%%%%');
				// 这个方式可以获取到用户的微信的信息  (通过微信开发能力)
				var wx_userinfo=e.detail.userInfo;
			},
			formSubmit(e){
				var me=this
				var password=e.detail.value.password;
				var username=e.detail.value.username;
				if(password =='123456' && username=='admin'){
					// 登陆成功  数据缓存
					uni.setStorageSync('globalUser',{username:'admin',userID:'12345677890'});
					// 切换到我的页面
					uni.switchTab({
						url:'../me/me'
					})
				}else{
					console.log('账号不匹配，请输入账号：‘admin’,密码：‘123456’');
				}
				// 接口对接  （发送请求，没有就是注册有就是登陆）
				 // var serveUrl=me.serverUrl;
				 // uni.request({
				 // 	url:serveUrl+'user/registOrLogin',
					// data:{
					// 	'username':username,
					// 	'password':password
					// },
					// method:post,
					// success:(res)=>{
					// 	if(res.data.status==200){
					// 		console.log('成功')
					// 	}
					// }
				 // })
			}
		}
	}
</script>

<style>
@import url("registLogin.css");
</style>
