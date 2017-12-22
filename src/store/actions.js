import {ACCEPT_DOG,ACCEPT_DOGTYPE,ACCEPT_DOGTYPEDET,ACCEPT_CATEGROY,ACCEPT_ALLBRAND} from './types'
import axios from 'axios'

export default {
  getDogInfo({commit}){
    axios.get('/apimock/home').then(response=>{
      let data=response.data.data
      commit(ACCEPT_DOG,{data})
      console.log('数据获取成功'+data.menus);
    },response=>{
      console.log('获取数据失败');
    })
  },
  reqDogType({commit}){
    let url='/apimock/type'
    axios.get(`${url}`)
      .then(response=>{
        let data=response.data.data
        commit(ACCEPT_DOGTYPE,{data})
      },response=>{
        console.log('error');
      })
  },
  reqDogTypeDet({commit},typeId){
    let url='/apie/v3/goods/category/main.html?'
    axios.get(`${url}do=getChildren&owner=${typeId}&pet_type=dog&system=wap&isWeb=1&version=303`)
      .then(response=>{
        let data=response.data
        commit(ACCEPT_DOGTYPEDET,{data})
      },response=>{
        console.log('error');
      })
  },
  reqCategroy({commit}){
    let url='/apimock/brand'
    axios.get(`${url}`)
      .then(response=>{
        let data=response.data.data
        commit(ACCEPT_CATEGROY,{data})
      },response=>{
        console.log('error');
      })
  },
  reqAllBrand({commit},callback){
    let url='/apimock/all'
    axios.get(`${url}`)
      .then(response=>{
        let data=response.data.data
        commit(ACCEPT_ALLBRAND,{data})
        callback&&callback()
      },response=>{
        console.log('error');
      })
  }
}
