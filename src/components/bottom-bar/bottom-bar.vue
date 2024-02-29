<template>
	<section class="bottom-bar">
		<section class="action-group">
			<transition name="action-group">
				<div 
				v-if="showLeftMenu"
				class="action-group__menu menu-left"
				>
					<button>
						<p>Spelen</p>
						<div class="btn-icon-small" >
							<img src="../../assets/icons/tennis-ball.svg" alt="">
						</div>
					</button>
					<button>
						<p>Aaien</p>
						<div class="btn-icon-small">
							<img src="../../assets/icons/hand.svg" alt="">
						</div>
					</button>
				</div>
			</transition>
			<button class="btn-icon-large btn-category" @click="openLeft">
				<img src="../../assets/icons/heart.svg" alt="icon" />
			</button>
		</section>
		<section class="action-group">
			<transition name="action-group">
				<div 
				v-if="showRightMenu"
				class="action-group__menu menu-right"
				>
					<button>
						<p>Training</p>
						<div class="btn-icon-small" >
							<img src="../../assets/icons/star.svg" alt="">
						</div>
					</button>
					<button>
						<p>Trucjes</p>
						<div class="btn-icon-small">
							<img src="../../assets/icons/whistle.svg" alt="">
						</div>
					</button>
				</div>
			</transition>
			<button class="btn-icon-large btn-category" @click="openRight">
				<img src="../../assets/icons/bolt.svg" alt="icon" />
			</button>
		</section>
	</section>
</template>

<script setup>
import { ref } from 'vue';

let showRightMenu = ref(false);
let showLeftMenu = ref(false);

function openRight() {
	showRightMenu.value = !showRightMenu.value;
}

function openLeft() {
	showLeftMenu.value = !showLeftMenu.value;
}

</script>

<style lang="scss" scoped>
@use 'bottom-bar';

// transition animation slide up

.action-group-enter-active,
.action-group-leave-active {
	transition: transform 0.5s;

	button {
		transition: all 0.5s;
	}

	button p {
		transition: all 0.5s;
	}
}

.action-group-enter-from,
.action-group-leave-to {
	transform: translateY(0%);

	button:nth-child(1) {
		transform: translateY(0%);
	}

	&.menu-left {
		button {
			clip-path: circle(30% at 23% 50%);
		}
	}

	button {
		clip-path: circle(30% at 77% 50%);
	}
}

.action-group-enter-to,
.action-group-leave-from {
	transform: translateY(calc(-100% - 1rem));
}
</style>
