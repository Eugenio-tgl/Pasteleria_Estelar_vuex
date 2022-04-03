<template>
    <div class="ordenSec">
        <div class="titulo">
            <h1>Ordena el tuyo</h1>
        </div>
        <div class="tipos">
            <h3> Tipos de pastel</h3>
            <input type="number" id="Sencillo" min="0" max="5" v-model="pSencillo" placeholder="0">
            <label for="Sencillo">Sencillo....20</label><br>

            <input type="number" id="3 Leches" min="0" max="5" v-model="pLeches">
            <label for="3 Leches">3 Leches.....25</label><br>

            <input type="number" id="Devils Food" min="0" max="5" v-model="pDevils">
            <label for="Devils Food">Devils Food.........35</label><br>

            <input type="number" id="Envuelto" min="0" max="5" v-model="pEnvuelto">
            <label for="Envuelto">Niño envuelto.....20</label><br>

            <input type="number" id="Selva Negra" min="0" max="5" v-model="pSelva">
            <label for="Selva Negra">Selva Negra.....20</label><br>

            <input type="number" id="Mil hojas" min="0" max="5" v-model="pMilHojas">
            <label for="Mil hojas">Mil hojas.....20</label><br>
        </div>

        <div class="adornos">
            <h3> Adornos</h3>
            <input type="number" id="Corazones" min="0" max="5" v-model="aCorazon">
            <label for="Corazones">Corazones de chocolate....20</label><br>

            <input type="number" id="Frase personalizada" min="0" max="5" v-model="aFrase">
            <label for="Frase personalizada">Frase personalizada.....25</label><br>

            <input type="number" id="Flores" min="0" max="5" v-model="aFlores">
            <label for="Flores">Coco.........35</label><br>

            <input type="number" id="Tubos" min="0" max="5" v-model="aTubos">
            <label for="Tubos">Tubos de chocolate.....20</label><br>

            <input type="number" id="Velas" min="0" max="5" v-model="aVelas">
            <label for="Velas">Muñecos y velas....40</label><br>

            <input type="number" id="Cascarones" min="0" max="5" v-model="aCascarones">
            <label for="Cascarones">Cascarones de chocolate....10</label><br>
        </div>
            
        <div class="sabores">
            <h3> Sabores</h3>
            <form>
                <input type="number" id="chocolate" min="0" max="5" v-model="sChocolate">
                <label for="Chocolate">Chocolate....108</label><br>

                <input type="number" id="Vainilla" min="0" max="5" v-model="sVainilla">
                <label for="Vainilla">Vainilla.....130</label><br>

                <input type="number" id="Coco" min="0" max="5" v-model="sCoco">
                <label for="Coco">Coco.........130</label><br>

                <input type="number" id="Zanahoria" min="0" max="5" v-model="sZanahoria">
                <label for="Zanahoria">Zanahoria.....100</label><br>

                <input type="number" id="Nuez de macadamia" min="0" max="5" v-model="sNuez">
                <label for="Nuez de macadamia">Nuez de macadamia....120</label><br>

                <input type="number" id="Mil Hojas" min="0" max="5" v-model="sMilHojas">
                <label for="Mil Hojas">Mil Hojas....120</label><br>
            </form>
        </div>
        
        <div class="infoCliente">
            <h3> Información del comprador</h3>
            <label for="Input1"> Nombre completo</label>
            <br> <input type = "text" id="Input1" name="Input1" v-model="inNombre"> <br> <br>

            <label for="Input2"> Telefono</label>
            <br> <input type = "text" id="Input2" name="Input2" maxlength="10" v-model="inTelefono"> <br><br>

            <label for="Input3"> Email</label>
            <br> <input type = "text" id="Input3" name="Input3" v-model="inEmail"> <br> <br>

            <label for="Input4"> Especificacion</label>
            <br> <input type = "text" id="Input4" name="Input4" v-model="inEspecificacion"> <br> <br>
            
            <button @click="enviarPedido">Comprar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Orden',
        methods: {
        enviarPedido () {
            if(this.inNombre && this.inTelefono && this.inEmail)
            {
                this.$store.state.numOrdenes ++;
                //Tipos de pasteles
                if(this.pSencillo)
                    this.$store.state.ingredientesDis[0].sencillo -= this.pSencillo
                if(this.pLeches)
                    this.$store.state.ingredientesDis[0].leches -= this.pLeches
                if(this.pDevils)
                    this.$store.state.ingredientesDis[0].devil -= this.pDevils
                if(this.pEnvuelto)
                    this.$store.state.ingredientesDis[0].envuelto -= this.pEnvuelto
                if(this.pSelva)
                    this.$store.state.ingredientesDis[0].selvaNegra -= this.pSelva
                if(this.pMilHojas)
                    this.$store.state.ingredientesDis[0].milHojas -= this.pMilHojas

                //Adornos
                if(this.aCorazon)
                    this.$store.state.adornosDis[0].corazones -= this.aCorazon
                if(this.aFrase)
                    this.$store.state.adornosDis[0].frase -= this.aFrase
                if(this.aFlores)
                    this.$store.state.adornosDis[0].flores -= this.aFlores
                if(this.aTubos)
                    this.$store.state.adornosDis[0].tubosChoco -= this.aTubos
                if(this.aVelas)
                    this.$store.state.adornosDis[0].velas -= this.aVelas
                if(this.aCascarones)
                    this.$store.state.adornosDis[0].cascaronesChoco -= this.aCascarones

                //Sabores
                if(this.sChocolate)
                    this.$store.state.saboresDis[0].chocolate -= this.aCorazon
                if(this.sVainilla)
                    this.$store.state.saboresDis[0].vainilla -= this.aFrase
                if(this.sCoco)
                    this.$store.state.saboresDis[0].coco -= this.aFlores
                if(this.sZanahoria)
                    this.$store.state.saboresDis[0].zanahoria -= this.aTubos
                if(this.sNuez)
                    this.$store.state.saboresDis[0].macadamia -= this.aVelas
                if(this.sMilHojas)
                    this.$store.state.saboresDis[0].milHojas -= this.sMilHojas

                
                const nuevoPedido = {
                    cliente: this.inNombre,
                    telefono: this.inTelefono,
                    email: this.inEmail,
                    pedido: this.detallesPedido(),
                }
                this.$store.state.pedidosActivos.push({'id': this.$store.state.numOrdenes, 'cliente': nuevoPedido.cliente,
                                            'telefono': nuevoPedido.telefono, 'email': nuevoPedido.email, 
                                            'pedido': nuevoPedido.pedido, 'isTitle': false })
            }

        },
        detallesPedido () {
            var pedidoFinal =''
            //Tipos de pasteles
                if(this.pSencillo)
                    pedidoFinal += this.pSencillo + ' Pastel Sencillo. '
                if(this.pLeches)
                    pedidoFinal += this.pLeches + ' Pastel 3 Leches. '
                if(this.pDevils)
                    pedidoFinal += this.pDevils + ' Pastel Devils. '
                if(this.pEnvuelto)
                    pedidoFinal += this.pEnvuelto + ' Pastel Niño Envuelto. '
                if(this.pSelva)
                    pedidoFinal += this.pSelva + ' Pastel Selva Negra. '
                if(this.pMilHojas)
                    pedidoFinal += this.pMilHojas + ' Pastel Mil Hojas. '

                //Adornos
                if(this.aCorazon)
                    pedidoFinal += this.aCorazon + ' Adornos Corazon de Chocolate'
                if(this.aFrase)
                    pedidoFinal += this.aFrase + ' Adorno de Frase. '
                if(this.aFlores)
                    pedidoFinal += this.aFlores + ' Adorno de Flores. '
                if(this.aTubos)
                    pedidoFinal += this.aTubos + ' Adorno de Tubos de Chocolate. '
                if(this.aVelas)
                    pedidoFinal += this.aVelas + ' Adorno de Velas. '
                if(this.aCascarones)
                    pedidoFinal += this.aCascarones + ' Adorno Cascarones de Chocolate'

                //Sabores
                if(this.sChocolate)
                    pedidoFinal += this.sChocolate + ' Sabor Chocolate. '
                if(this.sVainilla)
                    pedidoFinal += this.sVainilla + ' Sabor Vainilla. '
                if(this.sCoco)
                    pedidoFinal += this.sCoco + ' Sabor Coco. '
                if(this.sZanahoria)
                    pedidoFinal += this.sZanahoria + ' Sabor Zanahoria '
                if(this.sNuez)
                    pedidoFinal += this.sNuez + ' Sabor Nuez. '
                if(this.sMilHojas)
                    pedidoFinal += this.sMilHojas + ' Sabor Mil Hojas '

                return pedidoFinal;
        }
    }
    }
    
</script>

<style scoped>

.ordenSec{
    background-color: #282828;
    padding: 50px 0 50px 0;
    color: white;
    text-align: left;

    display: grid;
    grid-gap: 3px;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: 100px 400px 500px;
}
h1{
    text-align: center;
}
h3{
    color: #EADE6C;
    font-size: 40px;
    text-align: center;
}

.titulo{
    grid-column: 1 / -1;
}

.tipos{
    grid-column: 1 / 2;
}

.adornos{
    grid-column: 2 / -1;
}

.sabores{
    
    grid-column: 0 / 1;
}

.infoCliente{
    grid-column: 2 / -1;
    text-align: center;
}


input[type="number"]{
    background: #fff;
    width: 40px;
    height: 20px;
    border: none;
    outline: none;
    text-align: center;
    margin: 5px 20px 5px 15% ;
    border-radius: 3px;
}

input[type="text"]{
    background: #fff;
    width: 400px;
    height: 20px;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 3px;
}

button{
    background: rgb(48, 165, 106);
    color: white;
    width: 150px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 50px;
}


</style>

