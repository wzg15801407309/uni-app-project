<template name='trailerStars' >
	<view class="move-score-wapper">
		<view>
			<image v-for="item in yelloScore" src="../../static/icon/xingxing-active.png" class="star-ico"></image>
			<!-- <image src="../../static/icon/xingxing-active.png" class="star-ico"></image>
			<image src="../../static/icon/xingxing-active.png" class="star-ico"></image>
			<image src="../../static/icon/xingxing-active.png" class="star-ico"></image> -->
			<image v-for="item in grayScore" src="../../static/icon/xingxing.png" class="star-ico"></image>
		</view>
		<view class="move-score" v-if="showNum>0">{{ innerScore }}</view>
	</view>
</template>

<script>
	export default {
		name:'trailerStars',
		props:{
			innerScore:{
				type:Number,
				default:0
			},
			showNum:{
				type:Number,
				default:0
			},
		},
		
		data() {
			return {
				yelloScore:0,
				grayScore:0,
			};
		},
		created(){
		 	let tempScore=this.innerScore;
			this.yelloScore=parseInt(tempScore/2);
			this.grayScore=5-this.yelloScore;
		}
	}
</script>

<style>
	.move-score-wapper{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.star-ico{
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;
	}
	.move-score{
		font-size: 12px;
		color: gray;
	}
</style>
