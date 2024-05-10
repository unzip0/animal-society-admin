import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import DashboardPage from '@/pages/dashboard/DashboardPage.vue';
import { userStore } from '@/stores/auth/userStore';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        beforeEnter: (to, from, next) => {
            const useUserStore = userStore();
            if (useUserStore.userIsAuth) {
                return next({ name: 'Dashboard' });
            }
            return next();
        },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        beforeEnter: (to, from, next) => {
            const useUserStore = userStore();
            if (!useUserStore.userIsAuth) {
                return next({ name: 'Home' });
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