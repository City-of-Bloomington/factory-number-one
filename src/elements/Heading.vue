<template>
  <component :is="level"> <slot /> </component>
</template>

<script>
/**
 * Headings are used as the titles of each major section of a page in the
 * interface.
 */
export default {
  name: "Heading",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The heading level used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    level: {
      type: String,
      default: "h1",
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      },
    },
  },
}
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  @include reset;
  display: block;
  width: 100%;
  font-family: $font-heading;
  color: $color-slate;
}
h1 {
  letter-spacing: $spacing-xs;
  font-size: $size-xxxl;
  font-weight: $weight-normal;
  line-height: $size-xxxl + 5px;
}
h2 {
  letter-spacing: $spacing-s;
  font-size: $size-xxl;
  font-weight: $weight-normal;
  line-height: $size-xxl + 5px;
}
h3 {
  font-size: $size-xl;
  font-weight: $weight-normal;
  line-height: $size-xl + 5px;
}
h4 {
  font-size: $size-l;
  font-weight: $weight-normal;
  line-height: $size-l + 5px;
}
h5 {
  font-size: $size-m;
  font-weight: $weight-normal;
  line-height: $size-m + 5px;
}
h6 {
  font-size: $size-s;
  font-weight: $weight-normal;
  line-height: $size-s + 5px;
}
</style>

<docs>
  ```jsx
  <div>
    <h1>h1. City of Bloomington Heading</h1>
    <h2>h2. City of Bloomington Heading</h2>
    <h3>h3. City of Bloomington Heading</h3>
    <h4>h4. City of Bloomington Heading</h4>
    <h5>h5. City of Bloomington Heading</h5>
    <h6>h6. City of Bloomington Heading</h6>
  </div>
  ```
</docs>
