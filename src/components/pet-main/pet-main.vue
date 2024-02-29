<template>
	<section class="pet">
		<img src="../../assets/dogy.png" alt="image of a dog">
	</section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { pet, emotions, needsAttention } from '../../resources/petData';
import petHelpers from '../../resources/petHelpers';

const statusMessage = ref('');
const interactionClass = ref('');

const checkInteraction = computed({
	get: () => interactionClass.value,
	set: (newValue) => {
		interactionClass.value = newValue;
	}
});
const currentEmotion = ref(emotions.value.neutral);

const actionFeed = () => {
	clearTimeout();
	interactionClass.value = '';

	setTimeout(() => {
		const result = petHelpers.willEat(pet.value.stats);

		console.log(result);

		if (result && pet.value.stats.saturation < 4) {
			petHelpers.adjustStat(pet.value.stats, 'saturation', 2);
			petHelpers.adjustStat(pet.value.stats, 'health', 1);
			petHelpers.adjustStat(pet.value.stats, 'happiness', 1);
			currentEmotion.value = emotions.value.happy;
			interactionClass.value = 'scale';
			statusMessage.value = `${pet.value.name} heeft gegeten!`;
		} else if (result && pet.value.stats.saturation >= 4) {
			petHelpers.adjustStat(pet.value.stats, 'health', -1);
			petHelpers.adjustStat(pet.value.stats, 'happiness', -1);
			currentEmotion.value = emotions.value.surprised;
			statusMessage.value = `${pet.value.name} Eet te veel`;
		} else if (!result && pet.value.stats.saturation >= 4) {
			currentEmotion.value = emotions.value.angry;
			statusMessage.value = `${pet.value.name} is vol`;
			interactionClass.value = 'shake';
		} else {
			currentEmotion.value = emotions.value.angry;
			statusMessage.value = `${pet.value.name} wil niet eten`;
			interactionClass.value = 'shake';
		}
	}, 50);


	setTimeout(() => {
		interactionClass.value = '';
		statusMessage.value = '';
		currentEmotion.value = emotions.value.neutral;
	}, 3000);
};

const actionCandy = () => {
	clearTimeout();
	interactionClass.value = '';

	setTimeout(() => {
		const result = petHelpers.willEat(pet.value.stats);

		console.log(result);

		if (result && pet.value.stats.saturation < 4) {
			petHelpers.adjustStat(pet.value.stats, 'saturation', 1);
			petHelpers.adjustStat(pet.value.stats, 'health', 1);
			petHelpers.adjustStat(pet.value.stats, 'happiness', 1);
			currentEmotion.value = emotions.value.happy;
			interactionClass.value = 'scale';
			statusMessage.value = `${pet.value.name} eet een snoepje!`;
		} else if (result && pet.value.stats.saturation >= 4) {
			petHelpers.adjustStat(pet.value.stats, 'health', -1);
			petHelpers.adjustStat(pet.value.stats, 'happiness', -1);
			currentEmotion.value = emotions.value.surprised;
			statusMessage.value = `${pet.value.name} Eet te veel`;
		} else if (!result && pet.value.stats.saturation >= 4) {
			currentEmotion.value = emotions.value.angry;
			statusMessage.value = `${pet.value.name} is vol`;
			interactionClass.value = 'shake';
		} else {
			currentEmotion.value = emotions.value.angry;
			statusMessage.value = `${pet.value.name} wilt geen snoepje`;
			interactionClass.value = 'shake';
		}
	}, 50);

	setTimeout(() => {
		interactionClass.value = '';
		statusMessage.value = '';
		currentEmotion.value = emotions.value.neutral;
	}, 3000);

};

const actionWater = () => {
	clearTimeout();
	interactionClass.value = '';

	setTimeout(() => {
		const result = petHelpers.willDrink(pet.value.stats);

		console.log(result);

		if (result && pet.value.stats.hydration < 4) {
			petHelpers.adjustStat(pet.value.stats, 'hydration', 1);
			petHelpers.adjustStat(pet.value.stats, 'health', 1);
			petHelpers.adjustStat(pet.value.stats, 'happiness', 1);
			currentEmotion.value = emotions.value.happy;
			interactionClass.value = 'scale';
			statusMessage.value = `${pet.value.name} heeft gedronken!`;
		} else if (!result && pet.value.stats.hydration >= 4) {
			currentEmotion.value = emotions.value.angry;
			statusMessage.value = `${pet.value.name} heeft genoeg gedronken`;
			interactionClass.value = 'shake';
		} else {
			currentEmotion.value = emotions.value.angry;
			statusMessage.value = `${pet.value.name} wilt niet drinken`;
			interactionClass.value = 'shake';
		}
	}, 50);

	setTimeout(() => {
		interactionClass.value = '';
		statusMessage.value = '';
		currentEmotion.value = emotions.value.neutral;
	}, 3000);
};

const actionFur = () => {

};

const actionWalk = () => {

};

const actionVet = () => {

};

const actionTrain = () => {

};

const actionTrick = () => {

};

const actionPlay = () => {

};

const actionPet = () => {

};

const actionSleep = () => {

};

onMounted(() => {
	console.log('Mounted');
});

</script>

<style lang="scss" scoped>
@use 'pet-main';
</style>
