const isHealthy = (pet) => {
	if (pet.health > 4) {
		return pet.health >= 50;
	}
	return pet.health >= 2;
};

const isHungry = (pet) => {
	if (pet.saturation > 4) {
		return pet.saturation <= 75;
	}
	return pet.saturation <= 3;
};

const isThirsty = (pet) => {
	if (pet.hydration > 4) {
		return pet.hydration <= 75;
	}
	return pet.hydration <= 3;
};

const isHappy = (pet) => {
	if (pet.happiness > 4) {
		return pet.happiness >= 50;
	}
	return pet.happiness >= 3;
};

const isTrained = (pet) => {
	if (pet.training > 4) {
		return pet.training >= 50;
	}
	return pet.training >= 2;
};

const hasEnergy = (pet) => {
	if (pet.energy > 4) {
		return pet.energy >= 50;
	}
	return pet.energy >= 2;
};

export default {
	isHealthy,
	isHungry,
	isThirsty,
	isHappy,
	isTrained,
	hasEnergy
};