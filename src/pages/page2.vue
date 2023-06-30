<template>
        <h3 class="text-center">My Calculator</h3>
        <div class=" row justify-center">

            <div class=" bg-orange-1  row q-gutter-xs q-pa-xs" style="width: 30%;">

            <div class="col">

                <div  class=" bg-grey-2 q-mx-xs q-pa-xs text-right text-black " style="border-radius: 10px;">
                    {{previous_value || '.'}}
                </div>

                <div class=" bg-grey-5 q-mx-xs q-pa-xs text-right text-black " style="font-size: 30px; border-radius: 10px;">
                   {{ current_value || '0' }}
                </div>
            </div>

            <q-btn-group  class="q-gutter-xs"  style="width: 100%;" >
      <q-btn @click="calculator(item)" v-for="item in operators_line" class="col bg-cyan-8 text-white "  push  :label=item  ></q-btn>
    
    </q-btn-group>
    
    <q-btn-group  class="q-gutter-xs"  style="width: 100%;">
      <q-btn @click="calculator(item)" v-for="item in operators_line2" class="col bg-cyan-8 text-white"  push  :label=item  ></q-btn>
    
    </q-btn-group>
    
    <q-btn-group  class="q-gutter-xs"  style="width: 100%;" >
      <q-btn @click="calculator(item)" v-for="item in operators_line3" class="col bg-cyan-8 text-white"  push  :label=item  ></q-btn>
    
    </q-btn-group>
    
    <q-btn-group  class="q-gutter-xs"  style="width: 100%;" >
      <q-btn @click="calculator(item)" v-for="item in operators_line4" class="col bg-cyan-8 text-white"  push  :label=item  ></q-btn>
    
    </q-btn-group>
            <q-btn-group  class="q-gutter-xs"  style="width: 75%;" >
      <q-btn @click="calculator(item)" v-for="item in operators_line5" class="col bg-cyan-8 text-white"  push  :label=item  ></q-btn>
    
    </q-btn-group>

            </div>
        </div>
</template>

<script>
import { defineComponent } from 'vue';



export default defineComponent({
    name : 'page2',
    methods: {
          calculator(item){
            if(!isNaN(item) || item == '.'){
                this.current_value += item
            }
            if(!isFinite){
                
            }
          }
    },

    data (){
        const previous_value ="25"
        const current_value = ""
        const operators_line = ["C","+","-","*"]
        const operators_line2 = [7,8,9,'/']
        const operators_line3 = [4,5,6,'%']
        const operators_line4 = [1,2,3,'%']
        const operators_line5 = [0,'.']
        return{
            previous_value,
            current_value,
            operators_line,
            operators_line2,
            operators_line3,
            operators_line4,
            operators_line5

        }
    }
})

</script>