import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/resume'
import page02 from '@/components/page02'
import experience from '@/components/webdeign'
import page03 from '@/components/appdesign'
import page04 from '@/components/page04'
import po001 from '@/components/portfolio/po001'
import po002 from '@/components/portfolio/po002'
import po003 from '@/components/portfolio/po003'
import po004 from '@/components/portfolio/po004'
import po005 from '@/components/portfolio/po005'
import po006 from '@/components/portfolio/po006'
import po007 from '@/components/portfolio/po007'
import po008 from '@/components/portfolio/po008'
import po009 from '@/components/portfolio/po009'
import po0010 from '@/components/portfolio/po0010'
import po0011 from '@/components/portfolio/po0011'
import po0012 from '@/components/portfolio/po0012'
import po0013 from '@/components/portfolio/po0013'
import po0014 from '@/components/portfolio/po0014'
import po0015 from '@/components/portfolio/po0015'
import po0016 from '@/components/portfolio/po0016'
import po0017 from '@/components/portfolio/po0017'
import po0018 from '@/components/portfolio/po0018'
import po0019 from '@/components/portfolio/po0019'
import po0020 from '@/components/portfolio/po0020'
import po0021 from '@/components/portfolio/po0021'
import po0022 from '@/components/portfolio/po0022'
import po0023 from '@/components/portfolio/po0023'
import po0024 from '@/components/portfolio/po0024'
import po0025 from '@/components/portfolio/po0025'
import po0026 from '@/components/portfolio/po0026'
import po0027 from '@/components/portfolio/po0027'
import axiopo from '@/components/portfolio/axiopo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pages02',
      name: 'portfolio01',
      component: page02
    },
    {
      path: '/appdesign',
      name: 'appdesign',
      component: page03
    },
    {
      path: '/pages04',
      name: 'dashboard',
      component: page04
    },
    {
      path: '/webdeign',
      name: 'webdeign',
      component: experience
    },
    {
      path: '/po001',
      component: po001
    },
    {
      path: '/po002',
      component: po002
    },
    {
      path: '/po003',
      component: po003
    },
    {
      path: '/po004',
      component: po004
    },
    {
      path: '/po005',
      component: po005
    },
    {
      path: '/po006',
      component: po006
    },
    {
      path: '/po007',
      component: po007
    },
    {
      path: '/po008',
      component: po008
    },
    {
      path: '/po009',
      component: po009
    },
    {
      path: '/po0010',
      component: po0010
    },
    {
      path: '/po0011',
      component: po0011
    },
    {
      path: '/po0012',
      component: po0012
    },
    {
      path: '/po0013',
      component: po0013
    },
    {
      path: '/po0014',
      component: po0014
    },
    {
      path: '/po0015',
      component: po0015
    },
    {
      path: '/po0016',
      component: po0016
    },
    {
      path: '/po0017',
      component: po0017
    },
    {
      path: '/po0018',
      component: po0018
    },
    {
      path: '/po0019',
      component: po0019
    },
    {
      path: '/po0020',
      component: po0020
    },
    {
      path: '/po0021',
      component: po0021
    },
    {
      path: '/po0022',
      component: po0022
    },
    {
      path: '/po0023',
      component: po0023
    },
    {
      path: '/po0024',
      component: po0024
    },
    {
      path: '/po0025',
      component: po0025
    },
    {
      path: '/po0026',
      component: po0026
    },
    {
      path: '/po0027',
      component: po0027
    },
    {
      path: '/axiopo',
      component: axiopo
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    let position = { x: 0, y: 0 }
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition
    }

    // Workaround for transitions scrolling to the top of the page
    // However, there are still some problems being fixed by the vue team
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position)
      }, 1000)
    })
  }
})
