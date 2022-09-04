<template>
  <section id="contact" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">
                {{ this.$t('section.contact.title') }}
              </h1>

              <h3 class="font-weight-light mt-3" v-html="$t('section.contact.subtitle')"/>

              <h3 class="font-weight-light mt-3">
                {{ this.$t('section.contact.contact_via') }}
              </h3>

              <h3 class="font-weight-light mt-3">
                {{ this.$t('section.contact.phone_number') }}
              </h3>

              <h3 class="font-weight-light" v-html="$t('section.contact.email_address')"/>

            </v-col>

            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :label="$t('section.contact.form_name')"
                    :rules="[nameRules.required]"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :label="$t('section.contact.form_email')"
                    :rules="[emailRules.required, emailRules.validity]"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :label="$t('section.contact.form_message')"
                    :rules="[textAreaRules.required, textAreaRules.length]"
                    required/>

                <v-btn
                    :dark="valid"
                    :disabled="!valid"
                    block
                    class="mt-3"
                    color="primary"
                    rounded
                    @click="submit"
                >
                  {{ this.$t('section.contact.form_button') }}
                </v-btn>
              </v-form>
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
import {CONSTANTS} from "@/constants";

@Component({
  name: 'ContactSection'
})
export default class ContactSection extends Vue {
  valid = true

  name = ""
  nameRules = {
    required: (v: string) => !!v || 'Bitte geben Sie einen Namen ein'
  };

  email = ""
  emailRules = {
    required: (v: string) => !!v || 'Bitte geben Sie eine E-Mail ein',
    validity: (v: string) =>
        CONSTANTS.EMAIL_VALIDATION_REGEX.test(v) || 'Eingabe entspricht keinem Email Format'
  };

  textArea = ""
  textAreaRules = {
    required: (v: string) => !!v || 'Bitte geben Sie eine Nachricht ein',
    length: (v: string) => (v && v.length >= 10) || "Nachricht muss aus mindestens 10 Zeichen bestehen",
  };

  lazy = false

  submit() {
    window.open(`mailto:email@example.com?Subject=Kontaktanfrage: ${this.name}&body=${this.email}\r\n${this.textArea}`)
  }
}
</script>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>
