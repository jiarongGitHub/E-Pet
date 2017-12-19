import {ACCEPT_DOG,ACCEPT_DOGTYPE,ACCEPT_DOGTYPEDET,ACCEPT_CATEGROY,ACCEPT_ALLBRAND} from './types'
import axios from 'axios'

export default {
  getDogInfo({commit}){
    let url= '/api1/v3/index/main.html?'
    axios.get(`${url}pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1513390301942`).then(response=>{
      let data=response.data
      commit(ACCEPT_DOG,{data})
      console.log('数据获取成功'+data.mall_uid);
    },response=>{
      console.log('获取数据失败');
    })
  },
  reqDogType({commit}){
    let url='/api1//v3/goods/category/main.html?'
    axios.get(`${url}pet_type=dog&system=wap&isWeb=1&version=303&_=1513561216893`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_DOGTYPE,{data})
      },response=>{
        console.log('error');
      })
  },
  reqDogTypeDet({commit},typeId){
    let url='/api1/v3/goods/category/main.html?'
    axios.get(`${url}do=getChildren&owner=${typeId}&pet_type=dog&system=wap&isWeb=1&version=303`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_DOGTYPEDET,{data})
      },response=>{
        console.log('error');
      })
  },
  reqCategroy({commit}){
    let url='/api1/v3/brand/list/main.html?'
    axios.get(`${url}pet_type=dog&system=wap&isWeb=1&version=303&_=1513600812850`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_CATEGROY,{data})
      },response=>{
        console.log('error');
      })
  },
  reqAllBrand({commit},callback){
    let url='/api1/v3/brand/list/main.html?'
    axios.get(`${url}do=getall&system=wap&isWeb=1&version=303&_=1513649308714`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_ALLBRAND,{data})
        callback&&callback()
      },response=>{
        console.log('error');
      })
  }
}
