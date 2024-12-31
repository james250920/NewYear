<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['setNewYear']);

const showControls = ref(false);

const toggleControls = () => {
  showControls.value = !showControls.value;
};

const triggerNewYear = () => {
  emit('setNewYear');
};
</script>

<template>
  <div class="test-controls">
    <button @click="toggleControls" class="toggle-button">
      🔧
    </button>
    <div v-if="showControls" class="controls-panel">
      <button @click="triggerNewYear" class="test-button">
        Simular Año Nuevo
      </button>
    </div>
  </div>
</template>

<style scoped>
.test-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.toggle-button {
  background: #333;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.toggle-button:hover {
  opacity: 1;
}

.controls-panel {
  position: absolute;
  bottom: 50px;
  right: 0;
  background: #333;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.test-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
}

.test-button:hover {
  background: #ff8e53;
}
</style>