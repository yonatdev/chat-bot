<script lang="ts" src="./MyCounterScript2.ts">
</script>

<template>
    <div class="flex">  
        <button class="btn" @click="count++" >Aumnetar</button>
        <h1>{{ count }}</h1>
        <h1>{{ squareCounter }}</h1>
        <button class="btn" @click="count--">Disminuir</button>
    </div>
</template>

<style scoped>
.btn {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
</style>