import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Order from '../components/Order.vue';
import Spaceship from '../components/Spaceship.vue';
import Ship from '../components/Ship.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/spaceship',
            name: 'Spaceship',
            component: Spaceship
        },
        {
            path: '/ship',
            name: 'Ship',
            component: Ship
        },
    ]
})
