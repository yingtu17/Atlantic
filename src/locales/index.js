import { createI18n } from "vue-i18n";

import kz from "./kz.json"
import en from "./en.json";
import zh from "./zh.json";

const i18n = createI18n({
	locale: "kz",
	messages: {
		kz: kz,
		zh: zh,
		en: en,
	},
});

export default i18n;
