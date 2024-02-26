<template>
  <div class="wrapper">
    <Topbar/>
    <PetMain/>
    <BottomBar/>
  </div>

  <Navbar/>
</template>

<script setup>
import PetMain from './components/pet-main/pet-main.vue';
import PetStatus from './components/pet-status/pet-status.vue';
import Navbar from './components/navbar/navbar.vue';
import Topbar from './components/top-bar/top-bar.vue';
import BottomBar from './components/bottom-bar/bottom-bar.vue';
</script>

<style scoped></style>
