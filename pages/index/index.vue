<template>
	<view class="page">
	<!-- 轮播图 start -->
	<!-- 服务器获取数据和界面联合的使用方式 -->
	<!-- <swiper :indicator-dots="true" :autoplay="true" class="carsoual">
		<swiper-item v-for='(item index) in swiperList' key=index''>
			<image :src="item.url" class="carsoual"></image>
		</swiper-item>
	</swiper> -->
	<swiper :indicator-dots="true" :autoplay="true" class="carsoual">
		<swiper-item>
			<image src="../../static/swper/swiper-1.jpeg" class="carsoual"></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/swper/swiper-2.jpeg" class="carsoual"></image>
		</swiper-item>
		<swiper-item>
			<image src="../../static/swper/swiper-3.jpeg" class="carsoual"></image>
		</swiper-item>
	</swiper>
	<!-- 轮播图  end -->
	<!-- 热门电影 start -->
	<view class="page-block super-hot">
		<view class="hot-title-wapper">
			<image src="../../static/icon/hot.png" class="hot-ico"></image>
			<view class="hot-title">热门电影</view>
		</view>
		
	</view>
	<scroll-view scroll-x="true"  class="hot">
		<view class="single-posters" v-for='index in hotlist' :key='index'>
			<view class="poster-wapper">
				<image v-if="index%3==0" src="../../static/hot/hot-01.jpeg" class="poster"></image>
				<image v-if="index%3==1" src="../../static/hot/hot-02.jpg" class="poster"></image>
				<image v-if="index%3==2" src="../../static/hot/hot-03.jpeg" class="poster"></image>
				<view class="move-name">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</view>
				<trailerStars  :innerScore='8.6' :showNum='1' />
			</view>
		</view>
		
	</scroll-view>
	<!-- 热门超英 end  -->
	<!-- 热门预告 start -->
	<view class="page-block super-hot">
		<view class="hot-title-wapper">
			<image src="../../static/icon/trailer.png" class="hot-ico"></image>
			<view class="hot-title">热门预告</view>
		</view>
	</view>
	<view class="hot-movies page-block">
		<video v-for="trailer in hotTrailerList" 
		poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png"
		src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4" controls
		class="hot-movies-single">
		</video>
	</view>
	<!-- 热门预告 end  -->
	<!-- 猜你喜欢 start -->
	<view class="page-block super-hot">
		<view class="hot-title-wapper">
			<image src="../../static/icon/cainixihuan.png" class="hot-ico"></image>
			<view class="hot-title">猜你喜欢</view>
		</view>
	</view>
	<view class="guess-u-likes page-block">
		<view class="single-like-movie" v-for="(item,index) in likeList" :key='index'>
			<image :src="item.coverurl" class="like-movie"></image>
			<view class="movie-desc">
				<view class="movie-title">{{ item.title }}</view>
				<trailerStars  :innerScore='8.6'  />
				<view class="movie-info">{{ item.baseInfo }}</view>
				<view class="movie-info">{{ item.reseaseInfo }}</view>
			</view>
			<view class="movie-oper" :data-index="index" @click="praiseMe">
				<image src="../../static/icon/dianzan1.png" class="praise-ico"></image>
				<view class="praise-me">点赞</view>
				<view :animation="animationDataArr[index]" class="praise-me animation-opacity"> +1</view>
			</view>
		</view>
	</view>
	<!-- 猜你喜欢 end  -->
	</view>
</template>

<script>
	import trailerStars from '../../components/trailerStars/trailerStars.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				swiperList:[],
				// hot 数据 应该是数组
				hotlist:12,
				
				trailerList:[],
				hotTrailerList:2,
				
				animationData:{},
				animationDataArr:[{},{},{},{}],
				likeList:[
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/201906/p28400.jpg?3904',
						title:'魔发精灵2 Trolls World Tour',
						baseInfo:'类型：美国 / 动画 / 歌舞 / 奇幻 / 冒险',
						reseaseInfo:'上映：2020-08-21(中国大陆)'
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/202006/p30025.jpg?4123',
						title:'新神榜：哪吒重生',
						baseInfo:'类型：中国大陆 / 动作 / 动画 / 奇幻',
						reseaseInfo:'上映：2020-08(中国大陆)'
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/202001/p29373.jpg?0134',
						title:'赤狐书生',
						baseInfo:'类型：中国大陆 / 喜剧 / 奇幻 / 古装',
						reseaseInfo:'上映：2020-11(中国大陆)'
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/201906/p28319.jpg?4435',
						title:'1/2的魔法 Onward',
						baseInfo:'类型：美国 / 喜剧 / 动画 / 奇幻 / 冒险',
						reseaseInfo:'上映：2020-08-19(中国大陆))'
					},
				]
			}
		},
		onLoad() {
			 // 数据的加载  （知识写出数据的调用方式，这里的接口不能用）
			 // this.$Http({})
			// this.$Http({ url:'',method:'get',data:{}}).then(res=>{
			// 	console.log(res);
			// })
			// 页面创建的时候创建动画临时动画的动画对象
			// 使用默认数据  api可查   
			// #ifdef APP-PLUS || MP-WEIXIN
				this.animation=uni.createAnimation()
			// #endif
		},
		onUnload(){
			// 页面卸载的时候  清除动画
			this.animation={};
			this.animationDataArr={};
		},
		
		methods: {
			// 实现点赞动画效果
			praiseMe(e){
				// #ifdef APP-PLUS || MP-WEIXIN
				// 获取自定义的属性值 z知道当前点击的是哪一个
				let index= e.currentTarget.dataset.index;
				console.log('动画在h5中是实现不了的')
				// 构建动画数据  通过step 表示动画完成  
				this.animation.translateY(-60).opacity(1).step({
					duration:400
				});
				// 导出动画
				// this.animationData=this.animation.export();
				this.animationData=this.animation;
				this.animationDataArr[index]=this.animationData.export();
				// 还原动画
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({
						duration:0
					});
					// this.animationData=this.animation.export();
					this.animationData=this.animation;
					this.animationDataArr[index]=this.animationData.export();
				}.bind(this),500)
			// #endif
			}
		},
		components:{
			trailerStars
		},
		onPullDownRefresh() {
			// 颠倒数组的顺序
			this.likeList.reverse();
			setTimeout(()=>{
				uni.stopPullDownRefresh();
			},1000);
			
		}
	}
</script>

<style>
@import url("index.css");
</style>
