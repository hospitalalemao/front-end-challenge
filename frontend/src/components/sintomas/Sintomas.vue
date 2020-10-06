<template>    
    <section>
        <div class="row">
            <div class="col-md-12 pt-2 pl-2 mb-5">
                <router-link to="/">
                    <img class="img-fluid" src="../../assets/logo-ovcz.svg" alt="Osvaldo Cruz">
                </router-link>
            </div>
        </div>        
        <b-row> 
            <b-col cols="12">                       
                <h1 class="mb-5">Pronto atendimento virtual</h1>
                <meu-progressbar etapa="1"></meu-progressbar>
            </b-col>    
        </b-row>        
        <h2 class="gray normal mb-4">Você possui algum dos sintomas abaixo?</h2>
        <b-row>
            <b-col class="p-3 rounded bg-blue">
                <b-row class="my-2">
                    <b-col class="sintomas pb-2 rounded">                
                        <b-col class="rounded mt-2 pt-3" @click="selecionar(sintoma)" :class="sintoma.selecionado ? 'active': 'not-active'" v-for="sintoma of sintomas">
                            <p>{{ sintoma.nome }}</p>
                        </b-col>                
                    </b-col>
                </b-row>
                <meu-botao link="/dados-gerais" />
            </b-col>
        </b-row>
    </section>
    
</template>
<script>
    import Progressbar from '../shared/progressbar/Progressbar';
    import Botao from '../shared/botao/Botao';

    export default {
        components: {
            'meu-progressbar': Progressbar,
            'meu-botao': Botao
        },
        methods: {
            selecionar(sintoma) {
                sintoma.selecionado = !sintoma.selecionado;
            }
        },
        data() {
            return {
                sintomas: [
                    {id: 1, nome: 'Dor no peito, tipo aperto, não relacionada ao movimento, podendo irradiar para as costas, braço, estômago ou pescoço, podendo ser acompanhada de falta de ar', selecionado: false},
                    {id: 2, nome: 'Sensação de “batedeira” no peito ou coração acelerado', selecionado: false},
                    {id: 3, nome: 'Perda de força em um dos lados do corpo e/ou face', selecionado: false},
                    {id: 4, nome: 'Falta de ar/cansaço ao subir escada, tomar banho ou até mesmo ao falar', selecionado: false},
                    {id: 5, nome: 'Desmaio e/ou perda da consciência', selecionado: false},
                    {id: 6, nome: 'Convulsão', selecionado: false},
                    {id: 7, nome: 'Ferimento profundo', selecionado: false},
                    {id: 8, nome: 'Queda, com ou sem trauma craniano e/ou como consequência de desmaio', selecionado: false},
                    {id: 9, nome: 'Ingestão de corpo estranho ou de medicamentos em dose superior ao recomendado', selecionado: false},
                    {id: 10, nome: 'Dor testicular aguda não relacionada a trauma', selecionado: false},
                    {id: 11, nome: 'Dor lombar em paciente com antecedente de cálculo renal', selecionado: false},
                    {id: 12, nome: 'Não possuo nenhum dos sintomas acima', selecionado: false}
                ]
            }
        }
    }
</script>

<style>
    .sintomas .rounded{
        border: solid 1px #00B2BB;        
        color: #00798A;
    }
    .sintomas div{
        cursor: pointer;
    }
    .sintomas p{        
        color: #00798A;
    }
    .sintomas div:last-child p{        
        text-transform: uppercase
    }
    .sintomas div.active{
        background-color: #00B2BB;
        color: #FFFFFF;
    }
    .sintomas div.active p {
        color: #FFFFFF;
    }
    .sintomas div.not-active{
        background-color: #FFFFFF;
    }
</style>