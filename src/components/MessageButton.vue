<script setup lang="ts">
import { ref, computed } from 'vue';
import NewYearCountdown  from './NewYearCountdown.vue';

// Emitimos el evento para cambiar el estado de Año Nuevo
const emit = defineEmits(['setNewYear']);

// Variable para mostrar el mensaje flotante
const showMessage = ref(false);

// Función para alternar la visibilidad del mensaje flotante
const toggleMessage = () => {
  showMessage.value = true;
};

// Función para manejar la transición al nuevo año o cerrar el mensaje
const transitionToNewYear = () => {
  showMessage.value = false; // Oculta el mensaje flotante
  emit('setNewYear'); // Opcional: ejecuta la acción principal si es necesario
};

//cerrar el mensaje
const closeMessage = () => {
  showMessage.value = false;
}

//capturar los valores de la cuenta regresiva
const props = defineProps({
  days: Number,
  hours: Number,
  minutes: Number,
  seconds: Number
  
})


// Computed para determinar la visibilidad de los botones
const showControls = computed(() => props.seconds === 0 || props.minutes === 0 || props.hours === 0 || props.days === 0);
const showControls2 = computed(() => props.seconds !== 0);
</script>

<template>
  <div>
    <button @click="toggleMessage" class="message-button">
      Te quiero decir lo siguiente
    </button>
    <div v-if="showMessage" class="floating-message">
      <div class="message-content">
        <p>Lo que te tengo que decir 🙃</p>
        <p>Te lo diré a las 0:0:0:0 😉</p>

        <!-- Botón "Ver mensaje especial" -->
        <div v-if="showControls" id="controls">   
          <button @click="transitionToNewYear" class="preview-button">
            Ver mensaje especial
          </button>
        </div>

        <!-- Botón "Regresar" -->
        <div v-if="showControls2" id="controls2">   
          <button @click="closeMessage" class="preview-button">
            Regresar
          </button>
        </div>
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
