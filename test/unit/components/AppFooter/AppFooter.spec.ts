import { mount } from '@vue/test-utils'
import { describe, it, expect } from '@jest/globals'
import AppFooter from '@/components/AppFooter/AppFooter.vue'

describe('>>> AppFooter', () => {
  it('renders website footer', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.exists()).toBeTruthy()
  })
})
