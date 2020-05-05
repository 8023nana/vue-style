<template>
  <div class="admin">
    <!-- 弹窗组件 -- ref/$refs -- success -->
    <message2 class="success" ref="msgSuccess">
      <template v-slot:title="slotProps">
        <strong>恭喜{{ slotProps.title }}</strong>
      </template>
      <template v-slot:default>
        新增课程成功！
      </template>
    </message2>
    <!-- 弹窗组件 -- ref/$refs -- warning -->
    <message2 class="warning" ref="msgWarning">
      <template v-slot>
        <strong>警告</strong>
      </template>
      <template v-slot:default>
        请输入课程名称！
      </template>
    </message2>
    <!-- 标题组件 -- 函数式组件 -- 插件形式 -->
    <heading-functional level="2" :title="title" icon="cart">{{
      title
    }}</heading-functional>
    <!-- 工具栏 -->
    <div class="toolbar" v-pression="'admin'">
      <button @click="$bus.$emit('message-close')">移除提示框</button>
    </div>
    <!-- 新增组件 -->
    <add-course @add-cource="add" v-model="course"> </add-course>
    <!-- 批量修改价格 -->
    <p>
      <input type="text" v-model.number="prices" />
      <button @click="batchUpdate">批量修改价格</button>
      <button @click="deletePrice">删除价格</button>
    </p>
    <!-- 列表组件 -->
    <source-list :source="source"> </source-list>
    <!-- 课程总数 -->
    <p>共有 {{ sourceLen }} 门课程！</p>
  </div>
</template>
<script>
// 模拟用户角色
const role = "user";
// 异步加载数据
function getCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: "Vue" }, { name: "React" }]);
    }, 2000);
  });
}
import sourceList from "@/components/cart/sourceList.vue";
import message2 from "@/components/cart/message2.vue";
import addCourse from "@/components/cart/addCourse.vue";
export default {
  name: "admin",
  components: {
    sourceList,
    message2,
    addCourse,
  },
  data() {
    return {
      source: [],
      course: "",
      sourceLen: 0,
      show: false,
      showWarn: false,
      prices: 0,
      title: "课程购物车",
    };
  },
  async created() {
    const courses = await getCourses();
    this.source = courses;

    // 批量更新价格
    this.batchUpdate();
  },
  watch: {
    source(newValue) {
      this.sourceLen = newValue.length;
    },
  },

  methods: {
    // 新增课程
    add() {
      if (this.course) {
        this.source.push({ name: this.course });
        this.course = "";
        // 普通弹窗打开
        // this.show = true;
        // ref/$refs 弹窗打开
        this.$refs.msgSuccess.toggle();
      } else {
        // 普通弹窗打开
        // this.showWarn = true;
        // ref/$refs 弹窗打开
        this.$refs.msgWarning.toggle();
      }
    },
    // 更新课程价格
    batchUpdate() {
      this.source.forEach((p) => {
        // p.price = this.prices;
        // Vue.set(p, 'price', this.prices);
        this.$set(p, "price", this.prices);
      });
      console.log(this.source);
    },
    // 删除价格
    deletePrice() {
      this.source.forEach((d) => {
        this.$delete(d, "price");
      });
    },
  },
  directives: {
    pression: {
      inserted(el, binding) {
        console.log("binding", binding);
        if (role !== binding.value) {
          el.parentElement.removeChild(el);
        }
      },
    },
  },
  beforeRouteEnter(to, from, next) {
    if (window.isLogin) {
      next();
    } else {
      next("/login?redirect=" + to.fullPath);
    }
  },
};
</script>
