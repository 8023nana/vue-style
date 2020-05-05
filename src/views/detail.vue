<template>
  <div>
    <h1>课程详情页</h1>
    <p>{{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler() {
        console.log("immediate watcher", "获取数据");
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
