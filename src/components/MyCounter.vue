<script lang="ts" setup>
import { ref, Ref, defineProps, computed } from "vue"
interface Props {
    value: number;
}

const props = defineProps<Props>();
const count:Ref<number> = ref(props.value ?? 10) 
const squareCounter = computed(() => count.value * count.value)
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