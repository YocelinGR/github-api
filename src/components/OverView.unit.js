import OverView from './OverView.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/OverView', () => {
  const localVue = createLocalVue()
  it('OverView is a vue instance', () => {
    const wrapper = shallowMount(OverView, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Displays overview first user´s repos', () => {
    const wrapper = shallowMount(OverView, { localVue })
    wrapper.setData({
      user: {
        id: "MDQ6VXNlcjM5ODMzMDQ1",
        repositories: {
          nodes: [
            {
              id: "MDEwOlJlcG9zaXRvcnkxMzU4NDM4NzQ=",
              name: "TriviaPreAdmision",
              url: "https://github.com/YocelinGR/TriviaPreAdmision",
              repositoryTopics: {
                nodes: []
              }
            }
          ]
        }
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
