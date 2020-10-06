<template>
    <div>
        <div class="row">
            <div class="col-md-12 pt-2 pl-2 mb-5">
                <router-link to="/">
                    <img class="img-fluid" src="../../assets/logo-ovcz.svg" alt="Osvaldo Cruz">
                </router-link>
            </div>
        </div>        
        <b-row> 
            <b-col>                       
                <h1 class="mb-5">Pronto atendimento virtual</h1>
                <meu-progressbar etapa="4"></meu-progressbar>
            </b-col>    
        </b-row>
        <b-row>
            <b-col class="text-center">
                <router-link class="simple-link" to="/nao-atendendo">
                    <h2 class="h-large mt-5 mb-3">Não estamos atendendo no momento</h2>
                    <p class="mb-0">Nosso atendimento virtual é realizado apenas de segunda à sexta-feira, das 9h às 19h.</p>
                    <p class="mb-5">Para atendimentos presenciais, procure uma de nossas unidades de pronto atendimento.</p>
                    <b-row>
                        <b-col md="6" offset-md="3" sm="12">
                            <b-row>
                                <b-col md="6" sm="12">
                                    <h3>HAOC UN. Paulista</h3>
                                    <p>Rua Treze de Maio, 1815, <br> Bela Vista / São Paulo - SP</p>
                                </b-col>
                                <b-col md="6" sm="12">
                                    <h3>HAOC UN. Vergueiro</h3>
                                    <p>Rua São Joaquim, <br> 36 Liberdade / São Paulo - SP</p>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </router-link>
            </b-col>
        </b-row>
    </div>
</template>
<script>
    import Botao from '../shared/botao/Botao';

    export default {
        components: {
            'meu-botao': Botao
        }
    }
</script> 
<style>    
</style>
