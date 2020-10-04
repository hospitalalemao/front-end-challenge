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
                <meu-progressbar etapa="2"></meu-progressbar>
            </b-col>    
        </b-row>        
        <h2 class="gray normal mb-4">Preencha seus dados para darmos continuídade ao seu atendimento virtual.</h2>
    </div>
</template>
<script>
    import Progressbar from '../shared/progressbar/Progressbar';

    export default {
        components: {
            'meu-progressbar': Progressbar
        }
    }
</script> 
<style>
</style>
