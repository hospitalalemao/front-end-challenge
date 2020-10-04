import Home from './components/home/Home.vue';
import Sintomas from './components/sintomas/Sintomas.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/sintomas', component: Sintomas }
];