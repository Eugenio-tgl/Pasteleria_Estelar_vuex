<template>
    <div class="display">
        <div class="title">
            <h1>Nuestros pasteles estan hechos con la mejor calidad</h1>
        </div>
        <div class="carrousel">
            <img src="@/assets/P1.png" alt="P1" >
            <img src="@/assets/P2.png" alt="P2" >
            <img src="@/assets/P3.png" alt="P3" >

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Display'
    }
</script>

<style scoped>

*{
    width: 100%;
    
}

h1{
    left: 50px;

    font-family: 'Satisfy';
    font-style: normal;
    font-weight: 400;
    font-size: 41px;
    line-height: 59px;
    text-align: center;
}

img{
    height: 400px;
    width: auto;
}
</style>