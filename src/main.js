import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import i18n from "./locales";
import NutUI from "@nutui/nutui";

import "@nutui/nutui/dist/style.css";
import "./assets/main.css";

const app = createApp(App);

app.use(NutUI);
app.use(i18n);
app.use(router);
app.mount("#app");
