import Home from './components/home/Home.vue';
import Sintomas from './components/sintomas/Sintomas.vue';
import DadosGerais from './components/dados-gerais/DadosGerais.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/sintomas', component: Sintomas },
    { path: '/dados-gerais', component: DadosGerais }
];