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
                <meu-progressbar etapa="3"></meu-progressbar>
            </b-col>    
        </b-row>        
        <h2 class="gray normal mb-2">Resumo da aquisição</h2>
        <p class="bold mb-0">Teleconsulta com especialista</p>
        <p class="bold">R$ 280,00</p>
        <h3 class="gray normal mb-3">Informe os dados do seu cartão para prosseguir no pagamento</h3>
        <div class="bg-blue">
            <b-row>
                <b-col>
                    <form action="" class="p-2">
                        <div class="form-row">
                            <b-col md="3" sm="12">
                                <div class="form-group">
                                    <label for="">Número do cartão</label>
                                    <input type="text" class="form-control" name="cartao_numero" placeholder="XXXX XXXX XXXXX XXXX">
                                </div>
                            </b-col>                            
                        </div>
                        <div class="form-row">
                            <b-col md="4" sm="12">
                                <div class="form-group">
                                    <label for="">Nome impresso no cartão</label>
                                    <input type="text" class="form-control" name="cartao_nome" placeholder="Nome impresso no cartão">
                                </div>
                            </b-col>
                            <b-col md="2" sm="12">
                                <div class="form-group">
                                    <label for="">Validade</label>
                                    <select name="cartao_validade" id="" class="form-control">
                                        <option value="">Mês</option>
                                        <option value="01">Janeiro</option>
                                        <option value="02">Fevereiro</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col md="1" sm="12">
                                <div class="form-group">
                                    <label for="" class="transparent">Ano</label>
                                    <select name="cartao_validade" id="" class="form-control">
                                        <option value="">Ano</option>
                                        <option value="2020">2020</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col md="1" sm="12">
                                <div class="form-group">
                                    <label for="">CVV</label>
                                    <input type="text" class="form-control" name="cartao_cvv" placeholder="XXX">
                                </div>
                            </b-col>
                        </div>                        
                        <b-row>
                            <b-col class="text-center">
                                <b-col cols="4" class="mx-auto p-0">
                                    <router-link to="/dados-gerais" class="btn btn-info btn-block">Continuar</router-link>
                                </b-col>    
                            </b-col>    
                        </b-row>
                    </form>
                </b-col>
            </b-row>
        </div>
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
