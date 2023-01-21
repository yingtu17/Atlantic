<template>
	<nut-cell>
		<div class="w-full flex items-center justify-between">
			<span @click="handleClick3">
				<label><nut-icon name="horizontal-n"></nut-icon></label>
			</span>
			<span class="text-xl"> Atlantic</span>
			<span class="flex items-center gap-4">
				<LanSwitching />
				<AudioVue />
			</span>
		</div>
	</nut-cell>
	<nut-popup position="left" v-model:visible="show3" :style="{ width, height }">
		112423
	</nut-popup>
</template>
<script>
	import { reactive, toRefs } from "vue";
	import AudioVue from "./Audio.vue";
	import LanSwitching from "./LanSwitching.vue";

	export default {
		components: {
			AudioVue,
			LanSwitching,
		},
		setup() {
			const state = reactive({
				show3: false,
				width: "80%",
				height: "100%",
				navs: [],
			});

			const handleClick3 = () => {
				state.show3 = true;
			};

			const handleClick4 = (msg) => {};

			return {
				...toRefs(state),
				handleClick3,
				handleClick4,
			};
		},
	};
</script>
<style scoped></style>
