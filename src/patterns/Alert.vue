<template>
  <component :is="type" class="alert" :class="[{ dismissible: dismissible }, variant]" role="alert">
    <slot />

    <button v-show="dismissible" type="button" class="close" aria-label="Close alert">
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
    /**
     * Applies a corresponding css class for a variant of the Alert.
     */
    variant: {
      type: String,
      default: "primary",
    },
  },
}
</script>

<style lang="scss">
.alert {
  @include inset-squish-space($space-m);
  box-sizing: border-box;
  position: relative;
  width: 100%;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-xs;
  border-radius: $radius-default;
  margin: 0 0 $space-s 0;

  // Alert Variants
  &.primary {
    background: $color-blue-lighter;
    color: shade($color-blue-darker, 40%);

    a {
      color: shade($color-blue-darker, 40%);
    }

    hr {
      background: shade($color-blue-lighter, 15%);
    }

    &.dismissible {
      button {
        color: shade($color-blue-darker, 40%);

        &:hover,
        &:focus {
          color: shade($color-blue-darker, 80%);
        }
      }
    }
  }

  &.success {
    background: tint($color-green-lighter, 30%);
    color: shade($color-green-darker, 40%);

    a {
      color: shade($color-green-darker, 40%);
    }

    hr {
      background: shade($color-green-lighter, 15%);
    }

    &.dismissible {
      button {
        color: shade($color-green-darker, 40%);

        &:hover,
        &:focus {
          color: shade($color-green-darker, 80%);
        }
      }
    }
  }

  &.danger {
    background: tint($color-vermilion-lighter, 30%);
    color: shade($color-vermilion, 40%);

    a {
      color: shade($color-vermilion, 40%);
    }

    hr {
      background: shade($color-vermilion-lighter, 15%);
    }

    &.dismissible {
      button {
        color: shade($color-vermilion, 40%);

        &:hover,
        &:focus {
          color: shade($color-vermilion, 80%);
        }
      }
    }
  }

  &.warning {
    background: tint($color-ucla-gold-lighter, 30%);
    color: shade($color-ucla-gold-darker, 40%);

    a {
      color: shade($color-ucla-gold-darker, 40%);
    }

    hr {
      background: shade($color-ucla-gold-lighter, 15%);
    }

    &.dismissible {
      button {
        color: shade($color-ucla-gold-darker, 40%);

        &:hover,
        &:focus {
          color: shade($color-ucla-gold-darker, 80%);
        }
      }
    }
  }

  p {
    @include stack-space($space-xs);
    width: 100%;
    margin-top: 0;
    font-weight: $weight-normal;
    font-family: $font-text;
    font-size: $size-m;
    line-height: $line-height-s;
    padding: 0;

    + hr {
      margin-top: 0;
    }
  }

  a {
    font-weight: $weight-semi-bold;
  }

  // If the Alert has a dismiss button
  &.dismissible {
    padding: 14px 40px 14px 24px;

    button {
      padding: 10px 14px;
      position: absolute;
      top: 0;
      right: 0;
      margin-left: auto;
      cursor: pointer;
      font-weight: $weight-semi-bold;
      font-family: $font-text;
      font-size: $size-l;
      line-height: $line-height-xs;
      border: none;
      background: transparent;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <fn1-alert>
      <p><strong>Primary Variant --</strong> Holy Guacamole! Better make some more.</p>
    </fn1-alert>

    <fn1-alert variant="success">
      <p><strong>Success Variant --</strong> This one has a button to dismiss.</p>
    </fn1-alert>

    <fn1-alert variant="danger">
      <p><strong>Danger Variant --</strong> This one has a button to dismiss.</p>
    </fn1-alert>

    <fn1-alert dismissible variant="warning">
      <p><strong>Warning Variant --</strong> This one has a button to dismiss.</p>
      <hr>
      <p>This is an example of a <a href="https://bloomington.in.gov/">link</a>.</p>
    </fn1-alert>
  </div>
  ```
</docs>
