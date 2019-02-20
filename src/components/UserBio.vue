<template>
  <div class="row">
    <div class="col-md-3 user-space">
      <div class="card user" style="width: 18rem;">
        <img :src="user && user.avatarUrl" class="card-img-top" alt="...">
        <div class="card-body">
          <span class="emoji" data-markdown>
              {{ user.status && user.status.emoji}}
          </span>
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
      <GitHubTab :total-count="totalCount"></GitHubTab>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag';
  import GitHubTab from './GitHubTab'

    const getUser = gql`
      query user {
      user(login: "YocelinGR"){
        avatarUrl(size: 256),
        id,
        bio,
        location,
        status{
          emoji,
          message
        },
        followers{
           totalCount
         },
         following{
           totalCount
         },
         projects {
          totalCount
        },
         repositories{
           totalCount
         },
         starredRepositories{
           totalCount
         }
      }
    }
    `;
    export default {
      components: {
        GitHubTab,
      },
      data: () => ({
        user: {},
      }),
      apollo: {
        user: {
          query: getUser,
          }
        },
        computed: {
          totalCount(){
            return{
              followers: this.user.followers && this.user.followers.totalCount,
              following: this.user.following && this.user.following.totalCount,
              projects: this.user.projects && this.user.projects.totalCount,
              repositories: this.user.repositories && this.user.repositories.totalCount,
              starredRepositories: this.user.starredRepositories && this.user.starredRepositories.totalCount,
            }
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
  justify-content: center;
}
</style>
