<template>
    <q-layout>
    <q-header  reveal elevated class="bg-orange-8 " >
        <q-btn rounded class="bg-cyan-8 q-mt-md q-ml-md" icon="perm_identity" to="/profil"></q-btn>
             
        <q-toolbar-title class="q-mb-md text-center"><strong>Mes test quasar</strong></q-toolbar-title>
    </q-header>


    <q-footer class="bg-cyan-8" >
        <q-toolbar >
            <div class="button-list q-gutter-md">
             <q-btn class="bg-orange-8  " icon="home" to="/"></q-btn>
             <q-btn class="bg-orange-8  " label="Page 1" to="/page1"></q-btn>
             <q-btn class="bg-orange-8  " label="Page 2 " to="/page2"></q-btn>
             <q-btn class="bg-orange-8  " label="Page 3 " to="/page3"></q-btn>
             
            
            </div>
            </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
</q-layout>


</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'vue1'
})
</script>

<style>

.button-list{
   margin-left: auto;
   margin-right: auto;
}

</style>