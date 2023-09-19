import { defineComponent, ref, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const test = ref<string>("testtest");
    const route = useRoute();
    const router = useRouter();
    const Clicktest = () => {
      router.push("/one");
    };
    return {
      test,
      Clicktest,
    };
  },
});
