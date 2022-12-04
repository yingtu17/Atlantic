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
						imgSrc: "http://www.py3study.com/Public/images/article/thumb/random/158.jpg",
					},
					{
						imgSrc: "http://www.py3study.com/Public/images/article/thumb/random/159.jpg",
					},
					{
						imgSrc: "http://www.py3study.com/Public/images/article/thumb/random/160.jpg",
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
