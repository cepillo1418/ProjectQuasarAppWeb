<template>
    <q-layout>
    <q-header  reveal elevated class="bg-blue-8 " >
    <q-btn  flat round dense icon="menu" class="q-mr-sm" ></q-btn>
      <q-toolbar-title class="q-mb-md q-ml-lg text-left"><strong>Recherche RTC</strong></q-toolbar-title>
    </q-header>


    <q-footer class="bg-cyan-8" >
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