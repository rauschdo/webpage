<template>
  <section id="hero">

    <v-parallax dark height="750" src="@/assets/bgHero.png">
      <v-row align="center" justify="center">
        <v-col cols="10">

          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <p class="text-h5 font-weight-bold mb-4">
                {{ this.$t('section.home.title') }}
              </p>

              <p class="text-h3 font-weight-bold mb-4">
                {{ this.$t('section.home.title_2') }}
              </p>

              <p class="text-h4 font-weight-light">
                {{ this.$t('section.home.subtitle') }}
              </p>

              <v-btn
                  class="mt-5"
                  dark
                  large
                  outlined
                  rounded
                  @click="$vuetify.goTo('#features')"
              >
                {{ this.$t('section.home.button_text') }}
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col class="hidden-sm-and-down" cols="12" md="6" xl="4"></v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-parallax>

    <v-container id="features" class="mt-2" fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
                v-for="(feature, i) in features"
                :key="i"
                class="text-center"
                cols="12"
                sm="4"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                    :class="{ up: hover }"
                    :elevation="hover ? 10 : 4"
                    class="card"
                    shaped
                >
                  <v-btn
                      :class="{ 'zoom-efect': hover }"
                      :style="'background-color: var(--v-primary-base);'"
                      class="d-block ml-auto mr-auto"
                      color="white"
                      height="88"
                      icon
                      width="88"
                  >
                    <v-icon size="64">{{ feature.iconId }}</v-icon>
                  </v-btn>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

  </section>
</template>

<script>
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  name: 'HomeSection'
})
export default class HomeSection extends Vue {
  features = [
    {
      iconId: 'mdi-head-lightbulb-outline',
      title: this.$t('section.features.feature_one_title'),
      text: this.$t('section.features.feature_one_text')
    },
    {
      iconId: 'mdi-account-group-outline',
      title: this.$t('section.features.feature_two_title'),
      text: this.$t('section.features.feature_two_text')
    },
    {
      iconId: 'mdi-code-json',
      title: this.$t('section.features.feature_three_title'),
      text: this.$t('section.features.feature_three_text')
    },
  ]
}
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
