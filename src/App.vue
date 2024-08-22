<script lang="ts" setup>
// import MyCounter from './components/MyCounter.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<template>
  <div>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      <div>
      
        <MyCounterScript2 :value="2" />
    </div>  
  </div>
</template>

<style scoped>

</style>
