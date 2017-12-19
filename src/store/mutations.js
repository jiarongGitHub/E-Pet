import {ACCEPT_DOG,ACCEPT_DOGTYPE,ACCEPT_DOGTYPEDET,ACCEPT_CATEGROY,ACCEPT_ALLBRAND} from './types'
export default {
  [ACCEPT_DOG](state,{data}){
    //更新数据
    state.dogInfo=data
  },
  [ACCEPT_DOGTYPE](state,{data}){
    state.dogType=data
  },
  [ACCEPT_DOGTYPEDET](state,{data}){
    state.dogTypeDet=data
  },
  [ACCEPT_CATEGROY](state,{data}){
    state.category=data
  },
  [ACCEPT_ALLBRAND](state,{data}){
    state.allBrand=data
  }
}
