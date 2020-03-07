import Vue from 'vue'
import Router from 'vue-router'
// import Website from '@/components/Website'
// import Base64 from '@/components/Base64'
// import URL from '@/components/URL'
// import MD5 from '@/components/MD5'
// const SHA = () => require('@/components/SHA')

const Website = r => require.ensure([], () => r(require('@/views/website')), 'Website')
const Tools = r => require.ensure([], () => r(require('@/views/tools')), 'Tools')
const Designer = r => require.ensure([], () => r(require('@/views/designer')), 'Designer')
const Base64 = r => require.ensure([], () => r(require('@/views/tools/Base64')), 'Base64')
const URL = r => require.ensure([], () => r(require('@/views/tools/URL')), 'URL')
const MD5 = r => require.ensure([], () => r(require('@/views/tools/MD5')), 'MD5')
const SHA = r => require.ensure([], () => r(require('@/views/tools/SHA')), 'SHA')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Website
  }, {
    path: '/tools',
    component: Tools,
    children: [{
      path: '',
      redirect: 'base64'
    }, {
      path: 'base64',
      component: Base64
    }, {
      path: 'url',
      component: URL
    }, {
      path: 'md5',
      component: MD5
    }, {
      path: 'sha',
      component: SHA
    }]
  }, {
    path: '/designer',
    component: Designer
  }]
})
