<template>
  <div>
    <section v-for="repo in user.repositories.nodes" :key="repo.id">
      <p>{{ repo.name}}</p>
      <span v-if="repo.repositoryTopics.nodes">
        <span v-for="topic in repo.repositoryTopics.nodes" :key="topic.id">
          {{topic.topic.name}}
        </span>
      </span>
      <span>{{ repo.createdAt }}</span>
      <button @click="starredRepo(repo.id)">Star</button>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const overviewTag = gql`
  query user {
  user(login: "YocelinGR"){
    id
    repositories(last: 20){
      nodes{
        id
        name
        createdAt
        repositoryTopics(first: 3){
          nodes{
            id
            resourcePath
            url
            topic{
              id
              name
            }
          }
        }
      }
    }
  }
}
`;
const addStar = gql`
  mutation addStar($input: AddStarInput!){
  addStar(input: $input) {
    clientMutationId
    starrable{
      id
    }
  }
}
`;
export default {
  data: () => ({
    user: {}
  }),
  methods: {
    starredRepo(id){
      const varStar = {
              starrableId: id,
              clientMutationId:  "MDQ6VXNlcjM5ODMzMDQ1"
            };
      this.$apollo.mutate({
        mutation: addStar,
        variables: {
            input: varStar,
        }
      })
      console.log(id);
    }
  },
  apollo: {
    user: {
      query: overviewTag
    }
  }
}
</script>

<style>
  section {
    border: 1px rgb(141, 134, 134) solid;
    width: 80%;
    height: 100px;;
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 15px;
    font-size: 16px;
    color: rgb(64, 103, 212);
    font-weight: 600;
    border-radius: 5px;
  }
  span {
    color: rgb(100, 97, 97);
    font-weight: 600;
  }
</style>
