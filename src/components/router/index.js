import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'

//引入menus里的组件
import MyUsers from '@/components/menus/MyUsers.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MyGoods from '@/components/menus/MyGoods.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MySettings from '@/components/menus/MySettings.vue'


Vue.use(VueRouter);

const router=new VueRouter({
    routes:[
        {path:'/',component:MyLogin},
        {path:'/login',component:MyLogin},
        {path:'/home',component:MyHome,
        children:[
            {path:'',component:MyUsers},
            {path:'users',component:MyUsers},
            {path:'rights',component:MyRights},
            {path:'goods',component:MyGoods},
            {path:'orders',component:MyOrders},
            {path:'settings',component:MySettings},

            


        ]
    },
        
    ]
});

router.beforeEach((to,from,next)=>{
    if(to.path==='/home'){
        const token=localStorage.getItem('token');
        if(token){
            next();
        }else{
            next('/login');
        }
    }else{
        next();
    }
})

export default router
