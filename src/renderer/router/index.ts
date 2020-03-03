import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'tray-page',
      component: () => import(/* webpackChunkName: "tray" */ '@/pages/TrayPage.vue')
    },
    {
      path: '/rename-page',
      name: 'rename-page',
      component: () => import(/* webpackChunkName: "RenamePage" */ '@/pages/RenamePage.vue')
    },
    {
      path: '/mini-page',
      name: 'mini-page',
      component: () => import(/* webpackChunkName: "MiniPage" */ '@/pages/MiniPage.vue')
    },
    {
      path: '/setting',
      name: 'setting-page',
      component: () => import(/* webpackChunkName: "SettingPage" */ '@/layouts/SettingPage.vue'),
      children: [
        {
          path: 'datainput',
          component: () => import(/* webpackChunkName: "DataInput" */ '@/pages/ospages/DataInput.vue'),
          name: 'datainput'
        },
        {
          path: 'manuallabel',
          component: () => import(/* webpackChunkName: "ManualLabel" */ '@/pages/ospages/ManualLabel.vue'),
          name: 'manuallabel'
        },
        {
          path: 'calludetect',
          component: () => import(/* webpackChunkName: "CalluDetect" */ '@/pages/localdetect/CalluDetect.vue'),
          name: 'calludetect'
        },
        {
          path: 'dataconfig',
          component: () => import(/* webpackChunkName: "DataConfig" */ '@/pages/ospages/DataConfig.vue'),
          name: 'dataconfig'
        },
        {
          path: 'testdb',
          component: () => import(/* webpackChunkName: "TestDB" */ '@/pages/ospages/TestDB.vue'),
          name: 'testdb'
        },
        {
          path: 'upload',
          component: () => import(/* webpackChunkName: "Upload" */ '@/pages/Upload.vue'),
          name: 'upload'
        },
        {
          path: 'weibo',
          component: () => import(/* webpackChunkName: "Weibo" */ '@/pages/picbeds/Weibo.vue'),
          name: 'weibo'
        },
        {
          path: 'qiniu',
          component: () => import(/* webpackChunkName: "Qiniu" */ '@/pages/picbeds/Qiniu.vue'),
          name: 'qiniu'
        },
        {
          path: 'tcyun',
          component: () => import(/* webpackChunkName: "TcYun" */ '@/pages/picbeds/TcYun.vue'),
          name: 'tcyun'
        },
        {
          path: 'upyun',
          component: () => import(/* webpackChunkName: "UpYun" */ '@/pages/picbeds/UpYun.vue'),
          name: 'upyun'
        },
        {
          path: 'github',
          component: () => import(/* webpackChunkName: "GitHub" */ '@/pages/picbeds/GitHub.vue'),
          name: 'github'
        },
        {
          path: 'smms',
          component: () => import(/* webpackChunkName: "SMMS" */ '@/pages/picbeds/SMMS.vue'),
          name: 'smms'
        },
        {
          path: 'aliyun',
          component: () => import(/* webpackChunkName: "AliYun" */ '@/pages/picbeds/AliYun.vue'),
          name: 'aliyun'
        },
        {
          path: 'imgur',
          component: () => import(/* webpackChunkName: "Imgur" */ '@/pages/picbeds/Imgur.vue'),
          name: 'imgur'
        },
        {
          path: 'others/:type',
          component: () => import(/* webpackChunkName: "Other" */ '@/pages/picbeds/Others.vue'),
          name: 'others'
        },
        {
          path: 'gallery',
          component: () => import(/* webpackChunkName: "Gallery" */ '@/pages/Gallery.vue'),
          name: 'gallery',
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'setting',
          component: () => import(/* webpackChunkName: "setting" */ '@/pages/PicGoSetting.vue'),
          name: 'setting'
        },
        {
          path: 'plugin',
          component: () => import(/* webpackChunkName: "Plugin" */ '@/pages/Plugin.vue'),
          name: 'plugin'
        },
        {
          path: 'shortKey',
          component: () => import(/* webpackChunkName: "ShortkeyPage" */ '@/pages/ShortKey.vue'),
          name: 'shortKey'
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
