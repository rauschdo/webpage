<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        color="primary"
        dark
        temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar rounded>
            <v-img alt="Logo" src="@/assets/logo.png"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">rauschdo</v-list-item-title>
            <v-list-item-subtitle>DEV</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider/>

      <v-list dense>
        <v-list-item
            v-for="([icon, text, link], i) in items"
            :key="i"
            link
            @click="navigate(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        :class="{ expand: flat }"
        :color="color"
        :flat="flat"
        app
        class="px-4"
        dark
    >
      <v-toolbar-title>
        <v-img max-width="50px" src="@/assets/logo.png"/>
      </v-toolbar-title>
      <LocaleSwitcher class="ms-4" style="max-width: 400px"/>
      <v-spacer/>
      <v-app-bar-nav-icon
          v-if="isXs"
          class="mr-4"
          @click.stop="drawer = !drawer"
      />
      <div v-else>
        <v-btn text @click="navigate('#hero')">
          <span class="mr-2">
            {{ this.$t('navigating_item_title_home') }}
          </span>
        </v-btn>
        <v-btn text @click="navigate('#features')">
          <span class="mr-2">
            {{ this.$t('navigating_item_title_feature') }}
          </span>
        </v-btn>
        <v-btn text @click="navigate('#demo')">
          <span class="mr-2">
            {{ this.$t('navigating_item_title_download') }}
          </span>
        </v-btn>
        <v-btn text @click="navigate('#project')">
          <span class="mr-2">
            {{ this.$t('navigating_item_title_projects') }}
          </span>
        </v-btn>
        <v-btn outlined rounded text @click="navigate('#contact')">
          <span class="mr-2">
            {{ this.$t('navigating_item_title_contact') }}
          </span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop, Watch} from "vue-property-decorator";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

@Component({
  name: 'AppNavigation',
  components: {
    LocaleSwitcher
  }
})
export default class AppNavigation extends Vue {
  @Prop({type: String}) readonly color!: string;
  @Prop({type: Boolean}) readonly flat!: boolean;

  drawer = false
  isXs = false
  items = [
    [
      "mdi-home-outline",
      this.$t('navigating_item_title_home').toString(),
      "#hero"
    ],
    [
      "mdi-head-lightbulb-outline",
      this.$t('navigating_item_title_feature').toString(),
      "#features"
    ],
    [
      "mdi-download-box-outline",
      this.$t('navigating_item_title_download').toString(),
      "#demo"
    ],
    [
      "mdi-code-json",
      this.$t('navigating_item_title_projects').toString(),
      "#project"
    ],
    [
      "mdi-email-outline",
      this.$t('navigating_item_title_contact').toString(),
      "#contact"
    ],
  ]

  @Watch('isXs')
  xsChanged(newValue: boolean) {
    if (!newValue) {
      if (this.drawer) {
        this.drawer = false;
      }
    }
  }

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, {passive: true});
  }

  onResize() {
    this.isXs = window.innerWidth < 850;
  }

  navigate(target: string) {
    this.$vuetify.goTo(
        target,
        {
          duration: 750,
          offset: 100,
          easing: 'easeInOutQuad'
        }
    )
  }
}
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
