<template>
  
  <nav id="nav1">
    <div class="container">
      <a class="about"    href="/about">Info &amp; Guides</a>
      <a class="city"     href="/city">City Government</a>
      <a class="news"     href="/news">News &amp; Events</a>
      <a class="services" href="/services">Top Services</a>
    </div>
  </nav>
  
</template>

<style lang="scss">
  @import "../assets/main.scss";


  //originally in fn1/sass/_nav1.scss
  #nav1 {
    @media all and (min-width: $viewport-medium) {
        overflow:auto;

        a {
            color: $color-nav1;
            display: block;
            float: left;
            margin-right: $size-gutter;
            padding: $size-gutter .75em;
        }

        form     { float: right; }
        fieldset { margin: 0; }
        input    { font-size: 1em; padding: ($size-gutter/2); }
    }
  }

  #nav1 {
    a {
        background-size:24px;
        background-repeat:no-repeat;
        background-position:$size-gutter center;
        padding:0 0 0 52px;
        font-size:$font-size-big;
        line-height:4rem;
    }
    .about    { background-image:url('/static/img/alpha_icons/biscay/searchlocation.svg'); }
    .news     { background-image:url('/static/img/alpha_icons/biscay/news.svg'          ); }
    .city     { background-image:url('/static/img/alpha_icons/biscay/factory.svg'       ); }
    .services { background-image:url('/static/img/alpha_icons/biscay/services.svg'      ); }
}

@media all and (min-width:$viewport-medium) {
    #nav1 {
        a {
            display:inline-block; padding:52px 0 0 0;
            background-size:auto 40px;
            background-position:center $size-gutter;

            font-size:$font-size-normal; line-height:1.25em;
        }
    }
}

  
</style>
