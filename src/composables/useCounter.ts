import { ref, computed } from "vue";
export const useCounter = (initialCount: number = 5) => {
    
    const count = ref(initialCount)

    return {
        count,

        // Read-only 
        squareCount: computed(() => count.value * count.value)
    }
}