<template>
  <div class="card">
    <p class="name">{{ name }}</p>
    <p class="email">{{ email }}</p>
  </div>
</template>
<script setup>
defineProps({ name: String, email: String })
</script>
<style scoped>
.card {
  box-shadow:
    0px 2.75px 9px 0px #00000030,
    0px 0.25px 3px 0px #0000000a;
  display: flex;
  gap: 40px;
  padding: 16px;
  border-radius: 10px;
  width: fit-content;
}

.name {
  opacity: 0.87;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.email {
  opacity: 0.6;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
}
</style>
