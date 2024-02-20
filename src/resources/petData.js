import { ref } from 'vue'

export const petProperties = ['name', 'type', 'age', 'saturation', 'hydration', 'health', 'training', 'happiness', 'energy'];

export const pet = ref({
    name: 'Stinky',
    type: 'dog',
    age: 2,
    saturation: 0,
    hydration: 0,
    health: 0,
    training: 0,
    happiness: 0,
    energy: 0,
});

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