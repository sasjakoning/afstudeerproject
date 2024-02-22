import { ref, computed, watch } from 'vue'

let isOverTime = false;
export const needsAttention = ref(true);

export const petProperties = ['name', 'type', 'age', 'saturation', 'hydration', 'health', 'training', 'happiness', 'energy'];

export const pet = ref({
    name: 'Stinky',
    type: 'dog',
    age: 2,
    stats: {
        saturation: 1,
        hydration: 2,
        health: 4,
        training: 4,
        happiness: 4,
        energy: 3,
    }
});

const statThresholds = [{ saturation: 2 }, { hydration: 2 }, { health: 1 }, { happiness: 1 }, { energy: 1 }]

watch(pet, (newVal) => {
    if (isOverTime) {
        for (const stat in newVal.stats) {
            for (const threshold of statThresholds) {
                if (newVal.stats[stat] <= threshold[stat]) {
                    console.log('low ' + stat)
                    needsAttention.value = true;
                }
            }
        }
        isOverTime = false;
    } else {
        console.log('not overtime value')
    }
}, { deep: true, immediate: true })

function decreaseStatsOverTime() {
    setInterval(() => {
        pet.value.stats.saturation -= 1;
        isOverTime = true;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.stats.hydration -= 1;
        isOverTime = true;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.stats.health -= 1;
        isOverTime = true;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.stats.training -= 1;
        isOverTime = true;
    }, Math.random() * ((100 * 60 * 1000) - (10 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.stats.happiness -= 1;
        isOverTime = true;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.stats.energy -= 1;
        isOverTime = true;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));
}

decreaseStatsOverTime();

export const emotions = ref({
    happy: '૮ ♡ﻌ♡ა',
    sad: 'ᐠ-ꞈ-ᐟ',
    angry: '(◣_◢)',
    sleepy: '૮ ˘ﻌ˘ ა',
    sick: '▽･ｪ･▽ﾉ”',
    hungry: 'V✪⋏✪V',
    thirsty: 'V✪⋏✪V',
    bored: '૮ ・ﻌ・ა',
    playful: '*:・ﾟ ₍ᐢ•ﻌ•ᐢ₎*:・ﾟ',
    excited: '｡:ﾟ૮ ˶ˆ ﻌ ˆ˶ ა ﾟ:｡',
    curious: '( ͡° ᴥ ͡°)',
    scared: '૮ ⚆ﻌ⚆ა',
    surprised: '໒( ̿❍ ᴥ ̿❍)ʋ',
    confused: '▽･ｪ･▽ﾉ”',
    love: '૮ ♡ﻌ♡ა',
    dead: 'VX⋏XV'
});