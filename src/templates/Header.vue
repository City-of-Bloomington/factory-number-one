<template>
  <component :is="type">
    <a v-if="logo" :href="logo.url" :title="logo.imageAlt" @click.prevent>
      <img v-if="logo" :src="logo.image" :alt="logo.imageAlt" />

      <div>
        <h1 v-if="logoHeadings.heading" v-html="logoHeadings.heading"></h1>
        <h2 v-if="logoHeadings.subheading" v-html="logoHeadings.subheading"></h2>
      </div>
    </a>

    <a
      v-if="application"
      :href="application.url"
      v-html="application.name"
      :title="application.name"
      @click.prevent
    ></a>

    <nav v-if="navItems" role="navigation" aria-labelledby="navigation">
      <ul>
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
    </nav>

    <slot name="dropdown"></slot>

    <nav v-if="subNavItems" role="sub navigation" aria-labelledby="sub navigation">
      <ul>
        <li v-for="(item, index) in subNavItems" :key="index">
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
    </nav>
  </component>
</template>

<script>
/**
 * Used as the Header template.
 */
export default {
  name: "fn1-header",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The html element name used for the nav bar.
     * `header`
     */
    type: {
      type: String,
      default: "header",
      validator: value => {
        return value.match(/(header)/)
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
     * Displays sub-navigation menu items.
     */
    subNavItems: {
      type: Array,
      default: null,
    },
    /**
     * Displays the City of Bloomington snowflake logo.
     *
     * size: `55px x 55px`
     */
    logo: {
      type: Object,
      default: null,
      required: true,
    },
    /**
     * Headings of the logo.
     */
    logoHeadings: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-wrap: wrap;
  font-family: $font-text;
  width: 100%;
  background: white;
  border-top: 4px solid $color-blue;
  padding: 15px 20px 0 20px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 10px;
    padding: 0;

    &:first-of-type {
      margin: 0;

      img {
        margin: 0 10px 0 0;
        width: 55px;
        height: 55px;
      }

      div {
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

  nav {
    display: flex;
    align-items: center;
    align-self: center;
    margin: 0 0 0 auto;

    &.navigation-dropdown {
      margin: 0 0 0 20px;
    }

    &:not(.navigation-dropdown) {
      ul {
        display: flex;
        align-items: center;
        align-self: center;
        margin: 0 0 0 auto;
        padding: 0;
        list-style: none;

        li {
          margin: 0 15px 0 0;

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
    }

    &[role="sub navigation"] {
      display: block;
      background: tint($color-blue, 10%);
      width: calc(100% + 40px);
      margin: 15px -20px 0 -20px;
      padding: 5px 20px;

      ul {
        li {
          a {
            font-size: $size-s;
            color: white;
          }
        }
      }
    }
  }
}
</style>

<docs>
  ```jsx
    <fn1-header
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
        {name: 'Cases',     href: 'https://google.com/', disabled: true},
        {name: 'Locations', href: '#'},
        {name: 'Datasets',  href: '#'},
        {name: 'About',     href: '#'},
        {name: 'Misc.',     href: '#'}
      ]"

      :subNavItems="[
        {name: 'Sub-Cases',     href: 'https://google.com/', disabled: true},
        {name: 'Sub-Locations', href: '#'},
        {name: 'Sub-Datasets',  href: '#'},
        {name: 'Sub-About',     href: '#'},
        {name: 'Sub-Misc.',     href: '#'}
      ]">

      <fn1-dropdown
        slot="dropdown"
        text="Dropdown"
        navAlign="right"
        :navItems="[
          {name: 'Case',     href: 'https://google.com/', target: '_blank'},
          {name: 'Location', href: '#'},
          {name: 'Datasets', href: '#'},
          {name: 'About',    href: '#'},
          {name: 'Misc.',    href: '#'}
        ]"/>
    </fn1-header>
  ```
</docs>
