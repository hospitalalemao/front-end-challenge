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
                    <p class="mb-0">O Hospital Alemão Oswaldo Cruz disponibiliza o serviço de teleconsulta de urgência, possibilitando o atendimento com um dos nossos plantonistas do Pronto Atendimento, para os casos considerados mais simples.</p>
                    <p>Utilizando os recursos da telemedicina, o plantonista poderá avaliar, esclarecer dúvidas, orientar tratamentos, realizar pedido de exames e receitas ou solicitar a continuidade do atendimento presencialmente, caso você necessite de uma avaliação mais cuidadosa.</p>
                </section>
                <section>
                    <h2>Como funciona</h2>
                    <p class="mb-0">O serviço está disponível das 9h as 19h.</p>
                    <p>Após uma breve triagem e cadastro, você será direcionado para atendimento.</p>
                </section>
                <section>
                    <h2>Valores</h2>
                    <p class="mb-0">Consulta de R$ 280,00</p>
                    <p>
                        <small>*Pagemento apenas com cartão de crédito em 1x.</small>
                    </p>
                </section>
                <section>
                    <h2>Por onde é realizado</h2>
                    <p>As consultas são realizadas diretamente no navegador do seu celular ou computador</p>
                </section>            
            </b-col>    
        </b-row>
        <meu-botao link="/sintomas" />
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