<template>
  <component
    :is="type"
    :href="href"
    :type="submit"
    :class="[{ button: button }, state]"
    @click.prevent
  >
    <slot />
  </component>
</template>

<script>
/**
 * Buttons are generally used for interface actions but are suitable for all-purpose use.
 *
 * Defaults to an appearance that has blue background with white text.
 * An <code>a href</code> can also easily be styled to resemble a button by providing it a <code>button</code> class as seen in the example below.
 *
 * Additional contextual variations (sizes, states, etc) are up to that of the user.
 */
export default {
  name: "fn1-button",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The html element used for the button.
     * `button, a`
     */
    type: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(button|a)/)
      },
    },
    /**
     * When setting the button’s type to a link, use this option to give a href.
     */
    href: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    /**
     * Set the button’s type to “submit”.
     */
    submit: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/)
      },
    },
    /**
     * Manually trigger various states of the button.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(hover|active|focus)/)
      },
    },
  },
  computed: {
    button: function() {
      if (this.type == "a") return true
    },
  },
}
</script>

<style lang="scss" scoped>
button,
.button {
  @include reset;
  will-change: transform;
  transition: all 0.2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: $weight-semi-bold;
  font-size: $size-m;
  font-family: $font-text;
  line-height: $line-height-m;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 $space-xxs 0 0;
  padding: 0 8px;
  border: 0;
  border-radius: $radius-default;
  background: $color-blue;
  color: white;
  cursor: pointer;

  // // Various states
  // &:hover,
  // &.hover {
  //   color: white;
  //   background-color: shade($color-blue, 20%);
  // }

  // &:active,
  // &.active {
  //   transition: none;
  //   background: shade($color-blue, 20%);
  //   box-shadow: none;
  //   color: white;
  // }

  // &:focus,
  // &.focus {
  //   background-color: shade($color-blue, 40%);
  //   box-shadow: none;
  //   color: white;
  // }

  // For icons inside buttons
  .icon {
    display: flex;
    margin: 0 8px 0 0;
  }

  // Disabled attribute
  // pointer-events & cursor: not-allowed due not play well
  // this is bc pointer-events disables all mouse functions
  // workaround: wrap a disabled btn in a div w/ 'cursor: not-allowed'
  &[disabled="disabled"] {
    //pointer-events: none;
    cursor: not-allowed;
    background: tint($color-blue, 30%);
  }
}
</style>

<docs>
  ```jsx
  <div>
    <div>
      <fn1-button>Button</fn1-button>
      <fn1-button disabled>Disabled</fn1-button>
    </div>

    <div>
      <fn1-button type="a" href="#">
        a href button
      </fn1-button>

      <fn1-button>
        <Icon name="cob-logo" fill="white" />
        Icon button
      </fn1-button>

      <fn1-button type="a" href="#">
        <Icon name="cob-logo" fill="white" />
        Icon a href
      </fn1-button>
    </div>
  </div>
  ```
</docs>
