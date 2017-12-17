import {reqDogInfo} from '../api'
import {ACCEPT_DOG} from './types'

export default {
  getDogInfo({commit}){
    reqDogInfo().then(response=>{
      let data=response.data
      commit(ACCEPT_DOG,{data})
      console.log('数据获取成功'+data.mall_uid);
    },response=>{
      console.log('获取数据失败');
    })
  }
}
