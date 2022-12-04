import { createI18n } from "vue-i18n";

import ru from "./ru.json";
import zh from "./zh.json";

const i18n = createI18n({
	locale: "ru",
	messages: {
		zh: zh,
		ru: ru,
	},
});

export default i18n;
