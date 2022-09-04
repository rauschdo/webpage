import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import de from "vuetify/src/locale/de";
import en from "vuetify/src/locale/en";
import {getStartingLocale} from "@/i18n";

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: {de, en},
        current: getStartingLocale(),
    },
    icons: {
        iconfont: "mdi"
    },
    theme: {
        // https://github.com/vuetifyjs/vuetify/issues/8149#issuecomment-738088827
        // https://github.com/vuetifyjs/vuetify/issues/11783#issuecomment-866368330
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: "#283e79",
                secondary: "#023047",
                accent: "#FB8500"
            }
        }
    }
});
