<template>
  <div>
    <p>
      <input
        type="text"
        :value="value"
        @input="onInput"
        v-focus
        ref="childInput"
      />
      <button @click="add">增加</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
    add() {
      this.$emit("add-cource");
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
