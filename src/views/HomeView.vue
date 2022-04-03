<template>
  <Display/>
  <Orden/>
  <Contacto/>
</template>

<script>

import Display from '@/components/Display.vue'
import Orden from '@/components/Orden.vue'
import Contacto from '@/components/Contacto.vue'
import Pedidos from '@/components/Pedidos.vue'

export default {
  name: 'App',
  components: {
    Display, Orden, Contacto, Pedidos
    
  }
}
</script>

<style>

.counter{
  font-size: 80px;
}

.div{
  margin-bottom: 10px;
}

</style>