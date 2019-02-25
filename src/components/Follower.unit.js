import Follower from './Follower.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/Follower', () => {
  const localVue = createLocalVue()
  it('Follower is a vue instance', () => {
    const wrapper = shallowMount(Follower, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Displays user starred repositories data', () => {
    const wrapper = shallowMount(Follower, { localVue })
    wrapper.setData({
      user: {
        id: "MDQ6VXNlcjM5ODMzMDQ1",
        followers: {
          nodes: [
            {
              id: "MDQ6VXNlcjM5NTMzMTM0",
              login: "lindatablerosgessner",
              name: "Linda Tableros",
              avatarUrl: "https://avatars2.githubusercontent.com/u/39533134?s=64&v=4",
              bio: "",
              location: null
            }
          ]
        }
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
