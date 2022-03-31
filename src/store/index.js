import { createStore } from 'vuex'

export default createStore({
  state: {
    pedidosActivos:[
      {id: 1, cliente:'cliente', telefono:'telefono', email:'email', pedido:'pedido', isTitle: true},
      {id: 2, cliente:'cliente', telefono:'telefono', email:'email', pedido:'pedido', isTitle: true}
      ],
    numOrdenes: 0,
    ingredientesDis:[
      {id: 1, sencillo: 23, leches: 2, devil: 2, envuelto: 4, selvaNegra: 4, milHojas: 1}
      ],
    adornosDis:[
      {id: 1, corazones: 3, frase: 10, flores: 10, tubosChoco: 12, velas: 12, cascaronesChoco: 4}
      ],
    saboresDis:[
      {id: 1, chocolate: 5, vainilla: 6, coco: 7, zanahoria: 4, macadamia: 2, milHojas: 6}
      ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
