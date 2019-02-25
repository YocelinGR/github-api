import GitHubNav from './GitHubNav.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/GitHubNav', () => {
  const localVue = createLocalVue()
  it('GitHubNav is a vue instance', () => {
    const wrapper = shallowMount(GitHubNav, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Displays user profile', () => {
    const wrapper = shallowMount(GitHubNav, { localVue })
    wrapper.setData({
      user: {
        avatarUrl: "https://avatars3.githubusercontent.com/u/39833045?s=30&v=4",
        id: "MDQ6VXNlcjM5ODMzMDQ1"
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
