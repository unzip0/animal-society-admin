import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import DashboardPage from '@/pages/dashboard/DashboardPage.vue';
import { userStore } from '@/stores/auth/userStore';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        beforeEnter: (to, from, next) => {
            const useUserStore = userStore();
            if (useUserStore.userIsAuth) {
                return next({ name: 'dashboard' });
            }
            return next();
        },
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardPage,
        beforeEnter: (to, from, next) => {
            const useUserStore = userStore();
            if (!useUserStore.userIsAuth) {
                return next({ name: 'home' });
            }
            return next();
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router