<script>
export default {
 name: "List",
 props: {
  list: {
   type: Array,
   default: () => [],
  },
 },
};
</script>

<template>
 <ul class="list-group">
  <li v-for="(item, index) in list" :key="index" class="list-group-item">
   <router-link :to="`/user/${item.id}`" class="list-group-item-action">
    {{ item.first_name }} {{ item.last_name }}
   </router-link>
  </li>
 </ul>
</template>
<style scoped>
.hover {
 cursor: pointer;
}
</style>
