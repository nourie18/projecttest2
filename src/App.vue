<script setup lang="ts">
import { RouterLink, RouterView,useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
function back(){
  if (route.path === '/') {
    router.push({ path: '/job/id' });
  } else if (route.path === '/about') {
    router.push({ path: '/' });
  } else if (route.path === '/job') {
    router.push({ path: '/about' });
  } else if (route.path === '/job/id') {
    router.push({ path: '/job' });
  }
  }
function forward(){
  if (route.path === '/') {
    router.push({ path: '/about' });
  } else if (route.path === '/about') {
    router.push({ path: '/job' });
  } else if (route.path === '/job') {
    router.push({ path: '/job/id' });
  } else if (route.path === '/job/id') {
    router.push({ path: '/' });
  }
  }
function redirect(){
  router.push({path:'/'})
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li><RouterLink to="/">HOME</RouterLink></li>
          <li><RouterLink to="/about">ABOUT</RouterLink></li>
          <li><RouterLink to="/job">JOBS</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div class="button">  
      <button @click="back">back</button>
      <button @click="forward">forward</button>
      <button @click="redirect">redirect</button>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.button{
  height: 50px;
  background: linear-gradient(135deg,black,red);
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
}
button{
  width: 30%;
  margin: 0 15px ;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: x-large;
  color: white;
  background: none;
  border: 4px solid white;
}
nav {
  display: inline-flex;
  letter-spacing: 2px;
  justify-content:space-between;
  justify-content: center;
  margin-top: 20px;
  margin-bottom:10px;
  height: 70px;
  width:50% ;
  align-items: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: xx-large;
}
nav ul {
  list-style: none;
  padding: 10px;
  margin: 2px;
}
nav ul li {
  position: relative;
  display: inline-block;
  align-items: center;
}           

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav li:first-child {
  border-right: 4px solid white;
}

nav li:nth-child(2) {
  border-right: 4px solid white;
}
.wrapper{
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg,black,red);
}
</style>
