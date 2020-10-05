<template>
    <section id="nav-bar-custom" class="nav-bar-custom">
        <div class="nav-progress-bar"></div>          
        <ul class="nav-step p-0">
            <li class="ml-5">
                <router-link to="/sintomas">
                    <span :class="etapa1">1</span>
                    <span>Sintomas</span>
                </router-link>
            </li>
            <li class="ml-5">
                <router-link to="/dados-gerais">
                    <span :class="etapa2">2</span>
                    <span :class="this.etapa < 2 ? 'transparent' : ''">Dados pessoais</span>
                </router-link>
            </li>
            <li class="ml-5">
                <router-link to="/pagamento">
                    <span :class="etapa3">3</span>
                    <span :class="this.etapa < 3 ? 'transparent' : ''">Pagamento</span>
                </router-link>
            </li>
            <li class="ml-5">
                <router-link to="/atendimento">
                    <span :class="etapa4">4</span>
                    <span :class="this.etapa < 4 ? 'transparent' : ''">Atendimento</span>
                </router-link>
            </li>                        
        </ul>                
    </section>
</template>
<script>
export default {
    props: ['etapa'],
    methods: {
        scrollBar(){
            var scrollBase = 0
            switch(this.etapa){
                case '2':
                    scrollBase = 0;
                    break;
                case '3':
                    scrollBase = 150;
                    break;
                case '4':
                    scrollBase = 400;
                    break;
            }

            document.getElementById('nav-bar-custom').scrollLeft = scrollBase;

            console.log(scrollBase);
        }
    },
    mounted() {
        this.scrollBar();
    },
    data() {
        return {
            etapa1: this.etapa >= 1 ? 'active': '',
            etapa2: this.etapa >= 2 ? 'active': '',
            etapa3: this.etapa >= 3 ? 'active': '',
            etapa4: this.etapa == 4 ? 'active': ''
        }
    }
}
</script>
<style>
.nav-bar-custom{
    overflow-x: auto
}
.nav-progress-bar{
    width: 500px;
    border-top: dashed 1px #707070;
    margin: 15px auto 0 auto;
}
.nav-step{
    width: 657px;
    display: table;
    margin: -12px auto 25px auto;    
    overflow-x: auto;
}
.nav-step li{
    display: table-cell;
    padding: 0 25px;
}
.nav-step li a{
    text-align: center;
    display: block;  
    color: #00798A;  
    /* margin-top: -11px; */
}
.nav-step li a:hover{
    text-decoration: none;
}
.nav-step li span:nth-child(1){
    color: #ffffff;
    background-color: #707070;
    border-radius: 15px;
    width: 1.3em;
    display: block;
    margin: 0 auto;
    font-weight: 700;
    line-height: 22px;
}
.nav-step li span.active:nth-child(1){
    color: #ffffff;
    background-color: #00B2BB;
    border-radius: 15px;
    width: 1.3em;
    display: block;
    margin: 0 auto;
    font-weight: 700;
    line-height: 22px;
}
@media only screen and (max-width: 700px) {
  .nav-progress-bar{
        width: 657px;
    }
    .nav-step{
        width: 657px;
    }
}
</style>