<template>
  <component :is="type">
    <slot /> <cite v-if="cite">{{ cite }}</cite>
  </component>
</template>

<script>
/**
 * A section of text that is quoted from another source.
 */
export default {
  name: "fn1-blockquote",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The heading level used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    type: {
      type: String,
      default: "blockquote",
      validator: value => {
        return value.match(/(blockquote)/)
      },
    },
    cite: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
blockquote {
  cite {
    font-style: italic;
  }
}
</style>

<docs>
  ```jsx
  <fn1-blockquote cite="Babe Ruth">
    Never let the fear of striking out keep you from playing the game.
  </fn1-blockquote>
  ```
</docs>
