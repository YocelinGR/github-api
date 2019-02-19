<template>
    <header role="banner">
      <div class="container-fluid row">
        <div class="col-md-1">
          <i class='fab fa-github icon-nav' style='font-size:40px;color:white'></i>
        </div>
        <div class="col-md-9">
          <nav class="navbar navbar-expand-lg git-nav">
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search or jump to..." aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class='fas fa-slash' style='font-size:18px;color:green'></i></button>
              </form>
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Pull Request <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Issues</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Marketplace</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Explore</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-md-1">
          <img :src="user.avatarUrl" alt="user photo">
        </div>
      </div>
    </header>
</template>

<script>
import gql from 'graphql-tag';

const getUser = gql`
  query user {
  user(login: "YocelinGR"){
    avatarUrl(size: 30),
    bio,
    id
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

<style scoped>
  header {
    background-color: #24292e;
    color: rgb(206, 209, 212);
    padding-bottom: 12px;
    padding-top: 12px;
    font-size: 14px !important;
    font-family: Helvetica,Arial,sans-serif;
    position: relative;
  }
  .git-nav, .icon-nav {
    justify-content: space-between;
    background-color: #24292e;
    display: flex;
    flex: 1 1 auto;
    box-sizing: border-box;
    color: white;
    position: relative;
  }
  a, i {
    color: white!important;
  }
  img {
    padding-bottom: 12px;
    padding-top: 12px;
    float: right;
  }
</style>
