<template>
	<view class="page">
		<view class="search-block">
			<view class="search-icon-wapper">
				<image src="../../static/tabbar/icon-search-active.png" class="search-icon"></image>
			</view>
			<input class='search-text' maxlength="10" type="text" value="" placeholder="搜索预告片" />
		</view>
		<view class="movie-list page-block">
			<view v-for="(item ,index) in arrayList"  :key="index" class="movie-wapper">
				<image :src="item.coverurl" class="poster"></image>
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
						{
							coverurl:'https://www.yugaopian.cn/files/mpic/201906/p28382.jpg?4442',
							title:'1/2的魔法 Onward',
							baseInfo:'类型：美国 / 喜剧 / 动画 / 奇幻 / 冒险',
							reseaseInfo:'上映：2020-08-19(中国大陆))'
						},
						{
							coverurl:'https://www.yugaopian.cn/files/mpic/197001/p24904.jpg?0123',
							title:'1/2的魔法 Onward',
							baseInfo:'类型：美国 / 喜剧 / 动画 / 奇幻 / 冒险',
							reseaseInfo:'上映：2020-08-19(中国大陆))'
						},
						{
							coverurl:'https://www.yugaopian.cn/files/mpic/202001/p29338.jpg?3317',
							title:'1/2的魔法 Onward',
							baseInfo:'类型：美国 / 喜剧 / 动画 / 奇幻 / 冒险',
							reseaseInfo:'上映：2020-08-19(中国大陆))'
						},
						{
							coverurl:'https://www.yugaopian.cn/files/mpic/201911/p29183.jpg?5722',
							title:'1/2的魔法 Onward',
							baseInfo:'类型：美国 / 喜剧 / 动画 / 奇幻 / 冒险',
							reseaseInfo:'上映：2020-08-19(中国大陆))'
						},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("search.css");
</style>
