import UserBio from './UserBio.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/UserBio', () => {
  const localVue = createLocalVue()
  it('UserBio is a vue instance', () => {
    const wrapper = shallowMount(UserBio, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Displays user starred repositories data', () => {
    const wrapper = shallowMount(UserBio, { localVue })
    wrapper.setData({
      user: {
         avatarUrl: "https://avatars0.githubusercontent.com/u/39833045?s=256&v=4",
         id: "MDQ6VXNlcjM5ODMzMDQ1",
         bio: "Front End Developer egresada de Laboratoria e\r\nIngeniera en Comunicaciones y Electrónica.\r\nApasionada por la programación y fiel creyente de\r\nla mejora continua",
         location: "Estado de México, CP 52928",
          status: {
            emoji: ":shipit:",
            message: "Studying "
          },
          followers: {
            totalCount: 18
          },
          following: {
            totalCount: 2
          },
          projects: {
            totalCount: 2
          },
          repositories: {
            totalCount: 42
          },
          starredRepositories: {
            totalCount: 2
          }
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
