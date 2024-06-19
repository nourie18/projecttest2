<script setup lang="ts">
import JobList from '@/components/JobList.vue';
import {ref} from 'vue'
const jobs=[
    {title:"designer",id:1},
    {title:"professeur",id:2},
    {title:"plombier",id:3}
]
const show=ref(false)

function showinfo(){
    show.value=!show.value
}
</script>
<template>
    <div class="job">
        <h1>Hello World</h1>
        <div v-for="(job) in jobs" :key="job.id" class="jobs">
        <router-link :to="{name:'joblist', params:{id: job.id}}">
            <h2>JOB{{ job.id }}: {{ job.title }}</h2>
        </router-link>
        </div>    
    </div>
    <br>
    <br>
    <div class="button">
        <button @click="showinfo">
            <span v-if="show">hide</span>
            <span v-if="!show">show</span>
        </button>
    </div>
    <br>
    <Suspense v-if="show">
    <JobList />
    </Suspense>
</template>
<style scoped>
.job{
  display: grid;
  justify-content: center;
  text-align: center;
  color:linear-gradient(135deg,red,black);
  margin-top:20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
}
h1{
    background:linear-gradient(135deg, red, black);
    -webkit-text-fill-color: transparent; 
    -webkit-background-clip: text; 
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h2{
    background: linear-gradient(135deg,red,black);
    padding: 10px;
    margin: 10px;
    color: rgb(228, 228, 228);
    text-align: left;
    letter-spacing: 2px;
}
.jobs{
    background: lightblue;
    box-shadow: 10px 10px 10px 5px red;
    height: 100px;
    width: 400px;
}
.button{
    display: flex;
    justify-content: center;
}
button{
    height: 50px;
    width: 150px;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: x-large;
    text-transform: uppercase;
    background: linear-gradient(135deg ,red,black);
}


</style>
