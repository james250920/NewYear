<script setup lang="ts">
const messages = [
  {
    text: "Que este nuevo año te traiga toda la felicidad que mereces ✨",
    emoji: "💫"
  },
  {
    text: "Cada día es una nueva oportunidad para brillar",
    emoji: "⭐"
  },
  {
    text: "Tu sonrisa ilumina el mundo de quienes te rodean",
    emoji: "🌟"
  },
  {
    text: "Eres más fuerte de lo que imaginas",
    emoji: "💪"
  },
  {
    text: "El mejor momento para ser feliz es ahora",
    emoji: "🌈"
  }
];
</script>

<template>
  <div class="messages-container">
    <h2 class="title">Mensajes Especiales para Ti</h2>
    <div class="messages">
      <div v-for="(message, index) in messages" 
           :key="index" 
           class="message"
           :style="{ animationDelay: `${index * 0.3}s` }">
        <span class="emoji">{{ message.emoji }}</span>
        <p>{{ message.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.messages-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.message {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.emoji {
  font-size: 2rem;
  margin-right: 1rem;
}

.message p {
  color: white;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>