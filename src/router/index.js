import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../components/NotFound.vue";
import PromptPage from "../components/PromptPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/prompt",
			name: "prompt",
			component: PromptPage,
		},
		{
			path: "/:pathMatch(.*)*",
			name: "notfound",
			component: NotFound,
		},
	],
});

export default router;
