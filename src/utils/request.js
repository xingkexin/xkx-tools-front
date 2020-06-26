import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

const baseURL = process.env.VUE_APP_BASE_API || ''

// create an axios instance
const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // console.log(config)
    // console.log(config.headers.post['Content-Type'])
    // if(config.method == 'post' && config.headers.post['Content-Type'] == 'application/x-www-form-urlencoded') {
    //   console.log(config.data)
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // if(process.env.NODE_ENV == 'development') console.log(response)
    let res = response.data
    if(res.complaintsInfos != null) {
      let page = JSON.parse(res.complaintsInfos)
      page.list = page.datas
      page.total = page.total

      res.data = page
    }else if(null == res.statusCode && res.json){
      // 企业查询接口
      let page = JSON.parse(res.json)
      page.list = page.datas
      page.total = page.total
      // page.pages = page.pages
      res = {}
      res.statusCode = page.return_code
      res.message = ''
      res.data = page
    }else if(null == res.statusCode && res.supplierQual){
      // 企业资质联想接口
      let page = JSON.parse(res.supplierQual)
      page.list = page.datas
      res = {}
      res.statusCode = page.return_code
      res.message = ''
      res.data = page
    }else if(null == res.statusCode) {
      // 其他情况，直接返回给业务层
      return res
    }
    // if(process.env.NODE_ENV == 'development') console.log(res)

    // if the custom code is not 20000, it is judged as an error.
    if (res.statusCode !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 401:用户未登录
      if (res.statusCode === 401) {
        // to re-login
        MessageBox.confirm('您的登录信息已失效!', '登录失效', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          location.href = '/html/2.0/Login.html'
        })
      }
      // return Promise.reject(new Error(res.message || 'Error'))
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: '网络异常，请稍后重试！',
      type: 'error',
      duration: 5 * 1000
    })
    return null
  }
)

export default service
