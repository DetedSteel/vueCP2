<template>
  <div class="container users">
    <user-card v-for="user in users" :key="user.id" :name="`${user.firstName} ${user.secondName} ${user.maidenName}`" :email="user.email"></user-card>
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import UserCard from '@/components/UserCard.vue';

let users = ref([])

onMounted(async () => {
  let res = await axios.get('https://dummyjson.com/users')
  console.log(res)
  users.value = res.data.users
})
</script>
<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-top: 30px;
}
</style>
