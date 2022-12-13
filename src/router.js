import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import WebNavbar from './components/WebNavbar.vue'
import WebFooter from './components/WebFooter.vue'

import KnowHome from './views/home/KnowHome.vue'

import MajorList from './views/major/MajorList.vue'
import SearchCourseware from './views/major/SearchCourseware.vue'

import OrganizationList from './views/major/OrganizationList.vue'
import SearchMarket from './views/market/SearchMarket.vue'

import UserProfile from './views/profile/UserProfile.vue'

export default new Router({
  routes: [
    {
      path: '/', name: 'hall',
      components: { navbar: WebNavbar, default: KnowHome, footer: WebFooter }
    },

    {
      path: '/major', name: 'hall',
      components: { navbar: WebNavbar, default: MajorList, footer: WebFooter }
    },
    {
      path: '/course', name: 'hall',
      components: { navbar: WebNavbar, default: SearchCourseware, footer: WebFooter }
    },

    {
      path: '/org', name: 'hall',
      components: { navbar: WebNavbar, default: OrganizationList, footer: WebFooter }
    },
    {
      path: '/market', name: 'hall',
      components: { navbar: WebNavbar, default: SearchMarket, footer: WebFooter }
    },

    {
      path: '/profile', name: 'hall',
      components: { navbar: WebNavbar, default: UserProfile, footer: WebFooter }
    }
  ],
  mode: 'history'
})