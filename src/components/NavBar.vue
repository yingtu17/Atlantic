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
		<nut-side-navbar>
			<nut-sub-side-navbar title="智能城市AI" ikey="6">
				<nut-sub-side-navbar title="人体识别1" ikey="9">
					<nut-side-navbar-item ikey="10" title="人体检测1"></nut-side-navbar-item>
					<nut-side-navbar-item ikey="11" title="细粒度人像分割1"></nut-side-navbar-item>
				</nut-sub-side-navbar>
				<nut-sub-side-navbar title="人体识别2" ikey="12">
					<nut-side-navbar-item ikey="13" title="人体检测2"></nut-side-navbar-item>
					<nut-side-navbar-item ikey="14" title="细粒度人像分割2"></nut-side-navbar-item>
				</nut-sub-side-navbar>
			</nut-sub-side-navbar>
		</nut-side-navbar>
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

			return {
				...toRefs(state),
				handleClick3,
			};
		},
	};
</script>
<style scoped></style>
