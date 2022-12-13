export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-a1f8e2e6","v-64ddefca","v-d8e090fa","v-c5e5db88","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-6e19edb7","v-184f4da6","v-8daa1a0e","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-c151bf32"]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":["v-d8e090fa","v-696d9fb1","v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-a1f8e2e6","v-64ddefca","v-d8e090fa","v-c5e5db88","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

