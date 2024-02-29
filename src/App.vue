<template>
  <!-- <transition :name="transitionName">
    <router-view :key="$route.fullPath" />
  </transition> -->

  <div class="main-content">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <keep-alive>
          <component :is="Component" :key="$route.fullPath"/>
        </keep-alive>
      </transition>
    </router-view>
  </div>

  <Navbar/>
</template>

<script setup>
import { ref } from 'vue';

import Navbar from './components/navbar/navbar.vue';


let transitionName = ref('slide-left');

</script>

<style scoped>
.slide-left-enter-active,
.slide-right-leave-active {
  transition: all .5s ease;
}

.slide-left-leave-active,
.slide-right-enter-active {
  transition: all .5s ease;
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
