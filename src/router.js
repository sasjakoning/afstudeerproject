import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/home-view/HomeView.vue';
import petView from './views/pet-view/PetView.vue';
import LibraryView from './views/library-view/LibraryView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/pet',
            name: 'Pet',
            component: petView
        },
        {
            path: '/library',
            name: 'Library',
            component: LibraryView
        }
    ]
})

export default router;