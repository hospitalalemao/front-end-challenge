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
                <section>
                    <h1>Pronto atendimento virtual</h1>                    
                    <ul class="nav-step p-0">
                        <li class="ml-5">
                            <router-link to="/">
                                <span>1</span>
                                <span>Sintomas</span>
                            </router-link>
                        </li>
                        <li class="ml-5">
                            <router-link to="/">
                                <span>2</span>
                                <span>Dados pessoais</span>
                            </router-link>
                        </li>
                        <li class="ml-5">
                            <router-link to="/">
                                <span>3</span>
                                <span>Pagamento</span>
                            </router-link>
                        </li>
                        <li class="ml-5">
                            <router-link to="/">
                                <span>4</span>
                                <span>Atendimento</span>
                            </router-link>
                        </li>                        
                    </ul>
                </section>                
            </b-col>    
        </b-row>
        <b-row>
            <b-col class="text-center">    
                <router-link to="/" class="btn btn-info px-5">Continuar</router-link>
            </b-col>    
        </b-row>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>
</style>