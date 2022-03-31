<template>
    <div class="header">
        <img src= "@/assets/logo.png" alt="LogoPasteleria">
        <div class="titulo">
            <h1>Pastelería Estelar</h1>
        </div>
        <div class="options">
            <button>Menu</button>
            <button>Sobre Nosotros</button>
            <button>Cart</button>
            <button>Admin</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>

.header{
    width: 100%;
    height: 300px;
    background:#282828;
    color: #FFFFFF;
}

img{
    width: 130px;
    height: auto;
}


h1{
    font-family: 'Satisfy';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
}

button{
    width: 250px;
    height: 36px;

    font-family: 'Odor Mean Chey';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
}
</style>