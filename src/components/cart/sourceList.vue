<template>
  <div>
    <ul>
      <li v-for="item in source" :key="item.name" @click="onClick(item)">
        {{ item.name }} - {{ item.price | currently("$") }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Array,
      required: true,
    },
  },
  filters: {
    currently(value, symbol = "￥") {
      return symbol + value;
    },
  },
  methods: {
    onClick(c) {
      this.$router.push({
        name: "detail",
        params: {
          name: c.name,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
