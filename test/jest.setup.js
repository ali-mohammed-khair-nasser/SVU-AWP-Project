import Vue from 'vue'
import { config } from '@vue/test-utils'

Vue.config.silent = true
config.stubs['nuxt-link'] = true
config.stubs['no-ssr'] = true
config.mocks = {
  $t: i => i,
  localePath: i => i,
  $i18n: {
    locale: 'en'
  }
}
