<script setup lang="ts">
import { ref } from 'vue';
import { launchFireworks } from '../utils/fireworks';
import MotivationalMessages from './MotivationalMessages.vue';
import SecretWordInput from './SecretWordInput.vue';

const showSpecialContent = ref(false);

const handleAccessGranted = () => {
  showSpecialContent.value = true;
  launchFireworks();
};
</script>

<template>
  <div class="welcome-container">
    <div v-if="!showSpecialContent" class="welcome-content">
      <h1>¡Bienvenido al Año 2025! 🎉</h1>
      <p class="subtitle">Un nuevo año lleno de posibilidades</p>
      <SecretWordInput @access-granted="handleAccessGranted" />
    </div>
    
    <div v-else class="special-content">
      <MotivationalMessages />
    </div>
  </div>
</template>

<style scoped>
.welcome-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  padding: 2rem;
  overflow-y: auto;
}

.welcome-content {
  text-align: center;
  padding: 4rem 2rem;
}

h1 {
  font-size: 3.5rem;
  color: rgb(31, 22, 22);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
}

.special-content {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>