
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
