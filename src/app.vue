<script>
import GitHubNav from './components/GitHubNav'
import UserBio from './components/UserBio'

export default {
  components: {
    UserBio,
    GitHubNav
  },
  data(){
    return{
    }
  },
}
</script>

<template>
  <div id="app">
    <GitHubNav></GitHubNav>
    <UserBio></UserBio>
  </div>
</template>
<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

// Design variables and utilities from src/design.
@import '@design';

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: $color-body-bg;
}
#app {
  @extend %typography-small;
}

// ===
// Base element styles
// ===

a,
a:visited {
  color: $color-link-text;
}

h1 {
  @extend %typography-xxlarge;
}

h2 {
  @extend %typography-xlarge;
}

h3 {
  @extend %typography-large;
}

h4 {
  @extend %typography-medium;
}

h5,
h6 {
  @extend %typography-small;
}

// ===
// Vendor
// ===

#nprogress .bar {
  background: $color-link-text;
}
</style>
