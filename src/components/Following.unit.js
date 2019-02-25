import Following from './Following.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/Following', () => {
  const localVue = createLocalVue()
  it('Following is a vue instance', () => {
    const wrapper = shallowMount(Following, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Displays repositories that user follows', () => {
    const wrapper = shallowMount(Following, { localVue })
    wrapper.setData({
      user: {
        id: "MDQ6VXNlcjM5ODMzMDQ1",
        following: {
          nodes: [
            {
              id: "MDQ6VXNlcjE1MDMzMA==",
              login: "getify",
              name: "Kyle Simpson",
              avatarUrl: "https://avatars0.githubusercontent.com/u/150330?s=64&v=4",
              bio: "I teach JavaScript and I'd love to come help your team's developers. If that's interesting to you, please reach out to me getify@gmail.com.",
              location: "Austin, TX"
            }
          ]
        }
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
