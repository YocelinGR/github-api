import GitHubTab from './GitHubTab.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/GitHubTab', () => {
  const localVue = createLocalVue()
  it('GitHubTab is a vue instance', () => {
    const wrapper = shallowMount(GitHubTab, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
