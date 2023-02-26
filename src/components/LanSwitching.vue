<template>
	<main>
		<div>
			<nut-cell is-link @click="showRound = true">
				<span class="text-xl">{{ $t("language") }}</span>
			</nut-cell>
			<nut-popup position="top" round :style="{ height: '40%' }" v-model:visible="showRound">
				<div class="w-full flex flex-col justify-center items-center">
					<div @click="handEvent(0)" class="flex">
						<img class="w-28 h-24" src="../assets/kazakhstan.png" />
					</div>
					<div @click="handEvent(1)" class="flex">
						<img class="w-28 h-24" src="../assets/united-kingdom.png" />
					</div>
					<div @click="handEvent(2)" class="flex">
						<img class="w-28 h-24" src="../assets/china.png" />
					</div>
				</div>
			</nut-popup>
		</div>
	</main>
</template>

<script>
	import { reactive, toRefs } from "vue";

	export default {
		props: {},
		setup() {
			const state = reactive({
				showRound: false,
			});
			return { ...toRefs(state) };
		},
		methods: {
			handEvent(type) {
				if (type == 0) {
					this.$i18n.locale = "kz"; //这个代码负责实时切换语言
					this.showRound = false;
				} else if (type == 1) {
					this.$i18n.locale = "en"; //这个代码负责实时切换语言
					this.showRound = false;
				} else if (type == 2) {
					this.$i18n.locale = "zh"; //这个代码负责实时切换语言
					this.showRound = false;
				}
			},
		},
	};
</script>
<style scoped>
	.nut-cell {
		margin: 0;
	}
</style>
