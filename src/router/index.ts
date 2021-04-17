import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AddWidget from '../views/AddWidget.vue'
import AppsList from '../views/AppsList.vue'
import OauthCheckPage from '../components/OauthCheckPage.vue'
import TwitterAuthentication from '../components/twitter/TwitterAuth.vue'
import TwitterCallback from '../components/twitter/TwitterCallback.vue'
import WidgetGallery from '../views/WidgetGallery.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AddWidget',
    component: AddWidget,
    props: {
      message: "Add Widget"
    }
  },
  {
    path: '/appslist',
    name: 'AppList',
    component: AppsList,
    props: {
      message: "Available Apps"
    }
  },
  {
    path: '/oauth',
    name: 'Twitter',
    component: OauthCheckPage,
    props: {
      message: "Twitter"
    }
  },
  {
    path: '/twitter/auth',
    name: 'Twitter Authentication',
    component: TwitterAuthentication,
    props: {
      message: "Twitter Authentication"
    }
  },
  {
    path: '/twitter/callback',
    name: 'Twitter Callback',
    component: TwitterCallback
  },
  {
    path: '/widget-gallery',
    name: 'WidgetGallery',
    component: WidgetGallery
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
