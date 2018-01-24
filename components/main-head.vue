<template>
<header>
  <div class="row">
    <section id="menu">
      <input id="hamburger" type="checkbox" />
      <label for="hamburger"></label>
    </section>
    
    <section id="block-cob-branding">      
      <h1><a href="/" title="Home" rel="home">City of Bloomington, Indiana</a></h1>     
    </section>

    <section id="feedback">
      <a id="feedback" href="https://bloomington.in.gov/open311-proxy/embed?client=2;service_code=53">Feedback</a>
    </section>

    <search />
  </div>
</header>
</template>

<script>
import search from '~/components/search.vue'

export default {
  components: {
    search
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
  
  #feedback {
    position:absolute; top:$size-gutter; right:$size-gutter;
    color:white;
    font-family:$font-family-nav; font-size:$font-size-normal; font-weight:bold;

    @media all and (min-width:$viewport-medium) {
        right:50%;
    }
  }

  #block-cob-branding {
    padding-left:2em;

    @media all and (min-width:$viewport-medium) {
        padding:0;
        flex:1 0 320px;
    }
  }

 
</style>
