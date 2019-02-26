<template>
  <div>
    <div
      v-for="repo in user.starredRepositories && user.starredRepositories.edges"
      :key="repo.node.id"
      class="star row"
    >
      <div class="col-md-8">
        <span class="userRepo">{{ repo.node.owner.login }} / </span>
        <a :href="repo.node.url" class="userRepo">{{ repo.node.name }}</a>
        <p class="description">{{ repo.node.description }}</p>
        <span
          v-for="topic in repo.node.repositoryTopics.nodes"
          :key="topic.id"
          class="topic"
        >
          {{ topic.topic.name }}
        </span>
        <span class="topic">{{ repo.starredAt }}</span>
      </div>
      <div class="col-md-3">
        <button class="btn btn-light" @click="removeStar(repo.node.id)"
          ><i class="far fa-star"></i> Unfollow</button
        >
      </div>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag'

const starredByUser = gql`
  query user {
    user(login: "YocelinGR") {
      id
      starredRepositories(first: 10) {
        totalCount
        edges {
          starredAt
          node {
            id
            name
            description
            owner {
              login
              id
            }
            createdAt
            url
            repositoryTopics(first: 3) {
              nodes {
                id
                resourcePath
                url
                topic {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
const removingStar = gql`
  mutation removeStar($input: RemoveStarInput!) {
    removeStar(input: $input) {
      clientMutationId
      starrable {
        id
      }
    }
  }
`
export default {
  data: () => ({
    user: {},
  }),
  methods: {
    removeStar(id) {
      const varStar = {
        starrableId: id,
        clientMutationId: 'MDQ6VXNlcjM5ODMzMDQ1',
      }
      this.$apollo.mutate({
        mutation: removingStar,
        variables: {
          input: varStar,
        },
      })
      // location.reload()
    },
  },
  apollo: {
    user: {
      query: starredByUser,
    },
  },
}
</script>
<style scoped>
.star {
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  margin: 15px;
  border-bottom: rgb(187, 185, 185) solid 1px;
}
.btn {
  background-color: #f0f1f1;
  border-color: #a5a6a7;
}
.btn:hover {
  background-color: #ccd2db;
}
.userRepo {
  padding: 4px;
  font-size: 20px;
  color: rgb(10, 112, 196);
}
.description {
  padding: 2px;
  font-size: 18px;
  color: rgb(136, 137, 138);
}
.topic {
  padding: 6px;
  font-size: 14px;
  color: rgb(70, 71, 71);
}
</style>
