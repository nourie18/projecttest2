  <script setup lang="ts">
  import {ref} from 'vue'
  const title0=ref("designer")
  const title1=ref("designer")
  const title2=ref("designer") 
  </script>
<template>
  <div class="about">
    <h1>{{ title0 }}</h1>
    <h2>{{ title1 }}</h2>
    <h3>{{ title2 }}</h3>
  </div>
</template>
<style scoped>
.about{
  display: grid;
  justify-content: center;
  margin-top:20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
}

</style>
