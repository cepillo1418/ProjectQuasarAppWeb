<template>
    <q-layout>
    <q-header  reveal elevated class="bg-orange-8 " >
        <q-toolbar-title class="text-center"><strong>Test de quasar FW</strong></q-toolbar-title>
    </q-header>



    <q-footer class="bg-cyan-8" >
        <q-toolbar></q-toolbar>
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