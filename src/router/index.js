import { createRouter, createWebHistory } from 'vue-router'

const routes =[
    {
        path : '/',
        name : 'calculator.index',
        component: () => import("../views/calculator/Index.vue")

    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;