<template>
    <div class="text-center">
        <b-row>
            <b-col>
                <router-link class="simple-link" to="/obrigado">
                    <div class="video mt-5">
                        <h1>Tela do atendimento</h1>
                    </div>
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
.video {
    width: 100%;
    height: 500px;
    background: #7A7A7A;
    display: table;
}
.video h1{
    display: table-cell;
    vertical-align: middle;
    font-weight: normal;
    color: #FFFFFF;
    font-size: 48px;
}
</style>
