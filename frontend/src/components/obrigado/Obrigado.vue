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
                <router-link class="simple-link" to="/atendimento-presencial">
                    <h2 class="h-large mt-5 mb-3">Obrigado!</h2>
                    <p class="mb-0">Seu atendimento foi finalizado.</p>
                    <p>Em até 2h você receberá um e-mail com a sua receita médica e/ou pedido de exames.</p>
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
