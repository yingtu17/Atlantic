<template>
	<nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="4000">
		<nut-swiper-item v-for="(item, index) in product">
			<img :src="item.imgSrc" alt="" />
		</nut-swiper-item>
	</nut-swiper>
</template>
<script>
	import { reactive, toRefs } from "vue";
	export default {
		data() {
			return {
				product: [
					{
						imgSrc: "https://cdn.pixabay.com/photo/2014/10/22/17/50/bar-498420_960_720.jpg",
					},
					{
						imgSrc: "https://cdn.pixabay.com/photo/2022/09/20/05/44/wine-7467085_960_720.jpg",
					},
					{
						imgSrc: "https://cdn.pixabay.com/photo/2014/07/31/21/37/bar-406884_960_720.jpg",
					},
					{
						imgSrc: "https://cdn.pixabay.com/photo/2015/07/23/19/16/alcohol-857380_960_720.jpg",
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
