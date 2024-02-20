<template>
    <section class="reaction-box">
        <div 
        class="character"
        :class="checkInteraction"
        >
            {{ emotions.happy }}
        </div>
        <div class="text">
            {{ statusMessage }}
        </div>
    </section>

    <section class="action-group">
        <button class="action" @click="feedPet">Voeren</button>
        <button class="action" id="action-candy">Snoepje</button>
        <button class="action" id="action-water">Water</button>
        <button class="action" id="action-fur">Vacht verzorging</button>
        <button class="action" id="action-walk">Uitlaten</button>
        <button class="action" id="action-vet">Dierenarts</button>
        <button class="action" id="action-training">Trainen</button>
        <button class="action" id="action-tricks">Trucjes</button>
        <button class="action" id="action-play">Spelen</button>
        <button class="action" id="action-pet">Aaien</button>
        <button class="action" id="action-sleep">Slapen</button>
    </section>

    <section class="status-box">
        <!-- table -->
        <table>
            <tr>
                <th>Voeding</th>
                <td>{{ pet.saturation }}</td>
            </tr>
            <tr>
                <th>Hydratatie</th>
                <td>{{ pet.hydration }}</td>
            </tr>
            <tr>
                <th>Gezondheid</th>
                <td>{{ pet.health }}</td>
            </tr>
            <tr>
                <th>Training</th>
                <td>{{ pet.training }}</td>
            </tr>
            <tr>
                <th>Geluk</th>
                <td>{{ pet.happiness }}</td>
            </tr>
            <tr>
                <th>Energie</th>
                <td>{{ pet.energy }}</td>
            </tr>
        </table>
    </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { petProperties, pet, emotions } from '../../resources/petData'

const statusMessage = ref('hii');
const interactionClass = ref('');

const checkInteraction = computed(() => interactionClass.value);

petProperties.forEach(property => {
    watch(() => pet.value[property], (newVal, oldVal) => {
        console.log(`pet's ${property} changed from ${oldVal} to ${newVal}`);
        console.log(interactionClass.value)
        interactionClass.value = checkStats(property);
    });
});

const checkStats = (value) => {
    switch (value) {
        case 'saturation':
            console.log('saturation');
            return 'shake'
        case 'hydration':
            console.log('hydration');
            return 'shake'
        case 'health':
            console.log('health');
            return 'shake'
        case 'training':
            console.log('training');
            return 'shake'
        case 'happiness':
            console.log('happiness');
            return 'shake'
        case 'energy':
            console.log('energy');
            return 'shake'
        default:
            return 'shake'
    }
}

const feedPet = () => {
    console.log('feed pet');
    pet.value.saturation += 10;
    console.log(pet.value);
}

</script>

<style lang="scss" scoped>
@use 'pet';
</style>
