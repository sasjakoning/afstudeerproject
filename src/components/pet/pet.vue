<template>
    <div class="pet">
        <div class="text">
            <p v-if="needsAttention"
            >⚠️</p>
            <p>{{ statusMessage }}</p>
        </div>

        <section class="reaction-box">
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
import { computed, ref, watch, onMounted, nextTick } from 'vue';
import { petProperties, pet, emotions } from '../../resources/petData';
import petHelpers from '../../resources/petHelpers';

const statusMessage = ref('hii');
const interactionClass = ref('');
const needsAttention = ref(false);

const checkInteraction = computed(() => interactionClass.value);
const currentEmotion = computed({
    get: () => emotions.value.happy,
    set: (newValue) => {
        emotions.value.happy = newValue;
    }
});

petProperties.forEach(property => {
    watch(() => pet.value[property], (newVal, oldVal) => {
        if (newVal > 4) {
            pet.value[property] = 4;
        } else if (newVal < 0) {
            pet.value[property] = 0;
        }

        interactionClass.value = checkStats(property);
    });
    nextTick(() => {
        interactionClass.value = checkStats(property);
    });
});

watch(() => interactionClass.value, (newVal, oldVal) => {
    setTimeout(() => {
        interactionClass.value = '';
    }, 400);
});

const checkStats = (value) => {
    console.log(value, pet.value[value])
    switch (value) {
        case 'saturation':
            if (pet.value.saturation < 2) {
                console.log('hungry');
                currentEmotion.value = emotions.value.hungry;
                needsAttention.value = true;
                return 'shake';
            }
        case 'hydration':
            if (pet.value.hydration < 2) {
                console.log('thirsty');
                currentEmotion.value = emotions.value.thirsty;
                needsAttention.value = true;
                return 'shake';
            }
        case 'health':
            if (pet.value.health < 2) {
                console.log('sick');
                currentEmotion.value = emotions.value.sick;
                needsAttention.value = true;
                return 'shake';
            }
        case 'happiness':
            if (pet.value.happiness < 2) {
                console.log('sad');
                currentEmotion.value = emotions.value.sad;
                needsAttention.value = true;
                return 'shake';
            }
        case 'energy':
            if (pet.value.energy < 2) {
                console.log('tired');
                currentEmotion.value = emotions.value.tired;
                needsAttention.value = true;
                return 'shake';
            }
        default:
            console.log('fine');
            needsAttention.value = false;
            break;
    }
}

const actionFeed = () => {
    const result = petHelpers.willEat(pet.value, pet.value.saturation, pet.value.health, pet.value.happiness, pet.value.training);

    if (result && pet.value.saturation < 4) {
        petHelpers.adjustStat(pet.value, 'saturation', 1);
        petHelpers.adjustStat(pet.value, 'health', 1);
        petHelpers.adjustStat(pet.value, 'happiness', 1);
        currentEmotion.value = emotions.value.happy;
        statusMessage.value = `${pet.value.name} heeft gegeten!`;
    } else if (result && pet.value.saturation >= 4) {
        petHelpers.adjustStat(pet.value, 'health', -1);
        petHelpers.adjustStat(pet.value, 'happiness', -1);
        currentEmotion.value = emotions.value.surprised;
        statusMessage.value = `${pet.value.name} Eet te veel`;
    } else if (!result && pet.value.saturation >= 4) {
        currentEmotion.value = emotions.value.angry;
        statusMessage.value = `${pet.value.name} is vol`;
        interactionClass.value = 'shake';
    } else {
        currentEmotion.value = emotions.value.angry;
        statusMessage.value = `${pet.value.name} wil niet eten`;
        interactionClass.value = 'shake';
    }

    setTimeout(() => {
        statusMessage.value = '';
        currentEmotion.value = emotions.value.happy;
    }, 3000);
}

const actionCandy = () => {

}

const actionWater = () => {

}

const actionFur = () => {

}

const actionWalk = () => {

}

const actionVet = () => {

}

const actionTrain = () => {

}

const actionTrick = () => {

}

const actionPlay = () => {

}

const actionPet = () => {

}

const actionSleep = () => {

}

onMounted(() => {
    console.log("Mounted");
});

</script>

<style lang="scss" scoped>
@use 'pet';
</style>
