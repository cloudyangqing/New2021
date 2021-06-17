import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import about from '@/pages/about/about.vue'
import contact from '@/pages/contact/contact.vue'
import photo from '@/pages/photo/photo.vue'
import turntable from '@/pages/turntable/turntable.vue'
import turncircle from '@/pages/turncircle/turncircle.vue'
import ZhuanPan from '@/pages/ZhuanPan/ZhuanPan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
    	path:'/contact',
    	name:'contact',
    	component:contact
    },
    {
    	path:'/photo',
    	name:'photo',
    	component:photo
    },
    {
    	path:'/turntable',
    	name:'turntable',
    	component:turntable
    },
    {
    	path:'/turncircle',
    	name:'turncircle',
    	component:turncircle
    },
    {
    	path:'/ZhuanPan',
    	name:'ZhuanPan',
    	component:ZhuanPan
    }
  ]
})
