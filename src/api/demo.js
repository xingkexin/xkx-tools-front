import request from '@/utils/request'
import qs from 'qs'

// get
export function get(data) {
  return request({
    // timeout: 10000,
    url: '/url',
    method: 'get',
    params: data,
  })
}

// post
export function save(data) {
  return request({
    url: '/url',
    method: 'post',
    data: qs.stringify(data),
  })
}