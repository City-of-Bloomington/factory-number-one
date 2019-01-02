<template>
  <component :is="type" class="navigation">
    <a v-if="logo" :href="logo.url" :title="logo.imageAlt" @click.prevent>
      <img v-if="logo" :src="logo.image" :alt="logo.imageAlt" />

      <div>
        <h1 v-if="logoHeadings.heading" v-html="logoHeadings.heading"></h1>

        <h2 v-if="logoHeadings.subheading" v-html="logoHeadings.subheading"></h2>
      </div>
    </a>

    <a v-if="application" :href="application.url" v-html="application.name" @click.prevent></a>

    <ul v-if="navItems">
      <li v-for="(item, index) in navItems" :key="index">
        <a
          :href="item.href"
          :class="item.class"
          :disabled="item.disabled"
          :title="item.name"
          v-html="item.name"
          @click.prevent
        ></a>
      </li>
    </ul>

    <fn1-button>Login</fn1-button>
  </component>
</template>

<script>
/**
 * Used as main page navigation in templates.
 */
export default {
  name: "fn1-navigation",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the nav bar.
     */
    type: {
      type: String,
      default: "nav",
      validator: value => {
        return value.match(/(nav)/)
      },
    },
    /**
     * Application information, name & url.
     */
    application: {
      type: Object,
      default: null,
    },
    /**
     * Menu items to be displayed on the nav bar.
     */
    navItems: {
      type: Array,
      default: null,
    },
    /**
     * Displays a logo --
     * size: `55px x 55px`
     */
    logo: {
      type: Object,
      default: null,
    },
    /**
     * Headings of the logo
     */
    logoHeadings: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  flex-wrap: wrap;
  font-family: $font-text;
  width: 100%;
  background: white;
  border-top: 4px solid $color-blue;
  padding: 15px 10px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 10px;
    padding: 0;

    &:first-of-type {
      // background: pink;
      margin: 0;

      img {
        margin: 0 10px 0 0;
        width: 55px;
        height: 55px;
      }

      div {
        // background: orange;
        flex-direction: column;
      }

      h1,
      h2 {
        margin: 0;
        padding: 0;
        width: auto;
      }

      h1 {
        letter-spacing: $spacing-s;
        font-size: $size-m + 2px;
        font-weight: $weight-semi-bold;
        line-height: $size-m + 5px;
        color: $color-blue;
      }

      h2 {
        letter-spacing: $spacing-s;
        font-size: $size-m;
        font-weight: $weight-normal;
        line-height: $size-m + 5px;
        color: tint($color-blue, 20%);
      }
    }

    &:nth-child(2) {
      position: relative;
      margin: 0 0 0 20px;
      color: tint($color-slate, 20%);
      letter-spacing: $spacing-s;
      font-size: $size-m;
      font-weight: $weight-normal;
      line-height: $size-m + 5px;

      &:before {
        position: absolute;
        content: "";
        height: $size-l;
        left: -10px;
        border-left: 1px solid tint($color-slate, 20%);
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    align-self: center;
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;

    li {
      margin: 0 10px 0 0;

      &:last-of-type {
        margin: 0;
      }

      a {
        color: tint($color-slate, 20%);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  button {
    margin: 0 0 0 auto;
    align-self: center;
  }
}
</style>

<docs>
  ```jsx
  <fn1-navigation
    :logo="{
      url:      'http://google.com',
      image:    './icons/city-of-bloomington-logo.svg',
      imageAlt: 'City of Bloomington, IN'
    }"
    :logoHeadings="{
      heading:      'Bloomington.in.gov',
      subheading:   'John Hamilton, Mayor',
    }"
    :application="{
      name: 'Time Track',
      url:  'https://bloomington.in.gov/'
    }"
    :navItems="[
      {name: 'Cases',     href: '#', disabled: true},
      {name: 'Locations', href: '#'},
      {name: 'Datasets',  href: '#'},
      {name: 'About',     href: '#'},
      {name: 'Misc.',     href: '#'}
    ]"
  />
  ```
</docs>
