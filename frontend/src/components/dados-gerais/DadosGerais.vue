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
        <p><small>* Disponível apenas para pacientes com 18 anos de idade ou mais e CPF próprio.</small></p>
        <div class="bg-blue">
            <b-row>
                <b-col>
                    <form action="" class="p-2">
                        <div class="form-row">
                            <b-col md="4" sm="12">
                                <div class="form-group">
                                    <label for="">Nome completo</label>
                                    <input type="text" class="form-control" name="nome_completo" placeholder="Nome completo">
                                </div>
                            </b-col>
                            <b-col md="2" sm="12">
                                <div class="form-group">
                                    <label for="">CPF</label>
                                    <input type="text" class="form-control" name="cpf" placeholder="000.000.000-00">
                                </div>
                            </b-col>
                            <b-col md="2" sm="12">
                                <div class="form-group">
                                    <label for="">Data de nascimento</label>
                                    <input type="text" class="form-control" name="data_nascimento" placeholder="dd/mm/aaaa">
                                </div>
                            </b-col>
                            <b-col md="4" sm="12">
                                <div class="form-group">
                                    <label for="">Sexo</label><br>
                                    <div class="custom-control custom-radio custom-control-inline mt-2">
                                        <input class="custom-control-input" type="radio" name="sexo" id="masculino" value="masculino">
                                        <label class="custom-control-label" for="masculino">Masculino</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input class="custom-control-input" type="radio" name="sexo" id="feminino" value="feminino">
                                        <label class="custom-control-label" for="feminino">Feminino</label>
                                    </div>
                                </div>
                            </b-col>
                        </div>
                        <div class="form-row">
                            <b-col md="4" sm="12">
                                <div class="form-group">
                                    <label for="">E-mail</label>
                                    <input type="email" class="form-control" name="email" placeholder="E-mail">
                                </div>
                            </b-col>
                            <b-col md="2" sm="12">
                                <div class="form-group">
                                    <label for="">DDD + Celular</label>
                                    <input type="text" class="form-control" name="celular" placeholder="(xx) xxxxx-xxxx">
                                </div>
                            </b-col>
                        </div>
                        <div class="form-row">
                            <b-col md="2" sm="12">
                                <div class="form-group">
                                    <label for="">CEP</label>
                                    <input type="text" class="form-control" name="cep" placeholder="xxxxx-xxx">
                                </div>
                            </b-col>
                            <b-col md="4" sm="12">
                                <div class="form-group">
                                    <label for="">Endereço</label>
                                    <input type="text" class="form-control" name="endereco" placeholder="Endereço">
                                </div>
                            </b-col>
                            <b-col md="1" sm="12">
                                <div class="form-group">
                                    <label for="">Número</label>
                                    <input type="text" class="form-control" name="numero" placeholder="N°">
                                </div>
                            </b-col>
                            <b-col md="3" sm="12">
                                <div class="form-group">
                                    <label for="">Complemento</label>
                                    <input type="text" class="form-control" name="complemento" placeholder="Complemento">
                                </div>
                            </b-col>
                        </div>
                        <div class="form-row">
                            <b-col md="3" sm="12">
                                <div class="form-group">
                                    <label for="">Bairro</label>
                                    <input type="text" class="form-control" name="bairro" placeholder="Bairro">
                                </div>
                            </b-col>
                            <b-col md="1" sm="12">
                                <div class="form-group">
                                    <label for="">UF</label>
                                    <select name="uf" id="" class="form-control">
                                        <option value="">Selecione</option>
                                        <option value="SP">SP</option>
                                    </select>
                                </div>
                            </b-col>
                            <b-col md="3" sm="12">
                                <div class="form-group">
                                    <label for="">Cidade</label>
                                    <input type="text" class="form-control" name="cidade" placeholder="Cidade">
                                </div>
                            </b-col>
                        </div>
                        <div class="form-row mb-3">
                            <b-col>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" name="termo" id="termo">
                                    <label class="custom-control-label" for="termo">Aceito os <a href="">termos e condições de uso</a>.</label>
                                </div>
                            </b-col>
                        </div>                        
                        <meu-botao link="/pagamento" />
                    </form>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
    import Progressbar from '../shared/progressbar/Progressbar';
    import Botao from '../shared/botao/Botao';

    export default {
        components: {
            'meu-progressbar': Progressbar,
            'meu-botao': Botao
        }
    }
</script> 
<style>
</style>
