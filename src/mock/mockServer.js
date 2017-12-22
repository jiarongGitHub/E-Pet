import Mock from 'mockjs'
import home from './home.json'
import type from './type.json'
import brand from './brand.json'
import all from './all.json'


Mock.mock('/apimock/home', {code: 0, data: home})
Mock.mock('/apimock/type', {code: 0, data: type})
Mock.mock('/apimock/all', {code: 0, data: all})
Mock.mock('/apimock/brand', {code: 0, data: brand})


console.log('执行啦');
