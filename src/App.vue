<template>
  <!-- <transition :name="transitionName">
    <router-view :key="$route.fullPath" />
  </transition> -->

  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive>
        <component :is="Component" :key="$route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>

  <Navbar/>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Navbar from './components/navbar/navbar.vue';

let transitionName = ref('slide-left');

const route = useRoute()

// Define a watcher to watch for route changes
watch(() => route, (to, from) => {
  console.log('Route changed from:', from, 'to:', to)
}, { immediate: true })

</script>

<style scoped>
.slide-left-enter-active,
.slide-right-leave-active {
  transition: all 2s ease;
}

.slide-left-leave-active,
.slide-right-enter-active {
  transition: all 2s ease;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-to,
.slide-left-leave-from {
  transform: translateX(0);
}

.slide-right-leave-from,
.slide-left-enter-to {
  transform: translateX(0);
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(100%);
}
</style>
