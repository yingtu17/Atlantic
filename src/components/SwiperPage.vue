<template>
	<nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="4000">
		<nut-swiper-item v-for="(item, index) in product">
			<img :src="item.imgSrc" alt="" />
		</nut-swiper-item>
	</nut-swiper>
</template>
<script>
	import { reactive, toRefs } from "vue";
	
	import alco1 from "../assets/img/alco1.jpg"
	import alco2 from "../assets/img/alco2.jpg"
	import alco3 from "../assets/img/alco3.jpg"
	import alco4 from "../assets/img/alco4.jpg"

	export default {
		data() {
			return {
				product: [
					{
						imgSrc: alco1,
					},
					{
						imgSrc: alco2,
					},
					{
						imgSrc: alco3,
					},
					{
						imgSrc: alco4,
					},
				],
			};
		},
		setup() {
			const state = reactive({
				page: 2,
			});
			return { ...toRefs(state) };
		},
	};
</script>
<style lang="scss" scoped>
	.nut-swiper-item {
		line-height: 150px;
		img {
			width: 100%;
			height: 256px;
		}
	}
</style>
