<template>
  <div class="row">
    <div class="col-md-3 user-space">
      <div class="card user" style="width: 18rem;">
        <img :src="user.avatarUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <span class="emoji">{{ user.status && user.status.emoji}}</span>
          <p class="card-text user-message">{{ user.status && user.status.message}}</p>
        </div>
      </div>
      <div class="user-description">
        <p>{{ user.login}}</p>
        <p>{{ user.bio }}</p>
        <p><i class='fas fa-map-marker-alt' style='font-size:24px;color:gray'></i>
        {{  user.location }}</p>
        <button type="button" class="btn btn-secondary btn-block">Edit</button>
      </div>
      <hr>
    </div>
    <div class="col-md-8 user-work">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">Overview</a>
            <a class="nav-item nav-link" href="#">Repositories</a>
            <a class="nav-item nav-link" href="#">Projects</a>
            <a class="nav-item nav-link" href="#">Stars</a>
            <a class="nav-item nav-link" href="#">Followers {{ user.followers && user.followers.totalCount}}</a>
            <a class="nav-item nav-link" href="#">Following {{ user.followers && user.following.totalCount}}</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag';

    const getUser = gql`
      query user {
      user(login: "YocelinGR"){
        avatarUrl(size: 256),
        bio,
        status{
          emoji,
          message
        },
        company,
        createdAt,
        databaseId,
        id,
        location,
        login,
        followers {
          totalCount
        },
        following {
          totalCount
        },
      }
    }
    `;
    export default {
      data: () => ({
        user: {},
      }),
      apollo: {
        user: {
          query: getUser,
          }
        }
    }
</script>

<style>
.user-message{
  box-sizing: border-box;
  display: block;
  font-size: 20px;
  color: #24292e;
  white-space: normal;
}
.user {
  justify-content: center;
  text-align: center;
  vertical-align: center;
}
.emoji {
  position:relative;
  top: -32px;
  left: -60px;
  padding: 6px;
  background-color: rgb(224, 172, 60);
  border-radius: 15px;
}
.user-description{
  justify-content: center;
  padding-top: 15px;
  padding-left: 5px;
  font-size: 18px;
  color: rgb(92, 90, 90);
  text-align: justify;
  vertical-align: center;
}
.user-space {
  max-width: 100%;
  padding-top: 30px;
  padding-left: 30px;
}

.user-work {
  max-width: 100%;
  padding-top: 15px;
  padding-left: 5px;
}
</style>
