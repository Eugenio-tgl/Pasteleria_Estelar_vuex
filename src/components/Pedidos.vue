<template>
    <div class="adminPage">
        <div class="ordenesActivas">
            <h1>Ordenes Activas</h1>
            <h2>{{$store.state.numOrdenes}}</h2>

            <table class="activos">
                <tr v-for="pedidos in $store.state.pedidosActivos" :key="pedidos.id" :class="{ titulo: pedidos.isTitle}">
                    <th>{{pedidos.cliente}}</th>
                    <th>{{pedidos.telefono}}</th>
                    <th>{{pedidos.email}}</th>
                    <th>{{pedidos.pedido}}</th>
                </tr>
            </table>
        </div>
        
        <div class="tituloDos">
            <h1>Cantidad disponibles de Ingredientes</h1>
        </div>
        
        <div class="ingredientesDis">
            <h2>Tipos de pastel</h2>
            <table>
                <tr>
                    <th>Sencillo</th>
                    <th>{{$store.state.ingredientesDis[0].sencillo}}</th>
                </tr>
                <tr>
                    <th>3 Leches</th>
                    <th>{{$store.state.ingredientesDis[0].leches}}</th>
                </tr>
                <tr>
                    <th>Devil's Food</th>
                    <th>{{$store.state.ingredientesDis[0].devil}}</th>
                </tr>
                <tr>
                    <th>Niño Envuelto</th>
                    <th>{{$store.state.ingredientesDis[0].envuelto}}</th>
                </tr>
                <tr>
                    <th>Selva Negra</th>
                    <th>{{$store.state.ingredientesDis[0].selvaNegra}}</th>
                </tr>
                <tr>
                    <th>Mil Hojas</th>
                    <th>{{$store.state.ingredientesDis[0].milHojas}}</th>
                </tr>
            </table>
        </div>

        <div class="adornosDis">
            <h2>Adornos</h2>
            <table>
                <tr>
                    <th>Corazones de chocolate</th>
                    <th>{{$store.state.adornosDis[0].corazones}}</th>
                </tr>
                <tr>
                    <th>Frase personalizada</th>
                    <th>{{$store.state.adornosDis[0].frase}}</th>
                </tr>
                <tr>
                    <th>Flores</th>
                    <th>{{$store.state.adornosDis[0].flores}}</th>
                </tr>
                <tr>
                    <th>Tubos de Chocolate</th>
                    <th>{{$store.state.adornosDis[0].tubosChoco}}</th>
                </tr>
                <tr>
                    <th>Muñecos y velas</th>
                    <th>{{$store.state.adornosDis[0].velas}}</th>
                </tr>
                <tr>
                    <th>Cascarones de chocolate</th>
                    <th>{{$store.state.adornosDis[0].cascaronesChoco}}</th>
                </tr>
            </table>
        </div>

        <div class="saboresDis">
            <h2>Sabores</h2>
            <table>
                <tr>
                    <th>Chocolate</th>
                    <th>{{$store.state.saboresDis[0].chocolate}}</th>
                </tr>
                <tr>
                    <th>Vainilla</th>
                    <th>{{$store.state.saboresDis[0].vainilla}}</th>
                </tr>
                <tr>
                    <th>Coco</th>
                    <th>{{$store.state.saboresDis[0].coco}}</th>
                </tr>
                <tr>
                    <th>Zanahoria</th>
                    <th>{{$store.state.saboresDis[0].zanahoria}}</th>
                </tr>
                <tr>
                    <th>Nuez de macadamia</th>
                    <th>{{$store.state.saboresDis[0].macadamia}}</th>
                </tr>
                <tr>
                    <th>Mil hojas</th>
                    <th>{{$store.state.saboresDis[0].milHojas}}</th>
                </tr>
            </table>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: 'Pedidos',
        data(){
            return{
                pedidosActivos:[]
            }
        }
        
    }
    
</script>

<style scoped>
*{
    background-color: #282828;
    color: white;
}

.adminPage{
    text-align: left;

    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 50 400px 500px;
}

th {
  border-bottom: 1px solid #EADE6C;
  text-align: left;
  padding: 8px 0 8px 0;
}

.ordenesActivas{
    grid-column: 1 / -1;
}

.tituloDos{
    grid-column: 1 / -1;
}

.ingredientesDis{
    grid-column: 1 / 3;
}

.adornosDis{
    grid-column: 3 / 5;
}

.saboresDis{
    grid-column: 2 / 4;
}

table{
    padding: 0 80px 100px 80px;
    width: 100%;
}

h2, h1{
    text-align: center;
}

h2{
    color: #EADE6C;
}

</style>
