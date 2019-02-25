import StarsComponent from './StarsComponent.vue'
import { createLocalVue } from '@vue/test-utils'

describe('@components/StarsComponent', () => {
  const localVue = createLocalVue()
  it('StarsComponents is a vue instance', () => {
    const wrapper = shallowMount(StarsComponent, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('called Apollo mutations', () => {
    const mutate = jest.fn()
    const wrapper = mount(StarsComponent, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
      },
    })
    wrapper.vm.removeStar()
    expect(mutate).toBeCalled()
  })

  it('Displays user starred repositories data', () => {
    const wrapper = shallowMount(StarsComponent, { localVue })
    wrapper.setData({
      user: {
        starredRepositories: {
          totalCount: 2,
          edges: [
            {
              starredAt: '2019-02-15T15:45:51Z',
              node: {
                id: 'MDEwOlJlcG9zaXRvcnk5MjExMjMwOA==',
                name: 'javascript',
                description: null,
                owner: {
                  login: 'Jonhks',
                  id: 'MDQ6VXNlcjI1MzI4NjM1',
                },
                createdAt: '2017-05-23T00:43:46Z',
                url: 'https://github.com/Jonhks/javascript',
                repositoryTopics: {
                  nodes: [],
                },
              },
            },
            {
              starredAt: '2019-02-21T19:32:22Z',
              node: {
                id: 'MDEwOlJlcG9zaXRvcnkxNTIyODY3NzE=',
                name: 'YocelinGR.github.io',
                description:
                  'En el presente repositorio se presenta el portafolio personal de quien suscribe, en él se vierte la información personal y  de contacto, el background y los principales proyectos en los que se a trabajado. ',
                owner: {
                  login: 'YocelinGR',
                  id: 'MDQ6VXNlcjM5ODMzMDQ1',
                },
                createdAt: '2018-10-09T16:44:16Z',
                url: 'https://github.com/YocelinGR/YocelinGR.github.io',
                repositoryTopics: {
                  nodes: [
                    {
                      id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzk0OTA1OTg=',
                      resourcePath: '/topics/javascript',
                      url: 'https://github.com/topics/javascript',
                      topic: {
                        id: 'MDU6VG9waWNqYXZhc2NyaXB0',
                        name: 'javascript',
                      },
                    },
                    {
                      id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzk0OTA2MDA=',
                      resourcePath: '/topics/jest-tests',
                      url: 'https://github.com/topics/jest-tests',
                      topic: {
                        id: 'MDU6VG9waWNqZXN0LXRlc3Rz',
                        name: 'jest-tests',
                      },
                    },
                    {
                      id: 'MDE1OlJlcG9zaXRvcnlUb3BpYzk0OTA2MDI=',
                      resourcePath: '/topics/bootstrap4',
                      url: 'https://github.com/topics/bootstrap4',
                      topic: {
                        id: 'MDU6VG9waWNib290c3RyYXA0',
                        name: 'bootstrap4',
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
