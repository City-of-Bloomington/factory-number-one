<template>
  <component :is="type" class="pagination">
    <a
      v-for="(item, index) in navItems"
      :key="index"
      :href="item.href"
      :aria-label="item.aria"
      :class="item.class"
      :disabled="item.disabled"
      v-html="item.name"
      @click.prevent
    />
  </component>
</template>

<script>
/**
 * Used as main page navigation in templates.
 */
export default {
  name: "fn1-pagination",
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
     * Menu items to be displayed on the nav bar.
     */
    navItems: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="scss">
.pagination {
  display: flex;

  a {
    color: $color-blue;
    font-size: $size-m;
    font-family: $font-text;
    text-decoration: none;
    border-radius: 0;
    padding: $space-xs $space-xs;
    margin: 0;
    border: 1px solid $color-grey-dark;

    &:hover {
      background-color: $color-grey-light;
    }

    &[disabled="disabled"] {
      background: $color-grey-light;
      color: shade($color-grey-darker, 20%);
      cursor: not-allowed;
    }

    &:first-child {
      -webkit-border-top-left-radius: $radius_default;
      -webkit-border-bottom-left-radius: $radius_default;
      -moz-border-radius-topleft: $radius_default;
      -moz-border-radius-bottomleft: $radius_default;
      border-top-left-radius: $radius_default;
      border-bottom-left-radius: $radius_default;
    }

    &:last-child {
      -webkit-border-top-right-radius: $radius_default;
      -webkit-border-bottom-right-radius: $radius_default;
      -moz-border-radius-topright: $radius_default;
      -moz-border-radius-bottomright: $radius_default;
      border-top-right-radius: $radius_default;
      border-bottom-right-radius: $radius_default;
    }

    &:last-of-type,
    &:not(:first-child) {
      margin-left: -1px;
    }

    &.current {
      background: $color-blue;
      color: white;
    }
  }
}
</style>

<docs>
  ```jsx
  <fn1-pagination
    :navItems="[
      {name: 'First',     href: '#',   class: 'first',    aria: 'first'},
      {name: 'Previous',  href: '#',   class: 'previous', aria: 'previous', disabled: 'disabled'},
      {name: '1',         href: '/1',  class: 'current',  aria: 'current'},
      {name: '2',         href: '/2'},
      {name: '3',         href: '/3'},
      {name: 'Next',      href: '#',   class: 'next',     aria: 'next'},
      {name: 'Last',      href: '#',   class: 'last',     aria: 'last'}
    ]"/>
  ```
</docs>
