<template>
  <div>
    <h2>组件通信</h2>
    <child1 msg="some msg from parent" @some-event="onSomeEvent"></child1>
    <child2 msg="other msg" style="color:#000;" v-on="$listeners">
      <template> 我应该在默认插槽中</template>

      <template v-slot:content>我应该是红色的</template>
      <!-- 作用域插槽 -->
      <template v-slot:footer="{ fc }">{{ fc }}</template>
    </child2>
  </div>
</template>

<script>
import Child1 from "@/components/communication/Child1";
import Child2 from "@/components/communication/Child2";
export default {
  components: {
    Child1,
    Child2,
  },
  methods: {
    onSomeEvent(msg) {
      console.log("communication:", msg);
    },
  },
  mounted() {
    console.log(
      "$children 不保证顺序，因为有可能会有异步组件，会向后追加",
      this.$children
    );
    console.log("$listeners", this.$listeners);
  },
};
</script>

<style lang="sass" scoped></style>
