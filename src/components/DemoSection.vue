<template>
  <section id="demo">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">

            <v-col class="hidden-xs-only" sm="4">
              <v-img class="d-block ml-auto mr-auto" max-width="350px" src="@/assets/ill2.svg"/>
            </v-col>
            <v-col class="white--text text-left" cols="12" sm="8">
              <h1 class="font-weight-light display-2 mb-2">
                {{ this.$t('section.demo.title') }}
              </h1>
              <h1 class="font-weight-light">
                {{ this.$t('section.demo.subtitle') }}
              </h1>

              <v-btn
                  class="mt-4"
                  color="white"
                  href="https://github.com/rauschdo"
                  large
                  outlined
                  rounded
                  target="_blank"
              >
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                GitHub
              </v-btn>
            </v-col>

          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  name: 'DemoSection'
})
export default class DemoSection extends Vue {

}
</script>

<style scoped>
#demo {
  background-image: url("@/assets/bgDemo.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#demo .container,
#demo .row {
  height: 100%;
}
</style>
