//npm i vue-router

import { createWebHistory, createRouter } from "vue-router"
import Home from '../views/Home';
import Content from '../views/Content';
import About from '../views/About';

//importa arquivos.vue e define todas minhas rotas
const routes = [
    { path: '/', component: Home },
    { path: '/content', component: Content },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;