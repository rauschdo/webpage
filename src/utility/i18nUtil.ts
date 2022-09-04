/**
 * Currently only relevant for [Categories]
 * @param serverValue
 * @param lang
 */
import {LOCALES, SupportedLocale} from "@/enum/SupportedLocales";

export const getSupportedLocales = () => {
    const annotatedLocales: Array<SupportedLocale> = []

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const mLocale: SupportedLocale of LOCALES) {
        annotatedLocales.push({
            code: mLocale.code,
            name: LOCALES.find((locale: SupportedLocale) => locale.code === mLocale.code)?.name ?? ''
        })
    }
    return annotatedLocales
}

export const supportedLocalesInclude = (locale: string) => {
    return LOCALES.find((supportedLocale: SupportedLocale) => supportedLocale.code === locale)
}

export const getBrowserLocale = (options = {}) => {
    const defaultOptions = {countryCodeOnly: false}
    const opt = {...defaultOptions, ...options}
    const navigatorLocale =
        navigator.languages !== undefined
            ? navigator.languages[0]
            : navigator.language
    if (!navigatorLocale) {
        return undefined
    }
    const trimmedLocale = opt.countryCodeOnly
        ? navigatorLocale.trim().split(/-|_/)[0]
        : navigatorLocale.trim()
    return trimmedLocale
}
