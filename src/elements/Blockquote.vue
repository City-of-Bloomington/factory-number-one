<template>
  <component :is="type">
    <slot /> <cite v-show="cite">{{ cite }}</cite>
  </component>
</template>

<script>
/**
 * A `blockquote` is a section of text that is quoted from another source. It can contain a source that is refered to but
 */
export default {
  name: "fn1-blockquote",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The HTML element used for the blockquote.
     * `blockquote`
     */
    type: {
      type: String,
      default: "blockquote",
      validator: value => {
        return value.match(/(blockquote)/)
      },
    },
    /**
     * A text representation of the quote source.
     */
    cite: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
blockquote {
  display: flex;
  flex-wrap: wrap;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-m;

  cite {
    position: relative;
    font-style: italic;
    font-weight: $weight-normal;
    width: 100%;
    padding: 0 0 0 20px;

    &:before {
      content: "\2014 \00A0";
      position: absolute;
      left: 0;
    }
  }
}
</style>

<docs>
  ```jsx
  <fn1-blockquote cite="Babe Ruth">
    <p>Never let the fear of striking out keep you from playing the game.</p>
  </fn1-blockquote>
  ```
</docs>
