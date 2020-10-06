import Home from './components/home/Home.vue';
import Sintomas from './components/sintomas/Sintomas.vue';
import DadosGerais from './components/dados-gerais/DadosGerais.vue';
import Pagamento from './components/pagamento/Pagamento.vue';
import Atendimento from './components/atendimento/Atendimento.vue';
import AtendimentoVideo from './components/atendimento-video/AtendimentoVideo.vue';
import AtendimentoPresencial from './components/atendimento-presencial/AtendimentoPresencial.vue';
import NaoAtendendo from './components/nao-atendendo/NaoAtendendo.vue';
import Obrigado from './components/obrigado/Obrigado.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/sintomas', component: Sintomas },
    { path: '/dados-gerais', component: DadosGerais },
    { path: '/pagamento', component: Pagamento },
    { path: '/atendimento', component: Atendimento },
    { path: '/atendimento-presencial', component: AtendimentoPresencial },
    { path: '/atendimento-video', component: AtendimentoVideo },
    { path: '/nao-atendendo', component: NaoAtendendo },
    { path: '/obrigado', component: Obrigado }
];