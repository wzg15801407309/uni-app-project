<template>
	<view>
		<!-- 详情页面 -->
		<!-- 视频播放 -->
		<view class="player">
			<video 
				poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"
				src='https://vfx.mtime.cn/Video/2020/08/25/mp4/200825102345709890_1080.mp4'
				controls
				class="movie"
				>
			</video>
			
		</view>
		<view class="movie-info">
			<navigator url="../cover/cover?cover=https://www.yugaopian.cn/files/mpic/201906/p28400.jpg?3904">
				<image src="https://www.yugaopian.cn/files/mpic/201906/p28400.jpg?3904" class="movie-cover"></image>
			</navigator>
			<view class="movie-desc">
				<view class="title">影片的名称</view>
				<view class="basic-info">影片的简绍</view>
				<view class="basic-info">影片的原名</view>
				<view class="basic-info">影片的时长</view>
				<view class="basic-info">影片的上映时间</view>
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分:</view>
						<view class="movie-score">8.2</view>
					</view>
					<view class="big-stars">
						<trailerStars  :innerScore='8.6'  />
						<view class="prise-counts">2890 人点赞</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="line-wapper">
			<view class="line"></view>
		</view>
		<!-- 剧情简绍 -->
		<view class="plots-block">
			<view class="plots-title">剧情简绍</view>
			<view class="plots-desc">
				世界存亡危在旦夕，“信条”一词是惟一的线索与武器。主人公穿梭于全球各地，开展特工活动，力求揭示“信条”之谜，并完成一项超越了真实时间的神秘任务。这项任务并非时间之旅，而是【时空逆转】
			</view>
		</view>
		<!-- 演职人员 -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>
			<scroll-view scroll-x class="scroll-list" >
				<view class="actor-waper" v-for="(img,index) in plotpics" >
					<image 	:src="img"
							class="single-actor" 
							mode="aspectFill"
							:data-imgIndex='index'
							@click="lookeMe"></image>
					<view class="actor-name">演员姓名</view>
					<view class="actor-role">演员角色</view>
				</view>
			</scroll-view>
		</view>
		<!-- 剧照 -->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x class="scroll-list" >
				<image v-for="(img,index) in plotpics" 
						:src="img"
						class="plot-image" 
						mode="aspectFill"
						:data-imgIndex='index'
						@click="lookeMe"></image>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	
	import trailerStars from '../../components/trailerStars/trailerStars.vue'
	export default {
		
		data() {
			return {
				// 剧照数据
				plotpics:[
					'https://www.yugaopian.cn/files/mpic/201906/p28400.jpg?3904',
					'https://www.yugaopian.cn/files/mpic/202006/p30025.jpg?4123',
					'https://www.yugaopian.cn/files/mpic/202001/p29373.jpg?0134',
					'https://www.yugaopian.cn/files/mpic/201906/p28319.jpg?4435',
					'https://www.yugaopian.cn/files/mpic/201906/p28400.jpg?3904',
					'https://www.yugaopian.cn/files/mpic/202006/p30025.jpg?4123',
					'https://www.yugaopian.cn/files/mpic/202001/p29373.jpg?0134',
					'https://www.yugaopian.cn/files/mpic/201906/p28319.jpg?4435',],
				// 导演
				directorarray:[],
				// 演员
				actorarray:[]
				
			}
		},
		methods: {
			
		},
		onLoad(params){
			// 获取页面传过来的值
			// console.log(params)
			
			// 通过api的值来修改导航栏的值
			uni.setNavigationBarColor({
				frontColor:"#ffffff",
				backgroundColor:'#000000'
			})
		},
		methods:{
			lookeMe(e){
				var me=this;
				var index=e.currentTarget.dataset.imgindex;
				uni.previewImage({
					current:me.plotpics[index],
					urls:me.plotpics
				})
			}
		},
		components:{
			trailerStars
		},
	}
</script>

<style>
@import url("movie.css");
</style>
