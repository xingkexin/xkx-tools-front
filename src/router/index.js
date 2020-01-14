import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Website from '@/components/Website'
import Base64 from '@/components/Base64'
import URL from '@/components/URL'
import MD5 from '@/components/MD5'
import SHA from '@/components/SHA'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Website',
    component: Website
  }, {
    path: '/base64',
    name: 'Base64',
    component: Base64
  }, {
    path: '/url',
    name: 'URL',
    component: URL
  }, {
    path: '/md5',
    name: 'MD5',
    component: MD5
  }, {
    path: '/sha',
    name: 'SHA',
    component: SHA
  }]
})
