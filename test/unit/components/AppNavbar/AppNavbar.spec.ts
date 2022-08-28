import { mount } from '@vue/test-utils'
import { describe, it, expect } from '@jest/globals'
import AppNavbar from '@/components/AppNavbar/AppNavbar.vue'

describe('>>> AppNavbar', () => {
  it('renders website navbar', () => {
    const wrapper = mount(AppNavbar)
    expect(wrapper.exists()).toBeTruthy()
  })
})
