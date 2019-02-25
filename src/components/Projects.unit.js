import Projects from './Projects.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/Projects', () => {
  const localVue = createLocalVue()
  it('Projects is a vue instance', () => {
    const wrapper = shallowMount(Projects, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('called Apollo newCard mutation', () => {
    const mutate = jest.fn()
    const wrapper = mount(Projects, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.newCard()
    expect(mutate).toBeCalled()
  })

  it('called Apollo newColumn mutation', () => {
    const mutate = jest.fn()
    const wrapper = mount(Projects, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.newColumn()
    expect(mutate).toBeCalled()
  })
})
