import petChecks from './petChecks';

const adjustStat = (pet, stat, value) => {
    pet[stat] += value;
    if (pet[stat] > 4) {
        pet[stat] = 4;
    }
}

const willEat = (pet, saturation, health, happiness, training) => {
    const MULTIPLIER = 25;
    const LIKELINESS_MINIMUM = 5;

    saturation *= MULTIPLIER;
    health *= MULTIPLIER;
    happiness *= MULTIPLIER;
    training *= MULTIPLIER;

    let likeliness = 100 - saturation;

    const isPetHungry = petChecks.isHungry(pet);
    const isPetHealthy = petChecks.isHealthy(pet);
    const isPetHappy = petChecks.isHappy(pet);
    const isPetTrained = petChecks.isTrained(pet);

    const calculatedSaturation = isPetHungry ? 20 : 10;
    const calculatedHealth = isPetHealthy ? 10 : 20;
    const calculatedHappiness = isPetHappy ? 10 : 20;
    const calculatedTraining = isPetTrained ? 10 : 20;

    likeliness += isPetHungry ? calculatedSaturation : -calculatedSaturation;
    likeliness += isPetHealthy ? calculatedHealth : -calculatedHealth;
    likeliness += isPetHappy ? calculatedHappiness : -calculatedHappiness;

    if (!isPetHappy) {
        likeliness += isPetTrained ? calculatedTraining : -calculatedTraining;
    }

    if (likeliness < 0) {
        likeliness = LIKELINESS_MINIMUM;
    }

    const randomValue = Math.floor(Math.random() * 100);

    return likeliness > randomValue;
}

export default {
    adjustStat,
    willEat
}