<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import {defineEmits} from 'vue'
const emit = defineEmits(['showalert']) 
function showalert(){
    emit('showalert')
  }
defineProps({
  list:{
    required:true,
    type:Array,
  },
})

</script>

<template>
  <div class="container">
    <h2>welcome here</h2>
    <img src="../assets/assassin.jpg" alt="assassin">
    <button @click="$emit('showalert')">click down</button>
    <slot></slot>
  </div>  
</template>
<style scoped>
body{
    background: rgb(49, 137, 167);
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;
}
button{
  background: lightgreen;
  color: black;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: x-large;
  margin: 10px;
  text-transform: uppercase;
}
img{
  height: 200px;
  width: 350px;
  
}
.container{
  display: grid;
  border:  4px solid black;
  color: black;
  background: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: x-large;
  text-transform: uppercase;
  text-transform: uppercase;
  justify-content: center;
  width: 500px;
}
h2{
  margin: auto;
}
</style>