<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['setNewYear']);
const showMessage = ref(false);

const toggleMessage = () => {
  showMessage.value = true;
};

const transitionToNewYear = () => {
  showMessage.value = false;
  emit('setNewYear');
};
</script>

<template>
  <div>
    <button @click="toggleMessage" class="message-button">
      Te quiero decir lo siguiente
    </button>
    <div v-if="showMessage" class="floating-message">
      <div class="message-content">
        <p>Lo que te tengo que decir 🙃</p>
        <p>te lo dire a las 0:0:0:0 😉</p>
        <button @click="transitionToNewYear" class="preview-button">
          Ver mensaje especial
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-button {
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;
  margin: 1rem;
}

.message-button:hover {
  transform: scale(1.05);
}

.floating-message {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.message-content {
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: float 2s ease-in-out infinite;
}

.preview-button {
  margin-top: 1rem;
  background: white;
  color: #ff6b6b;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.preview-button:hover {
  transform: scale(1.05);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>