<template>
  <div class="box">
    <headComponents/>
    <div class="content">
      <demo  :list="jsList"/>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from "vue";
import { jsListApi } from "@/api/JavaScript/home.js"
import demo from "../../demo.vue"
import headComponents from '@/components/head.vue';
interface ListInterface {
  id?: number;
  name?: string;
  src?: string;
  date?: string;
  routerName?: string;
  
}
export default defineComponent({
  components: {
    demo,
    headComponents
  },
  //   setup(_,{emit}) {
  setup() {
    const jsList = ref<ListInterface[]>([]);
    onMounted(() => {
      jsListApi.then((res:any) => {
        jsList.value = res[0].children
        console.log(res);
      })
    });
    return {
      jsList
    };
  },
});
</script>
<style lang='scss' scoped>
.content {
  margin: 16px 200px;
}
</style>