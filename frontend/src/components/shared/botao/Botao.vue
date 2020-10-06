 <template> 
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-4 mx-auto p-0">
                <router-link :to="link" class="btn btn-info btn-block">Continuar</router-link>
            </div>
        </div>
    </div>
 </template>
 <script>
    export default {
        props: ['link']
    }
 </script>
 <style>
 </style>