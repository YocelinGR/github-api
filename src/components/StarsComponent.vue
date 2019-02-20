<template>
<div>
  <h4>REPOSITORIES</h4>
  <hr>
  <div v-for="repo in user.starredRepositories.edges" :key="repo.starredAt">
    <span>{{ repo.node.owner.login}} / </span>
    <a :href="repo.node.url">{{ repo.node.name}}</a>
    <p>{{ repo.starredAt }}</p>
    <hr>
  </div>
</div>
</template>
<script>
import gql from 'graphql-tag';

const starredByUser = gql`
  query user {
  user(login: "YocelinGR"){
    id
    starredRepositories(first:2){
      totalCount
      edges{
        starredAt
        node{
          id
          name
          owner{
            login
            id
          }
          createdAt
          defaultBranchRef{
            name
            prefix
          }
          url
        }
      }
    }
  }
}
`;
export default {
  data: ()=>({
    user: {}
  }),
  apollo: {
    user: {
      query: starredByUser,
    }
  }
}
</script>
<style lang="scss" module>
@import '@design';


</style>
