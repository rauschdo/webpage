<template>
  <v-select
      v-model="selectedLocale"
      v-bind="$attrs"
      :items="locales"
      :label="$t('label_language_selector')"
      color="white"
      dense
      hide-details
      item-text="name"
      item-value="code"
      outlined
      prepend-icon="mdi-translate"
      @change="changeLocale"/>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {getSupportedLocales} from "@/utility/i18nUtil";
import {SupportedLocale} from "@/enum/SupportedLocales";

@Component({
  name: 'LocaleSwitcher'
})
export default class LocaleSwitcher extends Vue {

  selectedLocale = this.$i18n.locale

  get locales(): Array<SupportedLocale> {
    return getSupportedLocales()
  }

  changeLocale() {
    const locale = this.selectedLocale

    // Change on V18N
    this.$i18n.locale = locale

    // Change on vuetify
    this.$vuetify.lang.current = locale
  }
}
</script>

<style lang="scss">

</style>
