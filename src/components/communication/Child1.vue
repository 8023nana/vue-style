<template>
  <div @click="$emit('some-event', 'msg from child1 ddd')">
    <h3>Child1</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  mounted() {
    //   利用事件总线
    // this.$bus.$on("event-from-child2", (msg) => {
    //   console.log("Child2", msg);
    // });
    // 利用 $parent
    this.$parent.$on("event-from-child2", (msg) => {
      console.log("$parent child2", msg);
    });
  },
};
</script>

<style lang="sass" scoped></style>
