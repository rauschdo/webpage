import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {getBrowserLocale, supportedLocalesInclude} from "@/utility/i18nUtil";
import {LOCALES} from "@/enum/SupportedLocales";

Vue.use(VueI18n)

const defaultFallbackLocale = LOCALES[0].code // German
const startingLocale: string = getStartingLocale()

export function getStartingLocale(): string {
    const browserLocale = getBrowserLocale({countryCodeOnly: true})
    if (browserLocale && supportedLocalesInclude(browserLocale)) {
        return browserLocale
    } else {
        return process.env.VUE_APP_I18N_LOCALE || defaultFallbackLocale
    }
}

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    // eslint-disable-next-line @typescript-eslint/ban-types
    const messages: { [key: string]: {} } = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

// Could check for browser locale but just start with 'de' and load from cookie later
export default new VueI18n({
    locale: startingLocale,
    fallbackLocale: defaultFallbackLocale,
    messages: loadLocaleMessages()
})
