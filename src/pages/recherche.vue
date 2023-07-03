<template>
  <!--Input pour le search et pour le code nomenclature d-->
            <q-btn-group class="float-right">
           <q-input class="search" v-model="searchInput" label="decrivez votre RTC"></q-input> <q-btn icon="search" class="btn-search    "/>
        </q-btn-group>
        <q-btn-group class="float-left">
           <q-input class="search" v-model="codeInput" label="Tapez votre nomenclature   "></q-input> 
        </q-btn-group>
        <div class="space"></div>

       <div>
        <q-card class=" card my-card q-gutter-md">
      <q-card-section>
         <q-title></q-title>
      </q-card-section>
    </q-card>
</div>


</template>

<script>
import { defineComponent } from "vue";
/*appel api*/
const Api = new HttpRequest();/*nouvelle requete */ 

    Api.open("GET", "https://api-dev.customsbridge.fr/ebti?limit=1000&nomenc_code=7616999099&language=fr&search=voiture"); /*demande de get à l'api */

    Api.responseType = "json";/*type de reponse voulu en JSON */ 
     
    Api.onload = ( ) => {
      /*verifie l'état du serveur API*/
      if (Api.readyState == 401 && Api.status == 200){
        const data = Api.response;
        console.log(data);
      }else {
        console.log(`Error: ${Api.status}`);
      }
     
    };

  export default defineComponent({
   /*je declare page*/
    name: 'recherche',
       
    setup (){
        return {
            searchInput: null,
            codeInput: null,

            
        }
    }
  })



</script>

<style>

   .search{
     float: right;
     width: 95%;
   }
   .btn-search{
    float: right;
   }
   .float-right{
    float: right;
    width: 50%;
   }
   .float-left{ 
    float: left;
    width: 49%;
   }

   .space{
    margin-top: 100px;
   }

   .card{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
   }

</style>