<template>
	<nut-audio url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav" :muted="muted" :autoplay="autoplay" :loop="true" type="icon"></nut-audio>
</template>
<script>
	import { reactive, toRefs } from "vue";
	export default {
		setup() {
			const data = reactive({
				muted: false,
				autoplay: false,
			});
			return {
				...toRefs(data),
			};
		},
	};
</script>
