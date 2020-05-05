<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.sayHello();
  },
  methods: {
    sayHello() {
      console.log("Hello from Mixin");
    },
  },
};
</script>

<style lang="scss" scoped></style>
