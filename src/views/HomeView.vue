<script setup>
	import NavBar from "../components/NavBar.vue";
	import SwiperPageVue from "../components/SwiperPage.vue";
	import FooterPage from "../components/FooterPage.vue"
	import Noticebar from "../components/Noticebar.vue"
</script>

<template>
	<main>
		<div class=" w-full">
			<NavBar />
		</div>
		<div class="w-full h-full">
			<Noticebar />
			<SwiperPageVue />
			<div></div>
		</div>
		<div class="w-full">
			<FooterPage />
		</div>
	</main>
</template>


