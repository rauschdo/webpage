<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2">
                {{ this.$t('placeholder_small') }}
              </h1>
              <h1 class="font-weight-light display-1 mb-3">
                {{ this.$t('placeholder_small') }}
              </h1>
              <v-row>
                <v-col class="d-flex align-center" cols="12">
                  <v-icon
                      class="mr-4"
                      color="primary"
                      size="60">
                    mdi-account-cowboy-hat-outline
                  </v-icon>
                  <p class="text-justify" v-html="$t('placeholder_big')"/>
                </v-col>
                <v-col class="d-flex align-center" cols="12">
                  <v-icon
                      class="mr-4"
                      color="primary"
                      size="60">
                    mdi-account-cowboy-hat-outline
                  </v-icon>
                  <p class="text-justify" v-html="$t('placeholder_big')"/>
                </v-col>
                <v-col class="d-flex align-center" cols="12">
                  <v-icon
                      class="mr-4"
                      color="primary"
                      size="60">
                    mdi-account-cowboy-hat-outline
                  </v-icon>
                  <p class="text-justify" v-html="$t('placeholder_big')"/>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="d-none d-md-flex" cols="12" md="5">
              <v-img
                  class="d-block ml-auto mr-auto"
                  max-width="400px"
                  src="@/assets/ill1.svg"
              />
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
  name: 'AboutSection'
})
export default class AboutSection extends Vue {

}
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
