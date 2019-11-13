import Mock from 'mockjs'
import datas from './data.json.js'

const baseUrl = '/api' // 一开始没有拦截成功，因为人家前面都有一个/api

Mock.mock(`${baseUrl}/test`,123)//测试的

Mock.mock(`${baseUrl}/shopDatas`,{code:0,data:datas})