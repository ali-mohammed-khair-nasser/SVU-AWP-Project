<template>
  <header>
    <div :class="[$i18n.locale === 'ar' ? 'rtl flex-row-reverse lg:flex-row' : 'ltr flex-row', 'header-container']">
      <div class="left-menu">
        <ul class="icons-area">
          <li>
            <div class="dropdown">
              <outline-location-marker-icon />{{ $t('common.Locate') }}
            </div>
          </li>
          <li>
            <div class="dropdown">
              <outline-phone-icon />{{ $t('common.Contact') }}
            </div>
          </li>
        </ul>
      </div>
      <div class="logo-area">
        <nuxt-link :to="localePath('/')">
          <img src="@/assets/images/emirates-islamic-logo.png" alt="Emirates islamic logo">
        </nuxt-link>
      </div>
      <div class="right-menu">
        <ul class="icons-area">
          <li>
            <div class="dropdown">
              <outline-translate-icon />({{ $t('common.language-name') }})
              <div class="options">
                <ul>
                  <li
                    v-for="(locale, index) in $i18n.locales"
                    :key="index"
                    :class="locale.name === $t('common.language-name') ? 'selected' : ''"
                    @click.prevent="switchLanguage(locale.code)"
                  >
                    {{ locale.name }}
                    <solid-check-icon
                      v-if="locale.name === $t('common.language-name')"
                      class="absolute right-1 -top-1 w-2 h-2"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <outline-user-icon />{{ $t('common.Login') }}
            </div>
          </li>
          <li><outline-search-icon /></li>
          <li><outline-menu-icon /></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import './AppNavbar.scss'
import { defineComponent, useRouter, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const router = useRouter()
    const { app } = useContext()

    const switchLanguage = (event: string) => {
      setTimeout(() => {
        router.replace(app.switchLocalePath(event))
      }, 400)
    }

    return { switchLanguage }
  }
})
</script>
