<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['access-granted']);
const secretWord = ref('');
const error = ref(false);
const CORRECT_WORD = 'camila';
const CORRECT_WORD2 = 'pollito con papas';
const CORRECT_WORD3 = '2025';


const checkWord = () => {
  if (secretWord.value.toLowerCase() === CORRECT_WORD || secretWord.value.toLowerCase() === CORRECT_WORD2 || secretWord.value.toLowerCase() === CORRECT_WORD3) {
    error.value = false;
    emit('access-granted');
  } else {
    error.value = true;
    setTimeout(() => {
      error.value = false;
      alert('Palabra incorrecta, En que año estamos?');
    }, 2000);
  }
};
</script>

<template>
  <div class="secret-input-container">
    <input 
      type="text" 
      v-model="secretWord"
      placeholder="Ingresa la palabra especial"
      :class="{ error }"
      @keyup.enter="checkWord"
    >
    <button @click="checkWord" class="submit-button">
      Entrar
    </button>
  </div>
</template>

<style scoped>
.secret-input-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

input {
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 250px;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  border-color: #ff6b6b;
  background: rgba(255, 255, 255, 0.15);
}

input.error {
  border-color: #ff4444;
  animation: shake 0.5s;
}

.submit-button {
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.submit-button:hover {
  transform: scale(1.05);
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}
</style>