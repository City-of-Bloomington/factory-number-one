<template>
  <component :is="type" :class="['badge', variant]"> <slot /> </component>
</template>

<script>
/**
 * Badges are used as a form of inline feedback and labeling. They are typically used to provide additional context to components already on the page.
 */
export default {
  name: "fn1-badge",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The html element used for the badge.
     * `span`
     */
    type: {
      type: String,
      default: "span",
      validator: value => {
        return value.match(/(span)/)
      },
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    button: function() {
      if (this.type == "a") return true
    },
  },
}
</script>

<style lang="scss">
.badge {
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
  border-radius: 100px;

  &.primary {
    background: $color-blue;
    color: white;
  }

  &.success {
    background: tint($color-green-lighter, 30%);
    color: shade($color-green-darker, 40%);
  }

  &.danger {
    background: tint($color-vermilion-lighter, 30%);
    color: shade($color-vermilion, 40%);
  }

  &.warning {
    background: tint($color-ucla-gold-lighter, 30%);
    color: shade($color-ucla-gold-darker, 40%);
  }
}
</style>

<docs>
  ```jsx
  <div>
    <div>
      <fn1-badge>5,431</fn1-badge>
      <fn1-badge variant="success">Success</fn1-badge>
      <fn1-badge variant="danger">Danger</fn1-badge>
      <fn1-badge variant="warning">Warning</fn1-badge>
    </div>
  </div>
  ```
</docs>
