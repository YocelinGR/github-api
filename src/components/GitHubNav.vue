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
    position: relative;
    padding-top: 12px;
    padding-bottom: 12px;
    font-family: Helvetica,Arial,sans-serif;
    font-size: 14px !important;
    color: rgb(206, 209, 212);
    background-color: #24292e;
  }
  .git-nav, .icon-nav {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    color: white;
    background-color: #24292e;
  }
  a, i {
    color: white !important;
  }
  img {
    float: right;
    padding-top: 12px;
    padding-bottom: 12px;
  }
</style>
