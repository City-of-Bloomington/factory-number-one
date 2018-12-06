<template>
  <component :is="type" class="alert" :class="{ dismissible: dismissible }" role="alert">
    <slot />

    <button v-if="dismissible" type="button" class="close" aria-label="Close alert">
      <span>&times;</span>
    </button>
  </component>
</template>

<script>
/**
 * Alerts are used to convey message to the user.
 */
export default {
  name: "fn1-alert",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The component used for Alerts.
     */
    type: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
    /**
     * Shows a button to dismiss the Alert and also provides a wrapping class for styling.
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.alert {
  @include inset-squish-space($space-m);
  position: relative;
  display: flex;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-xs;
  border-radius: $radius-default;
  background: tint($color-green-light, 30%);
  color: shade($color-green-darker, 40%);

  &.dismissible {
    padding: 14px 40px 14px 24px;
  }

  p {
    @include stack-space($space-xs);
    margin-top: 0;
    font-weight: $weight-normal;
    font-family: $font-text;
    font-size: $size-m;
    line-height: $line-height-s;
    padding: 0;
  }

  button {
    padding: 10px 14px;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: auto;
    cursor: pointer;
    color: shade($color-green-darker, 40%);
    font-weight: $weight-semi-bold;
    font-family: $font-text;
    font-size: $size-l;
    line-height: $line-height-xs;
    border: none;
    background: transparent;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <fn1-alert>
      <p><strong>Holy Guacamole!</strong> Better make some more.</p>
    </fn1-alert>

    <fn1-alert dismissible>
      <p><strong>Dismissible!</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis posuere nulla. Curabitur sit amet laoreet ipsum. Vestibulum gravida mi dui, ut tempus quam dignissim nec. Aliquam ac tortor dictum, pretium turpis in, ornare urna. Vestibulum vel massa sit amet augue imperdiet feugiat sit amet id lectus. Suspendisse mauris nibh, pellentesque eget tellus vel, rutrum imperdiet erat. Duis sodales condimentum nunc, at auctor lorem efficitur ac. Donec nec hendrerit libero, eu porttitor mi. Proin pulvinar aliquet eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mauris nibh, ullamcorper in rhoncus et, auctor vel nulla.</p>
    </fn1-alert>
  </div>
  ```
</docs>
