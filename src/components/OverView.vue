<template>
  <div>
    <section v-for="repo in user.repositories.nodes" :key="repo.id">
      {{ repo.name}}
      <p v-if="repo.repositoryTopics.nodes">
        <span v-for="topic in repo.repositoryTopics.nodes" :key="topic.id">
          {{topic.topic.name}}
        </span>
      </p>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const overviewTag = gql`
  query user {
  user(login: "YocelinGR"){
    id
    repositories(first: 6){
      nodes{
        id
        name
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
export default {
  data: () => ({
    user: {}
  }),
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
    width: 45%;
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
