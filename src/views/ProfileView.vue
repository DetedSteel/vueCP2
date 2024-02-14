<template>
  <div class="container">
    <div :class="isError ? 'none' : ''">
      <h1 class="header">My profile</h1>
      <div class="user">
        <div class="user_info">
          <p class="info">Username: {{ userInfo.username }}</p>
          <p class="info">Name: {{ userInfo.name }}</p>
          <p class="info">Lastname: {{ userInfo.lastName }}</p>
          <p class="info">Gender: {{ userInfo.gender }}</p>
          <p class="info">Email: {{ userInfo.email }}</p>
        </div>
        <img :src="userInfo.image" alt="avatar" class="img" />
      </div>
    </div>
    <div :class="isError ? 'error_container' : 'none'">
      <h1 class="header">Authentication Problem</h1>
      <button class="btn" @click="logOut">Logout</button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import router from '@/router'

let userInfo = ref({})
let isError = ref(false)

function logOut() {
  localStorage.removeItem('token')
  router.push('/home')
}

onMounted(async () => {
  try {
    let res = await axios.get('https://dummyjson.com/auth/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(res)
    userInfo.value.username = res.data.username
    userInfo.value.name = res.data.firstName
    userInfo.value.lastName = res.data.lastName
    userInfo.value.gender = res.data.gender
    userInfo.value.email = res.data.email
    userInfo.value.image = res.data.image
  } catch (e) {
    isError.value = true
    console.log(e)
  }
})
</script>
<style scoped>
.info {
  box-shadow:
    0px 2.75px 9px 0px #00000030,
    0px 0.25px 3px 0px #0000000a;
  opacity: 0.87;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 16px;
  width: fit-content;
  margin: 0;
}

.header {
  font-weight: 700;
  font-size: 44px;
  color: #21243d;
  margin-bottom: 65px;
}

.user {
  display: flex;
  justify-content: space-between;
}

.img {
  border-radius: 100%;
  width: 243px;
  height: 243px;
}

.user_info {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.none {
  display: none;
}

.btn {
  color: white;
  background-color: #ff6464;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  width: 210px;
  height: 45px;
  border: none;
}

.error_container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}
</style>
