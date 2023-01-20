<template>
	<nut-cell>
		<div class="w-full flex items-center justify-between">
			<span @click="handleClick3">
				<label><nut-icon name="horizontal-n"></nut-icon></label>
			</span>
			<span class=""> Atlantic</span>
			<span class="flex items-center gap-4">
				<LanSwitching />
				<AudioVue />
			</span>
		</div>
	</nut-cell>
	<nut-popup position="left" v-model:visible="show3" :style="{ width, height }">
		<nut-sidenavbar :show="show3">
			<nut-subsidenavbar title="图像理解" ikey="3" :open="false">
				<nut-sidenavbaritem ikey="4" title="菜品识别"></nut-sidenavbaritem>
				<nut-sidenavbaritem ikey="5" title="拍照购"></nut-sidenavbaritem>
			</nut-subsidenavbar>
			<nut-subsidenavbar title="智能城市AI" ikey="6">
				<nut-sidenavbaritem ikey="7" title="企业风险预警模型"></nut-sidenavbaritem>
				<nut-sidenavbaritem ikey="8" title="水质量检测"></nut-sidenavbaritem>
				<nut-subsidenavbar title="人体识别" ikey="9">
					<nut-sidenavbaritem ikey="10" title="人体检测"></nut-sidenavbaritem>
					<nut-sidenavbaritem ikey="11" title="细粒度人像分割"></nut-sidenavbaritem>
				</nut-subsidenavbar>
			</nut-subsidenavbar>
			<nut-subsidenavbar title="自然语言处理" ikey="12">
				<nut-sidenavbaritem ikey="13" title="词法分析"></nut-sidenavbaritem>
				<nut-sidenavbaritem ikey="14" title="句法分析"></nut-sidenavbaritem>
			</nut-subsidenavbar>
		</nut-sidenavbar>
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
				setTimeout(() => {
					state.navs = [
						{
							id: 16,
							name: "asyc abc16",
							arr: [{ pid: 16, id: 17, name: "abc16-id17" }],
						},
						{
							id: 17,
							name: "asyc abc17",
							arr: [{ pid: 17, id: 18, name: "abc17-id18" }],
						},
					];
				}, 2000);
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
