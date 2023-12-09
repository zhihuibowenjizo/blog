import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",


  lang: "zh-CN",
  title: "XD的blog",
  //description: "vuepress-theme-hope 的博客演示",

  theme,

  shouldPrefetch: false,

  
});
