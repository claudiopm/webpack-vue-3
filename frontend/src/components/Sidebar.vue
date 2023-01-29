<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <ul>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/content">Content</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </ul>
</template>
