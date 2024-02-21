import { ref } from 'vue'

export const petProperties = ['name', 'type', 'age', 'saturation', 'hydration', 'health', 'training', 'happiness', 'energy'];

export const pet = ref({
    name: 'Stinky',
    type: 'dog',
    age: 2,
    saturation: 1,
    hydration: 2,
    health: 3,
    training: 0,
    happiness: 0,
    energy: 3,
});

function decreaseStatsOverTime() {
    // min 1 minute max 10
    setInterval(() => {
        pet.value.saturation -= 1;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.hydration -= 1;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.health -= 1;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.training -= 1;
    }, Math.random() * ((100 * 60 * 1000) - (10 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.happiness -= 1;
    }, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

    setInterval(() => {
        pet.value.energy -= 1;
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