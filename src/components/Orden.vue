<template>
    <div>
        <div class="titulo">
            <h1>Ordena el tuyo</h1>
        </div>
        <div class="tipos">
            <h3> Tipos de pastel</h3>
            <input type="number" id="Sencillo" min="0" max="5" v-model="pSencillo">
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

        <h3> Información del comprador</h3>
        <label for="Input1"> Nombre completo</label>
        <br> <input type = "text" id="Input1" name="Input1" v-model="inNombre"> <br> <br>

        <label for="Input2"> Telefono</label>
        <br> <input type = "tel" id="Input2" name="Input2" maxlength="10" v-model="inTelefono"> <br><br>

        <label for="Input3"> Email</label>
        <br> <input type = "text" id="Input3" name="Input3" v-model="inEmail"> <br> <br>

        <label for="Input4"> Especificacion</label>
        <br> <input type = "text" id="Input4" name="Input4" v-model="inEspecificacion"> <br> <br>
        </div>

        <button @click="enviarPedido">Comprar</button>

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
            }

        },
    }
    }
    
</script>

<style scoped>

</style>