<template>
  <div v-if="show" class="message-box">
    <!--具名插槽-->
    <slot name="title" title="距离称为大神又近了一步！"></slot>
    <!--默认插槽-->
    <slot name="default"></slot>
    <span class="message-box-close" @click="toggle">X</span>
  </div>
</template>

<script>
import helloMixin from "./helloMixin";
export default {
  mixins: [helloMixin],
  mounted() {
    this.$bus.$on("message-close", () => {
      this.toggle();
    });
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped></style>
