<template>
  <div>
    <div v-for="repo in user.repositories.nodes" :key="repo.id" class="repos row">
      <div class="col-md-6">
        <a :href="repo.url" class="repoName">{{ repo.name}}</a>
        <br>
        <span v-if="repo.repositoryTopics.nodes" class="topics">
          <span v-for="topic in repo.repositoryTopics.nodes" :key="topic.id">
            {{topic.topic.name}}
          </span>
        </span>
        <span class="topics">{{ repo.createdAt }}</span>
      </div>
      <div class="col-md-3">
        <button @click="starredRepo(repo.id)" class="btn btn-light" @dblclick="removeStar(repo.id)"><i :class="repo.viewerHasStarred ? 'fas fa-star' : 'far fa-star'"></i></button>
      </div>
    </div>
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
        url
        url
        viewerHasStarred
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
const removingStar = gql`
  mutation removeStar($input: RemoveStarInput!){
  removeStar(input: $input) {
    clientMutationId
    starrable{
      id
    }
  }
}
`;
export default {
  data: () => ({
    user: {},
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
      console.log('added');
    },
    removeStar(id){
      const varStar = {
              starrableId: id,
              clientMutationId:  "MDQ6VXNlcjM5ODMzMDQ1"
            };
      this.$apollo.mutate({
        mutation: removingStar,
        variables: {
            input: varStar,
        }
      })
      console.log('removed');
    }
  },
  apollo: {
    user: {
      query: overviewTag
    }
  }
}
</script>

<style scoped>
  .repos {
    border-bottom: 1px rgb(141, 134, 134) solid;
    width: 90%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
    font-weight: 600;
  }
  .btn {
    background-color: #f0f1f1;
    border-color: #a5a6a7;
  }
  .btn:hover {
    background-color: #ccd2db;
  }
  .repoName {
    font-size: 18px;
    color: rgb(10, 112, 196);
  }
  .topics {
    font-size: 14px;
    color: rgb(70, 71, 71);
  }
</style>
