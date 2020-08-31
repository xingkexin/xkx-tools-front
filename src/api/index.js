import request from '@/utils/request'
import qs from 'qs'

export function getUuid() {return request({url: '/commons/uuid', method: 'get'})}
export function getUuidWithoutLine() {return request({url: '/commons/uuidWithoutLine', method: 'get'})}
export function getDateTime(data) {return request({url: '/time/datetime', method: 'post', params: data})}

// 获取网站列表
export function getWebsiteList() {return request({url: '/website/list', method: 'get'})}
