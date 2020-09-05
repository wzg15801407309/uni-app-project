<template>
	<view class="page">
		<view class="search-block">
			<view class="search-icon-wapper">
				<image src="../../static/tabbar/icon-search-active.png" class="search-icon"></image>
			</view>
			<input  class='search-text' 
					maxlength="10" 
					placeholder="搜索预告片" 
					confirm-type="search" 
					@confirm="searchMe"/>
		</view>
		<view class="movie-list page-block">
			<view v-for="(item ,index) in arrayList"  :key="index" class="movie-wapper">
				<image :src="item.coverurl" :data-trailId='item.id' @click="showTrail" class="poster"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrayList:[
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/201906/p28400.jpg?3904',
						id:1
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/202006/p30025.jpg?4123',
						id:2
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/202001/p29373.jpg?0134',
						id:3
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/201906/p28319.jpg?4435',
						id:4
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/201906/p28382.jpg?4442',
						id:5
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/197001/p24904.jpg?0123',
						id:6
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/202001/p29338.jpg?3317',
						id:7
					},
					{
						coverurl:'https://www.yugaopian.cn/files/mpic/201911/p29183.jpg?5722',
						id:8
					},
				],
				keywords:"",
				page:1,
				totalPages:1
			}
		},
		methods: {
			showTrail(e){
				var trailId=e.currentTarget.dataset.trailid;
				console.log(trailId);
				// 页面跳转
				uni.navigateTo({
					url:'../move/move?trailId'+trailId
				})
			},
			// 分页设置
			pagedTrailerList(words,page,pagesize){
				// 获取分页的数据
				this.arrayList.reverse();
			},
			
			searchMe(e){
				let me=this;
				let value=e.detail.value;
				me.keywords=value;
				this.pagedTrailerList();				
			}
		},
		onReachBottom(){
		// 处理到页面底部时 在这个函数里处理分页加载	
		}
	}
</script>

<style>
	@import url("search.css");
</style>
