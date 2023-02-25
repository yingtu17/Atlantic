<template>
	<nut-audio url="https://cdn.pixabay.com/download/audio/2022/10/01/audio_a41d26201f.mp3?filename=abstract-style-121455.mp3" :muted="muted" :autoplay="autoplay" :loop="true" type="icon"></nut-audio>
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
