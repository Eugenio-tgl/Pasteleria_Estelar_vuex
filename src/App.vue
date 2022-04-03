<template>
  <div class="encabezado">
    <Header/>
    <nav>
      <router-link to = "/">User</router-link>
      <router-link to = "/about">Admin</router-link>
    </nav>
  </div>
  <router-view/>
  
</template>

<script>
import Header from './components/Header.vue'
import Display from './components/Display.vue'
import Orden from './components/Orden.vue'

export default {
  name: 'App',
  components: {
    Header, Display, Orden
    
  }
}

</script>


<style>
#app {
  font-family: 'Satisfy';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  margin-top: -100px;
  padding: 30px;
}

nav a {
  font-family: 'Satisfy';
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  padding: 0 30px 0 30px;
  color: #EADE6C;
}
</style>
