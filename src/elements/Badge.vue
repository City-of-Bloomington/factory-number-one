<template>
  <component :is="type" :class="['badge']" @click.prevent> <slot /> </component>
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
  },
  computed: {
    button: function() {
      if (this.type == "a") return true
    },
  },
}
</script>

<style lang="scss" scoped>
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
  background: $color-blue;
  color: white;
}
</style>

<docs>
  ```jsx
  <div>
    <div>
      <fn1-badge>5,431</fn1-badge>
      <fn1-badge>New!</fn1-badge>
      <fn1-badge>Success</fn1-badge>
      <fn1-badge>Warning</fn1-badge>
    </div>
  </div>
  ```
</docs>
