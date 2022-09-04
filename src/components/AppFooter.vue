<template>
  <v-footer dark padless>
    <v-card class="secondary white--text text-center" flat tile>
      <v-card-text>
        <v-btn
            v-for="(deeplink, i) in mediaDeeplinks"
            :key="i"
            :href="deeplink.href"
            class="mx-4 white--text"
            icon
            target="_blank"
        >
          <v-icon size="24px">{{ deeplink.iconName }}</v-icon>
        </v-btn>
      </v-card-text>

      <!--      <v-card-text class="white&#45;&#45;text pt-0">-->
      <!--        {{ this.$t('placeholder_big') }}-->
      <!--      </v-card-text>-->

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Dominik Rausch</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {MEDIA_LINKS} from "@/constants";

@Component({
  name: 'AppFooter'
})
export default class AppFooter extends Vue {
  mediaDeeplinks = MEDIA_LINKS
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
