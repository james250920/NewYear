<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import MessageButton from './MessageButton.vue';
import NewYearWelcome from './NewYearWelcome.vue';
import TestControls from './TestControls.vue';

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const isNewYear = ref(false);

const calculateTimeLeft = () => {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const difference = newYear.getTime() - now.getTime();

  if (difference <= 0) {
    isNewYear.value = true;
    clearInterval(timer.value);
    return;
  }

  days.value = Math.floor(difference / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
};

const timer = ref<number>();

const setNewYear = () => {
  isNewYear.value = true;
  if (timer.value) {
    clearInterval(timer.value);
  }
};

onMounted(() => {
  calculateTimeLeft();
  timer.value = setInterval(calculateTimeLeft, 1000);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<template>
  <div>
    <div v-if="!isNewYear" class="countdown">
      <h1>¡El reloj avanza, y con él llega un año lleno de nuevas oportunidades!</h1>
      <div class="timer">
        <div class="time-block">
          <span class="number">{{ days }}</span>
          <span class="label">Días</span>
        </div>
        <div class="time-block">
          <span class="number">{{ hours }}</span>
          <span class="label">Horas</span>
        </div>
        <div class="time-block">
          <span class="number">{{ minutes }}</span>
          <span class="label">Minutos</span>
        </div>
        <div class="time-block">
          <span class="number">{{ seconds }}</span>
          <span class="label">Segundos</span>
        </div>
      </div>
      <MessageButton @setNewYear="setNewYear" />
    </div>
    <NewYearWelcome v-else />
    <TestControls @setNewYear="setNewYear" />
  </div>
</template>

<style scoped>
.countdown {
  text-align: center;
  padding: 2rem;
}

.timer {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.5rem;
}
</style>