<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="floating-message">
      <div class="message-content">
        <p>Hay algo que te quiero decir :)</p>
        <p>pero eso será a las 0:0:0:0 ;)</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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