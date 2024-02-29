<template>
	<section class="top-bar">
		<button class="btn-icon-small stats" @click="openStats">
			<img src="../../assets/icons/heart-pulse.svg" alt="icon" />
		</button>
		<h2>Woonkamer</h2>
		<button class="btn-icon-small">
			<img src="../../assets/icons/warning.svg" alt="icon" />
		</button>
	</section>

	<transition name="fade">
		<PetStatus v-if="showStats"/>
	</transition>
</template>

<script setup>

import { ref, nextTick } from 'vue';
import PetStatus from '../pet-status/pet-status.vue';

let showStats = ref(false);

async function openStats() {
	showStats.value = !showStats.value;
	await nextTick();
}

</script>

<style lang="scss" scoped>
@use 'top-bar';

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
