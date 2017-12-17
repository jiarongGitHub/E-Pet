import axios from 'axios'

export function reqDogInfo() {
  let url= '/api/v3/index/main.html?'
  return axios.get(`${url}pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1513390301942`)
}
