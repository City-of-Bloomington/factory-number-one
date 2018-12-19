<template>
  <component :is="wrapper" :class="['tabs-group']">
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: tab.isActive }"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </div>

    <div class="tab-content"><slot /></div>
  </component>
</template>

<script>
/**
 * Tabs
 */
export default {
  name: "fn1-tabs",
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     * The element used for Tabs component.
     * `div`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div)/)
      },
    },
  },
  data() {
    return {
      tabs: this.$children,
      loaded: false,
    }
  },
  created() {
    // this.$nextTick(() => {
    //   this.loaded = true;
    //   this.tabs = this.$children;
    //   console.log(this.$children);
    // });
  },
  methods: {
    selectTab(selectedTab, event) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name
      })
    },
  },
}
</script>

<style lang="scss">
.tabs-group {
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;

  .tabs {
    margin: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #ccc;

    > li {
      color: $color-slate;
      border: 1px solid transparent;
      text-align: center;
      cursor: pointer;
      padding: $space-xs $space-s;
      margin: 0 $space-s -1px 0;
      display: inline-block;
      // this fix is needed for IE7-
      zoom: 1;
      *display: inline;

      &.active,
      &:hover {
        background-color: white;
        color: $color-blue;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-bottom: none;
        border-top-left-radius: $radius-default;
        border-top-right-radius: $radius-default;
      }
    }
  }

  .tab-content {
    background-color: white;
    padding: $space-xs $space-s;

    > div {
      margin: 0;
    }

    p {
      width: 100%;
    }

    .tab-pane {
      background-color: white;
    }
  }
}
</style>

<docs>
  ```jsx
    <fn1-tabs>
      <fn1-tab name="Tab One" :selected="true">
        <h1>1</h1>
      </fn1-tab>

      <fn1-tab name="Tab Two">
        <h1>2</h1>
      </fn1-tab>

      <fn1-tab name="Tab Three">
        <h1>3</h1>
      </fn1-tab>
    </fn1-tabs>
  ```
</docs>
