<template>
  <component
    :is="type"
    :href="href"
    :class="['button-group']"
    role="group"
    aria-label="button group"
  >
    <slot />
  </component>
</template>

<script>
/**
 * A group of buttons that appear in a row.
 */
export default {
  name: "fn1-button-group",
  status: "ready",
  release: "1.0.0",
  model: {
    prop: "active",
  },
  props: {
    /**
     * The html element used for the button group.
     * `div`
     */
    type: {
      type: String,
      default: "nav",
      validator: value => {
        return value.match(/(nav)/)
      },
    },
    /**
     * When setting the button’s type to a link, use this option to give a href.
     */
    href: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
// Button group
.button-group {
  display: flex;

  button,
  .button {
    border-radius: 0;
    margin: 0;
    border-left: 1px solid lighten($color_blue, 20%);

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

    &:hover,
    &:focus,
    &:active,
    &.active {
      // z-index: 1;
    }
  }
}
</style>

<docs>
  ```jsx
    <fn1-button-group>
      <fn1-button>button</fn1-button>
      <fn1-button type="a" href="#">a href</fn1-button>
      <fn1-button>button</fn1-button>
      <fn1-button>button</fn1-button>
      <fn1-button type="a" href="#">a href</fn1-button>
    </fn1-button-group>
  ```
</docs>
