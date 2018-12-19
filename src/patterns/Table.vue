<template>
  <component :is="type">
    <caption class="sr-only" v-if="caption">
      {{
        caption
      }}
    </caption>
    <thead>
      <tr>
        <th v-for="(item, index) in header" :key="index" scope="col">{{ item }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in rows" :key="index">
        <th scope="row">{{ item.firstName }}</th>
        <td>{{ item.lastName }}</td>
        <td>{{ item.tools }}</td>
      </tr>
    </tbody>
  </component>
</template>

<script>
/**
 * Table
 */
export default {
  name: "fn1-table",
  status: "ready",
  release: "1.0.0",
  model: {
    prop: "active",
  },
  props: {
    type: {
      type: String,
      default: "table",
    },
    caption: {
      type: String,
      default: null,
    },
    header: {
      type: Array,
      required: true,
      default: null,
    },
    rows: {
      type: Array,
      required: true,
      default: null,
    },
  },
}
</script>

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;

  thead {
    th {
      font-weight: $weight-semi-bold;
      text-align: left;
      padding: 0 0 $space-xs $space-xs;
      // background: red;
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background: rgba($color-cloud, 0.3);
      }
    }

    td,
    th {
      border-top: 1px solid #ddd;
      padding: $space-xs;

      &:last-of-type {
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <fn1-table
    caption="Table Example"
    :header="['First Name', 'Last Name', 'Tools']"
    :rows="[
      { firstName: 'Adam',    lastName: 'Butcher', tools: 'Macbook Pro, Sublime Text' },
      { firstName: 'Cliff',   lastName: 'Ingham',  tools: 'Dell, Linux' },
      { firstName: 'Charles', lastName: 'Brandt',  tools: 'Macbook Pro, VSCode' },
      { firstName: 'Seth',    lastName: 'Tierney', tools: 'Every tool' }
    ]"
  />
  ```
</docs>
