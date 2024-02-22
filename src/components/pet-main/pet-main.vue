<template>
    <div class="pet">
        <section class="reaction-box">
            <div class="text">
                <p v-if="needsAttention"
                >⚠️</p>
                <p>{{ statusMessage }}</p>
            </div>
            <div 
            class="character"
            :class="checkInteraction"
            >
                {{ currentEmotion }}
            </div>
        </section>
    </div>

    <section class="action-group">
        <button class="action" @click="actionFeed">Voeren</button>
        <button class="action" @click="actionCandy">Snoepje</button>
        <button class="action" @click="actionWater">Water</button>
        <button class="action" @click="actionFur">Vacht verzorging</button>
        <button class="action" @click="actionWalk">Uitlaten</button>
        <button class="action" @click="actionVet">Dierenarts</button>
        <button class="action" @click="actionTrain">Trainen</button>
        <button class="action" @click="actionTrick">Trucjes</button>
        <button class="action" @click="actionPlay">Spelen</button>
        <button class="action" @click="actionPet">Aaien</button>
        <button class="action" @click="actionSleep">Slapen</button>
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
	interactionClass.value = '';

	setTimeout(() => {
		const result = petHelpers.willEat(pet.value.stats);

		console.log(result);

		if (result && pet.value.stats.saturation < 4) {
			petHelpers.adjustStat(pet.value, 'saturation', 1);
			petHelpers.adjustStat(pet.value, 'health', 1);
			petHelpers.adjustStat(pet.value, 'happiness', 1);
			currentEmotion.value = emotions.value.happy;
			statusMessage.value = `${pet.value.name} heeft gegeten!`;
		} else if (result && pet.value.stats.saturation >= 4) {
			petHelpers.adjustStat(pet.value, 'health', -1);
			petHelpers.adjustStat(pet.value, 'happiness', -1);
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

};

const actionWater = () => {

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
