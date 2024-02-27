<template>
    <div class="wrapper">
        <Topbar/>
        <PetMain/>
        <BottomBar/>
    </div>
</template>

<script setup>
import Topbar from '../../components/top-bar/top-bar.vue';
import PetMain from '../../components/pet-main/pet-main.vue';
import BottomBar from '../../components/bottom-bar/bottom-bar.vue';
</script>

<style lang="scss" scoped></style>