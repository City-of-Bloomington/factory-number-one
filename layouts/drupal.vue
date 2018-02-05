<template>
<div>
  <header>
    <HeaderMenus/>
  </header>
  <HeaderNav/>
  
  <!-- where do errors go? -->
  <main>    
    <nuxt/>
  </main>
  
  <!-- footer -->
  
</div>
</template>

<script>
// https://nuxtjs.org/guide/views
// see also app.html in root for foundation markup

import HeaderMenus from '~/components/header-menus-drupal.vue'
import HeaderNav from '~/components/header-nav-drupal.vue'

export default {
  components: {
    HeaderMenus,
    HeaderNav
  }
}
</script>

  
<style lang="scss">
  @import "../assets/main.scss";

  header a {
    color: rgb(24, 51, 101);
    font-family: Roboto, sans-serif;
  }
  
  header {
    background-color: $color-header;
    color: $color-content-background;
    padding: 0;

    > .row {
        min-height:2em;

        font-size:$font-size-big;

        h1 {
            margin:0 $size-gutter;
            a { margin:0; padding:0; font-size:$font-size-normal; font-weight:bold; }
        }
        a {
            color: $color-content-background;
            font-size:$font-size-normal; font-weight:bold;
        }

        @media all and (min-width:$viewport-medium) {
            h1 a { font-size:$font-size-big; }

            display:flex; flex-direction:row; justify-content:space-between;
        }
    }
  }

</style>
