<template>
  <div class="encabezado">
    <Header/>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
