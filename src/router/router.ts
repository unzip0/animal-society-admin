import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth/authStore';

const routes = [
    {
        path: '/authentication',
        name: 'Authentication',
        component: () => import('@/pages/AuthenticationPage.vue'),
        beforeEnter: (to, from, next) => {
            const authStore = useAuthStore();
            if (authStore.authenticated) {
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
            const authStore = useAuthStore();
            if (!authStore.authenticated) {
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
                    const authStore = useAuthStore();
                    if (!authStore.authenticated) {
                        return next({ name: 'Authentication' });
                    }
                    return next();
                },
            },
            {
                path: '/animals',
                name: 'Animals',
                component: () => import('@/pages/dashboard/animals/AnimalPage.vue'),
                beforeEnter: (to, from, next) => {
                    const authStore = useAuthStore();
                    if (!authStore.authenticated) {
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
                    const authStore = useAuthStore();
                    if (!authStore.authenticated) {
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