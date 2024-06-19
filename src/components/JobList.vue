<script setup lang="ts">
import JobView from '../views/JobView.vue'
import {ref,onMounted} from 'vue'
defineProps({
    id:Number
})
const work=ref([])
const number=ref()
onMounted(() =>{
    fetch('http://localhost:3000/work')
      .then(res=>res.json())
      .then((data) =>  work.value = data )
})
</script>
<template>
    <p>The Job ID is {{ id }}</p>
    <h2>work:</h2>
    <ul class="work">
      <li v-for="job in work" :key="job.id">
        <h3>post: {{ job.title }} id: {{ job.id }} salary: {{ job.salary }} </h3>
      </li>
    </ul>
    <h2>JObS:</h2>
    <div class="content">
       <div class="one">
            <h1>Designer:</h1>
            <p>créer, d'imaginer, de mettre en forme, de dessiner des nouveaux modèles et d'étudier des plans avec ses collaborateurs en fonction de la demande du client ou du chef de produi</p> 
        </div>
        <div class="two">
            <h1>Profeseur:</h1>
            <p>Son rôle consiste à aider les élèves à acquérir les compétences nécessaires pour résoudre des problèmes, analyser, se concentrer sur des tâches difficiles, développer une pensée créative, communiquer et travailler en équipe.</p>
        </div>
        <div class="three">
            <h1>plomber:</h1>
            <p>Artisan ou ouvrier procédant à l'installation et à l'entretien des canalisations, à la pose et à la réparation des appareils sanitaires et de cuisine</p>
        </div>
    </div>
</template>
<style scoped>
.content{
    margin: 0 40px  0 40px;
    background: red;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size:medium;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
    color: black;
}
.one{
    border: 3px solid black;
}
.two{
    border: 3px solid black;
}
.three{
    border: 3px solid black;
}
.one p ,.two p ,.three p  {
    text-align: start;
    text-transform: capitalize;
}
button{
    border: 3px;
}
p{
    text-align: center;
    font-size: x-large;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
}
h1{
    text-transform: uppercase;
}
.work{
    list-style: none;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: large;
}
.work li{
    border: 4px solid black;
    background: yellowgreen;
    margin-right: 40px;
    font-size: medium;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h2{
    margin-left: 40px;
    text-transform: uppercase;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

}
</style>