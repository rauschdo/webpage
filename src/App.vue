<template>
  <v-app class="root">
    <AppNavigation :color="color" :flat="flat"/>

    <v-main class="pt-0 containerMain">
      <router-view/>
    </v-main>

    <v-scale-transition>
      <v-btn
          v-show="fab"
          v-scroll="onScroll"
          bottom
          color="secondary"
          dark
          fab
          fixed
          right
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

    <AppFooter/>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import AppFooter from "@/components/AppFooter.vue";
import AppNavigation from "@/components/AppNavigation.vue";

@Component({
  components: {
    AppNavigation,
    AppFooter
  }
})
export default class App extends Vue {
  fab = false
  color = ""
  flat = null

  onScroll(e: any) {
    if (typeof window === "undefined") return;
    const top = window.scrollY || e.target.scrollTop || 0;
    this.fab = top > 60;
  }

  toTop() {
    this.$vuetify.goTo(
        `#containerMain`,
        {
          container: '#root',
          duration: 750,
          offset: 100,
          easing: 'easeInOutQuad'
        }
    )
  }
}
</script>

<style lang="scss">
.v-main {
  background-image: url("@/assets/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
