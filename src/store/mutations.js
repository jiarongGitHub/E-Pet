import {ACCEPT_DOG} from './types'
export default {
  [ACCEPT_DOG](state,{data}){
    //更新数据
    state.dogInfo=data
  }
}
