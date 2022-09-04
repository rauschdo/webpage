<template>
  <div>
    <HomeSection/>
    <AboutSection/>
    <DownloadSection/>
    <ProjectSection/>
    <ContactSection/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import DownloadSection from "@/components/DemoSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import ContactSection from "@/components/ContactSection.vue";

@Component({
  name: 'MainPage',
  components: {
    HomeSection,
    AboutSection,
    DownloadSection,
    ProjectSection,
    ContactSection
  }
})
export default class MainPage extends Vue {

}
</script>

<style scoped>

</style>
