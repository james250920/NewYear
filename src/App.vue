<script setup lang="ts">
import NewYearCountdown from './components/NewYearCountdown.vue'
</script>

<template>
  <div class="app-container">
    <NewYearCountdown />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
</style>