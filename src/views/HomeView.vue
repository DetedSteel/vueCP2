<template>
  <div class="container home_container">
    <div>
      <h1 class="header">Home page</h1>
      <p class="text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <router-link to="/login" class="login">Authorization</router-link>
    </div>
    <img class="img" src="../assets/tools_1.svg" alt="tools">
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
<style>
.header {
  color: #21243d;
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 50px;
}

.text {
  color: #21243d;
  font-size: 16px;
  font-weight: 400;
  width: 497px;
  margin-bottom: 42px;
}

.login {
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
}

.home_container {
  display: flex;
  justify-content: space-between;
}
</style>
