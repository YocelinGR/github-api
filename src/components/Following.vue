<template>
  <div>
    <div v-for="userFollowing in user.following.nodes" :key="userFollowing.id" class="followers row">
    <div class="col-md-2">
      <img :src=" userFollowing.avatarUrl" alt="user image">
    </div>
    <div class="col md-8">
       <span class="name">{{ userFollowing.name }}</span>
       <span class="userName">{{ userFollowing.login }}</span>
       <p class="userName">{{ userFollowing.bio}}</p>
       <p v-if="userFollowing.location" class="userName"><i class='fas fa-map-marker-alt'></i>
        {{  userFollowing.location }}</p>
    </div>
    <div class="col-md-2">
      <button class="btn btn-light">Unfollow</button>
    </div>
  </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const following = gql`
  query user {
  user(login: "YocelinGR"){
    id
    following(first: 20) {
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
export default {
  data : () => ({
    user: {},
  }),
  apollo: {
    user: {
      query: following,
    }
  }
}
</script>

<style scoped>
  img {
    border-radius: 4px;
  }
  .name {
    font-size: 16px;
    color: rgb(41, 40, 40);
    padding: 6px;
  }
  p.userName{
    font-size: 14px;
    color: rgb(110, 102, 102);
    padding: 2px;
    padding-bottom: 1px !important;
  }

  .followers {
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding-bottom: 10px;
    border-bottom: rgb(187, 185, 185) solid 1px;
  }
  .btn {
    background-color: #f0f1f1;
    border-color: #a5a6a7;
  }
  .btn:hover {
    background-color: #ccd2db;
  }
</style>
