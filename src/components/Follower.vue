<template>
  <div>
    <div v-for="userFollower in user.followers.nodes" :key="userFollower.id" class="followers row">
    <div class="col-md-2">
      <img :src=" userFollower.avatarUrl" alt="user image">
    </div>
    <div class="col-md-8">
       <span class="name">{{ userFollower.name }}</span>
       <span class="userName">{{ userFollower.login }}</span>
       <p class="userName">{{ userFollower.bio}}</p>
       <p v-if="userFollower.location" class="userName"><i class='fas fa-map-marker-alt'></i>
        {{  userFollower.location }}</p>
    </div>
    <div class="col-md-2">
      <button class="btn btn-light">Follow</button>
    </div>
  </div>
  <hr>
  </div>
</template>

<script>
import gql from 'graphql-tag';

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
export default {
  data : () => ({
    user: {},
  }),
  apollo: {
    user: {
      query: followers,
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
