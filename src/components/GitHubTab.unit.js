import GitHubTab from './GitHubTab.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/GitHubTab', () => {
  const localVue = createLocalVue()
  it('GitHubTab is a vue instance', () => {
    const wrapper = shallowMount(GitHubTab, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('Renders correclty changing props', () => {
    const wrapper = shallowMount(GitHubTab, { localVue })
    expect(wrapper.props().totalCount.followers).toBe(0)
    const wrappperModify = mount(GitHubTab, {
      propsData: {
        totalCount: {
          followers: 18,
        }
      }
    })
    expect(wrappperModify.props().totalCount.followers).toBe(18)
  })
  it('Active tab by default is the first one', () => {
    const wrapper = shallowMount(GitHubTab, { localVue })
     expect(wrapper.find('div.active').html()).toContain('Overview');

  })
  it('Move active class depending on tab selected', () => {
    const wrapper = shallowMount(GitHubTab, { localVue })
    wrapper.vm.setActive({
        name: "Stars",
        id: 3,
        isActive: false,
      });
     expect(wrapper.find('div.active').html()).toContain('Stars');

  })
})
