import { ref, watch } from 'vue';

let isOverTime = false;
export const needsAttention = ref(true);

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

const statThresholds = [{ saturation: 2 }, { hydration: 2 }, { health: 1 }, { happiness: 1 }, { energy: 1 }];

watch(pet, (newVal) => {
	for (const stat in newVal.stats) {
		for (const threshold of statThresholds) {
			if (newVal.stats[stat] <= threshold[stat]) {
				console.log('low ' + stat);
				needsAttention.value = true;
			}
		}
	}

	//if all values are above the threshold, the pet is fine
	if (newVal.stats.saturation > 2 && newVal.stats.hydration > 2 && newVal.stats.health > 1 && newVal.stats.happiness > 1 && newVal.stats.energy > 1) {
		needsAttention.value = false;
	}
	isOverTime = false;
}, { deep: true, immediate: true });

function decreaseStatsOverTime() {
	setInterval(() => {
		pet.value.stats.saturation -= 1;
		isOverTime = true;
		console.log('saturation decreased');
	}, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

	setInterval(() => {
		pet.value.stats.hydration -= 1;
		isOverTime = true;
		console.log('hydration decreased');
	}, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

	setInterval(() => {
		pet.value.stats.health -= 1;
		isOverTime = true;
		console.log('health decreased');
	}, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

	setInterval(() => {
		pet.value.stats.training -= 1;
		isOverTime = true;
		console.log('training decreased');
	}, Math.random() * ((100 * 60 * 1000) - (10 * 60 * 1000)) + (1 * 60 * 1000));

	setInterval(() => {
		pet.value.stats.happiness -= 1;
		isOverTime = true;
		console.log('happiness decreased');
	}, Math.random() * ((10 * 60 * 1000) - (1 * 60 * 1000)) + (1 * 60 * 1000));

	setInterval(() => {
		pet.value.stats.energy -= 1;
		isOverTime = true;
		console.log('energy decreased');
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
	neutral: '૮ ・ﻌ・ა',
	playful: '*:・ﾟ ₍ᐢ•ﻌ•ᐢ₎*:・ﾟ',
	excited: '｡:ﾟ૮ ˶ˆ ﻌ ˆ˶ ა ﾟ:｡',
	curious: '( ͡° ᴥ ͡°)',
	scared: '૮ ⚆ﻌ⚆ა',
	surprised: '໒( ̿❍ ᴥ ̿❍)ʋ',
	confused: '▽･ｪ･▽ﾉ”',
	love: '૮ ♡ﻌ♡ა',
	dead: 'VX⋏XV'
});