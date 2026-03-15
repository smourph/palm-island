import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  it('renders the project title', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Palm Island')
    expect(wrapper.text()).toContain('Vue 3 + TypeScript + Vite starter')
  })
})
