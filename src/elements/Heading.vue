<template>
  <component :is="level">
    <slot/>
  </component>
</template>

<script>
/**
 * Headings are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
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

<style lang="scss" scoped>
h1, h2, h3, h4, h5, h6 {
  @include reset;
  @include stack-space($space-m);
  display: block;
  width: 100%;
  font-family: $font-heading;
  line-height: $line-height-xs;
  color: $color-slate;
}
h1 {
  letter-spacing: $spacing-xs;
  font-size: $size-xxl;
  font-weight: $weight-semi-bold;
}
h2 {
  letter-spacing: $spacing-s;
  font-size: $size-xxl;
  font-weight: $weight-semi-bold;
}
h3 {
  font-size: $size-xl;
  font-weight: $weight-semi-bold;
}
h4 {
  font-size: $size-l;
  font-weight: $weight-semi-bold;
}
h5 {
  font-size: $size-m;
  font-weight: $weight-semi-bold;
}
h6 {
  font-size: $size-s;
  font-weight: $weight-semi-bold;
}
</style>

<docs>
  ```jsx
  <div>
    <Heading>h1. City of Bloomington Heading</Heading>
    <Heading level="h2">h2. City of Bloomington Heading</Heading>
    <Heading level="h3">h3. City of Bloomington Heading</Heading>
    <Heading level="h4">h4. City of Bloomington Heading</Heading>
    <Heading level="h5">h5. City of Bloomington Heading</Heading>
    <Heading level="h6">h6. City of Bloomington Heading</Heading>
  </div>
  ```
</docs>
