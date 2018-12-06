<template>
  <component :is="wrapper" :class="['field-group']">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      :disabled="disabled"
      :required="required"
      :type="type"
      :value="value"
      :name="name"
      :class="state"
      :placeholder="placeholder"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
  </component>
</template>

<script>
/**
 * Defines a single-line url field that a user can enter text into.
 */
export default {
  name: "fn1-url",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The type of the form input field.
     * `url`
     */
    type: {
      type: String,
      default: "url",
      validator: value => {
        return value.match(/(url)/)
      },
    },
    /**
     * Text value of the url input.
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The placeholder value for the url input.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * The label of the url input.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The name of the url input.
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
     * Unique identifier of the url input.
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger various states of the input.
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

<style lang="scss" scoped>
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

  input {
    @include reset;
    @include inset-squish-space($space-s);
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    font-size: $size-m;
    font-family: $font-text;
    background: white;
    border-radius: $radius-default;
    color: set-text-color($color-slate, white);
    width: 100%;
    margin: 0;
    border: 0;
    box-shadow: inset 0 1px 0 0 rgba($color-slate, 0.07), 0 0 0 1px tint($color-slate, 80%);

    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }

    &:-ms-input-placeholder {
      color: $color-placeholder;
    }

    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }

    &:hover,
    &.hover {
      box-shadow: 0 1px 5px 0 rgba($color-slate, 0.07), 0 0 0 1px tint($color-slate, 60%);
    }

    &:focus,
    &.focus {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
      outline: 0;
    }

    &[disabled] {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-shadow: 0 0 0 1px tint($color-slate, 80%);
      background: lighten($color-placeholder, 42%);
      color: tint($color-placeholder, 20%);
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <fn1-url label="Input [url]" placeholder="http://example.com" name="input-1" id="input-1"/>
  </div>
  ```
</docs>
