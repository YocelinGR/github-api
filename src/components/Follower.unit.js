import Follower from './Follower.vue'
import { createLocalVue } from '@vue/test-utils'
import gql from 'graphql-tag'
import * as UserType from '../graphql/models/user.type.js'
import * as Schema from '../../schema.gql'
import graphql from 'graphql'

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
  it('Should have an id field of type string in followers query', () =>{
    const followers = gql`
      query user {
      user(login: "YocelinGR"){
        id
        followers(first: 20) {
          nodes {
            id
            login
            name
            avatarUrl(size: 64)
            bio
            location
          }
        }
      }
    }
    `;
    const query = jest.fn(async () => {
      await followers
    })
    const wrapper = mount(Follower, {
      mocks: {
        $apollo: {
          query,
        },
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  it('Testing schema', () => {
    let userFields = UserType.ObjectType.getFields();
    expect(userFields.username.type.toString()).toBe('String!');
  })
  it('Testing schema', () => {
    let schema = Schema;
    // expect(schema['__typeMap']).toBeDefined('Query');
    // // done();
    console.log(schema);
  })
})
