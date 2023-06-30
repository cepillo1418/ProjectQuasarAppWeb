<template>
     <div class="q-mt-md row justify-center ">
  <q-avatar rounded size="200px">
      <img src="https://cdn.pixabay.com/photo/2022/06/07/14/15/food-7248455_1280.png">
    </q-avatar>
</div>

<div style="width: 50%;" class="q-mx-auto text-center ">
    <q-card
      class="my-card bg-cyan-8"
     
    >
      <q-card-section>
        <div class="text-h6">Nom de la personne  </div>
        <div class="text-subtitle2 text-orange-8">Description</div>
      </q-card-section>
      
      <q-card-section class="q-pt-none">
        Alphonse Marie Louis de Prat de Lamartine, né à Mâcon le 21 octobre 1790 et mort à Paris le 28 février 1869, est un poète, un écrivain, un historien et un homme politique français. Il appartient au mouvement romantique (sa poésie lyrique incarne une idéalisation de la nature).
      </q-card-section>
      </q-card>
</div>
</template>


<script>
import { defineComponent } from "vue";


export default defineComponent({
    name: 'profil'
})

</script>