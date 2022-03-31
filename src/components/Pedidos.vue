<template>
    <div class="adminPage">
        <h1>Ordenes Activas</h1>
        <h2>{{$store.state.numOrdenes}}</h2>
        <div class="activos">
            <ul>
                <li>
                    <p v-for="pedidos in $store.state.pedidosActivos" :key="pedidos.id" :class="{ titulo: pedidos.isTitle}">
                        {{pedidos.cliente}} - {{pedidos.telefono}} - {{pedidos.email}} - {{pedidos.pedido}}
                    </p>
                </li>
            </ul>
        </div>
        <h1>Cantidad disponibles de Ingredientes</h1>
        <h2>Tipos de pastel</h2>
        <div class="ingredientesDis">
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

        <h2>Adornos</h2>
        <div class="adornosDis">
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

        <h2>Sabores</h2>
        <div class="adornosDis">
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
    background-color: #2c3e50;
    color: white;
}
</style>