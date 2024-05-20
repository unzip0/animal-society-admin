import { createRouter, createWebHistory } from 'vue-router';
import { userStore } from '@/stores/auth/userStore';

const routes = [
    {
        path: '/authentication',
        name: 'Authentication',
        component: () => import('@/pages/AuthenticationPage.vue'),
        beforeEnter: (to, from, next) => {
            const useUserStore = userStore();
            if (useUserStore.userIsAuth) {
                return next({ name: 'Home' });
            }
            return next();
        },
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/dashboard/HomePage.vue'),
        beforeEnter: (to, from, next) => {
            const useUserStore = userStore();
            if (!useUserStore.userIsAuth) {
                return next({ name: 'Authentication' });
            }
            return next();
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/pages/dashboard/DashboardPage.vue'),
                beforeEnter: (to, from, next) => {
                    const useUserStore = userStore();
                    if (!useUserStore.userIsAuth) {
                        return next({ name: 'Authentication' });
                    }
                    return next();
                },
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('@/pages/dashboard/ProfilePage.vue'),
                beforeEnter: (to, from, next) => {
                    const useUserStore = userStore();
                    if (!useUserStore.userIsAuth) {
                        return next({ name: 'Authentication' });
                    }
                    return next();
                },
            }
        ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router