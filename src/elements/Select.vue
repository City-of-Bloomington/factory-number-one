<template>
  <component :is="wrapper" :class="['field-group']">
    <label :for="id" v-if="label">{{ label }}</label>
    <select v-model="value" :name="name" :id="id" :type="type">
      <option
        v-for="(item, index) in options"
        :key="index"
        :value="item.value"
        v-html="item.text"
        :disabled="item.disabled"
      ></option>
    </select>
  </component>
</template>

<script>
/**
 * The <code>select</code> element is used to create a drop-down list.
 *
 * The <code>option</code> tags inside the <code>select</code> element define the available options in the list.
 */
export default {
  name: "fn1-select",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The type of input field.
     * `select`
     */
    type: {
      type: String,
      default: "select",
      validator: value => {
        return value.match(/(select)/)
      },
    },
    /**
     * Text value of the select input.
     * @model
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The placeholder value for the select input.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * The label of the select input.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The name of the select input.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * The html element name used for the wrapper.
     * `div`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
    /**
     * Unique identifier of the select input.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Menu items to be displayed on the nav bar.
     */
    options: {
      required: true,
      type: Array,
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(value) {
      this.$emit("change", value)
    },
    onFocus(value) {
      this.$emit("focus", value)
    },
  },
}
</script>

<style lang="scss">
// Design Tokens with local scope
$color-placeholder: tint($color-silver, 50%);

.field-group {
  @include stack-space($space-s);
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-xs;
  width: 100%;

  label {
    cursor: pointer;
    display: block;
    font-size: $size-s;
    color: tint($color-slate, 20%);
    @include stack-space($space-xs);
  }
}
</style>

<docs>
  ```jsx
  <div>
    <fn1-select
      label="Select an option"
      :options="[
        { value: null, text: 'Please select an item' },
        { value: 'a',  text: 'This is First option' },
        { value: 'b',  text: 'Default Selected Option' },
        { value: 'c',  text: 'This is another option' },
        { value: 'd',  text: 'This one is disabled', disabled: true }
      ]"/>
  </div>
  ```
</docs>
