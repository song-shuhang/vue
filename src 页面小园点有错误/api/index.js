import ajax from './ajax'
// 定义发送请求的方法

// const baseUrl= '/api'

/*  根据经纬度获取位置详情 */
export const getAddress = (latitude, longitude)=>ajax({
    url:`/position/${latitude},${longitude}`
})

/*  获取食品分类列表 */

export const getCategorys = () => ajax({
    url: '/index_category'
  })

//
export const getShops = (latitude,longitude) =>ajax ({
    url:'/shops',
    params:{
        latitude,
        longitude
    }
}) 