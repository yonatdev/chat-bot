<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />

      <!-- Loading indicator -->
      <p v-if="isLoading">loading...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[]
}
const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);
const isLoading = ref(false); 

watch(messages, () => {
  console.log('messages', messages.length);

  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false; 

    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    });
  }, 1000); // Simula un retraso en el envío del mensaje
});

</script>

<style scoped></style>
