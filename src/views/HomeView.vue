<script setup lang="ts">
import Alerte from './Alerte.vue'
import {ref} from 'vue'
const titre= ref('nomade')
const ager= ref(21)
function showalert(){
  alert('clicked')
}
const list=ref([{title:"formu",location:"Gremda"},
    {title:"resp",location:"Ain"},
    {title:"etude",location:"Afrane"},
    {title:"case",location:"hay Ons"}]) 
  

</script>
<template>
  <div class="content">
  <alerte @showalert="showalert">
    <ul>
      <li v-for="(item,index) in list" :key="index"> {{ item.title }} {{ item.location }}</li>
    </ul>
  </alerte>
</div>
<h1>HI</h1>
</template>
<style scoped>

.content{
  display: inline-flex;
  border: 5px solid white;
  justify-content:start;
  width: 100%;
}
</style>