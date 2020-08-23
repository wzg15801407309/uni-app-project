
// const BASE_URL='https://www.imovietrailer.com/superhero/index/carousel/list'
const BASE_URL='https://www.imovietrailer.com/superhero/';
export const myRequest=(params)=>{
	
	// 加载中
	uni.showLoading({
		title:"加载中"
	})
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+params.url,
			method:params.method||"get",
			data:params.data||{},
			success:(res)=>{
				//根据数据的返回形式来写下面的代码
				if(res.data.status!==0)
				{
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				// 成功回调
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			},
			complete(){
				uni.hideLoading();
			}
		})
		// wx.request({
		// 	...params,
		// 	success(res){
		// 		resolve(res);
		// 	},
		// 	fail(err){
		// 		reject(err)
		// 	},
		// 	complete(){
		// 		uni.hideLoading();
		// 	}
		// })
	})
}