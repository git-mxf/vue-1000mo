import Vue from 'vue';
import VueRouter from 'vue-router';
import All from "./components/All.vue";
import Market from "./components/Market.vue";
import Shopcar from "./components/Shopcar.vue";
import Order from "./components/Order.vue";
import Orders from "./components/Orders.vue";
import Peisong from "./components/Peisong.vue";
import Person from "./components/Person.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Shoplist from "./components/Shoplist.vue";
import Shoplistchild from "./components/Shoplistchild.vue";
import Detail from "./components/Detail.vue";
import Search from "./components/Search.vue";
import Section from "./components/Section.vue";
import Loginpwd from "./components/Loginpwd.vue";
import Loginafter from "./components/LoginAfter.vue";
import Loginbefore from "./components/LoginBefore.vue";


Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/market' },
	{ path: '/all', component: All,
		children: [
			{ path: '/market', component: Market },
			{ path: '/shopcar', component: Shopcar },
			{ path: '/order', component: Order, children:[
				{ path:'/order', redirect:'/order/orders'},
				{ path: 'orders', component: Orders	},
				{ path: 'peisong', component: Peisong }
			]},
			{ path: '/person', component: Person, children:[
				{ path: 'loginafter', name:'loginafter', component: Loginafter },
				{ path: 'loginbefore', component: Loginbefore },
				{ path: '/person', redirect: '/person/loginbefore' },
			]},
		]},
	{ path: '/login', component: Login},
	{ path: '/loginpwd', name:'login', component: Loginpwd},
	{ path: '/register', component: Register},
	{ path: '/search', component: Search},
	{ path: '/search', component: Search},
	{ path: '/section/:id', name:'section', component: Section},
	{ path: '/shoplist', component: Shoplist},
	{ path: '/shoplistchild/:id', name:'shoplistchild' ,component: Shoplistchild},
	{ path: '/detail/:myid', name:"detail", component: Detail},
];


const router = new VueRouter({
	mode:"hash",
  	routes // （缩写）相当于 routes: routes
})

export default router