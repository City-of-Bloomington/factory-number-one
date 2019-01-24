<template>
  <component :is="wrapper" :class="['field-group']">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="state"
      @input="onInput($event.target.value)"
      @focus="onFocus($event.target.value)"
    />
  </component>
</template>

<script>
/**
 * The `<time>` input defines a control for entering a time (no time zone).
 */
export default {
  name: "fn1-time",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The type input field.
     * `time`
     */
    type: {
      type: String,
      default: "time",
      validator: value => {
        return value.match(/(time)/)
      },
    },
    /**
     * The placeholder value for the time input.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * Text value of the text input.
     * @model
     */
    value: {
      type: String,
      default: null,
    },
    /**
     * The label of the  time input.
     */
    label: {
      type: String,
      default: null,
    },
    /**
     * The name of the  time input.
     */
    name: {
      type: String,
      default: null,
    },
    /**
     * The html element class name used for the wrapper.
     * `field-group`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
    /**
     * Unique identifier of the  time input.
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
    <fn1-time label="Time" name="time" id="time" type="time" placeholder="hh:mm am" />
  </div>
  ```
</docs>
