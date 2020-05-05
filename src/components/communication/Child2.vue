<template>
  <div>
    <h3 v-bind="$attrs" @click="$emit('abc')">Child2</h3>
    <button @click="sendToChild1">给Child1发送消息</button>
    <p @click="$listeners.abc">$attrs: {{ $attrs.msg }}</p>
    <!-- inject 注入 -->
    <div>{{ foo }}</div>

    <!-- 插槽 -->
    <div>
      <slot name="default"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <!-- 作用域插槽 -->
    <div class="foolter">
      <slot name="footer" :fc="fcContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  inject: ["foo"],
  data() {
    return {
      mark: [
        "好好学习，天天向上",
        "学习永远不晚",
        "学习知识要善于思考,思考,再思考",
        "学习的敌人是自己的满足,要认真学习一点东西,必须从不自满开始",
        "构成我们学习最大障碍的是已知的东西,而不是未知的东西",
        "在今天和明天之间,有一段很长的时间;趁你还有精神的时候,学习迅速办事",
        "三人行必有我师焉；择其善者而从之，其不善者而改之",
      ],
    };
  },
  methods: {
    sendToChild1() {
      // 利用事件总线发送事件
      //   this.$bus.$emit("event-from-child2", "some msg from child2");
      // 利用 $parent 派发事件
      this.$parent.$emit("event-from-child2", "some msg from parent's child2");
    },
  },
  computed: {
    fcContent() {
      return this.mark[new Date().getDay() - 1];
    },
  },
  mounted() {
    console.log("$attrs 非属性特性，", this.$attrs);
    console.log("#child2 $listeners", this.$listeners);
  },
};
</script>

<style lang="scss" scoped>
.content {
  color: red;
}
</style>
