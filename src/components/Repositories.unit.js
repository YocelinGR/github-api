import Repositories from './Repositories.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/Repositories', () => {
  const localVue = createLocalVue()
  it('Repositories is a vue instance', () => {
    const wrapper = shallowMount(Repositories, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('called Apollo addStar mutation', () => {
    const mutate = jest.fn()
    const wrapper = mount(Repositories, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.addStar()
    expect(mutate).toBeCalled()
  })

  it('called Apollo removingStar mutation', () => {
    const mutate = jest.fn()
    const wrapper = mount(Repositories, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.removingStar()
    expect(mutate).toBeCalled()
  })

  it('Displays user starred repositories data', () => {
    const wrapper = shallowMount(Repositories, { localVue })
    wrapper.setData({
      user: {
        id: "MDQ6VXNlcjM5ODMzMDQ1",
        repositories: {
          nodes: [
            {
              id: "MDEwOlJlcG9zaXRvcnkxNzE3NjAwMjE=",
              name: "graphql-subscriptions-server-practice",
              url: "https://github.com/YocelinGR/graphql-subscriptions-server-practice",
              viewerHasStarred: false,
              createdAt: "2019-02-20T22:35:48Z",
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
