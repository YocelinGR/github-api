import GitHub from './GitHub.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/GitHub', () => {
  const localVue = createLocalVue()
  it('GitHub is a vue instance', () => {
    const wrapper = shallowMount(GitHub, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('called Apollo mutations', () => {
    const mutate = jest.fn()
    const wrapper = mount(GitHub, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.mutationHeart()
    expect(mutate).toBeCalled()
  })

  it('Displays user starred repositories data', () => {
    const wrapper = shallowMount(GitHub, { localVue })
    wrapper.setData({
      repository: {
        id: "MDEwOlJlcG9zaXRvcnkxMzc5MjE1NjY="
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
