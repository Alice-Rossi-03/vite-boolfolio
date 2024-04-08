import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import ShowSingleProject from './pages/ShowSingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/boolfolio',
            name: 'boolfolio',
            component: ProjectList
        },
        {
            path: '/boolfolio/:slug',
            name: 'single-project',
            component: ShowSingleProject 
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound 
        },
    ]
}); 

export {router}; 