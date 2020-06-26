import request from '@/utils/request'
import qs from 'qs'

// 获取网站列表
export function getWebsiteList() {
  return request({
    url: '/website/list',
    method: 'get',
  })
}