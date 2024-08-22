<script lang="ts">

import { defineComponent, ref, computed, Ref } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const count:Ref<number> = ref(props.value) 
        const squareCounter = computed(() => count.value * count.value)

        return { count, squareCounter }
    }
})

</script>

<template>
    <div>
        <button @click="count++" >Aumnetar</button>
        <h1>{{ count }}</h1>
        <h1>{{ squareCounter }}</h1>
        <button @click="count--">Disminuir</button>
    </div>
</template>

<style scoped>
    
</style>