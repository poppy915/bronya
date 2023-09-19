module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended", // 使用推荐的eslint
    "plugin:vue/vue3-recommended", // 使用插件支持vue3
    // 如果你没有安装第7步,以下两个包不要引入,否则报错
    "plugin:prettier/recommended",
    "eslint-config-prettier",
    "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    requireConfigFile: false,
    parser: "@typescript-eslint/parser",
  },
  // eslint-plugin-vue
  plugins: [
    "vue", // 引入vue的插件 vue <==> eslint-plugin-vue
    // 这个包需要安装了第7步的三个包再引入
    "prettier", // 引入规范插件  prettier <==>  eslint-plugin-prettier
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  // 这里时配置规则的,自己看情况配置
  rules: {
    semi: ["warn"], // 尾部必须分号结尾
    "no-undef": 0,
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off",
  },
};
