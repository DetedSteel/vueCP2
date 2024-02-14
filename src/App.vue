<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header container">
    <router-link class="link" to="/home">Home</router-link>
    <RouterLink class="link" to="/users">Users</RouterLink>
    <router-link class="link" to="/profile">Profile</router-link>
  </header>

  <RouterView />
  <footer class="footer">
    <div class="icons">
      <img class="icon" src="./assets/fb.svg" alt="facebook" />
      <img class="icon" src="./assets/insta.svg" alt="instagram" />
      <img class="icon" src="./assets/twit.svg" alt="twitter" />
      <img class="icon" src="./assets/Linkedin.svg" alt="linkedIn" />
    </div>
    <p class="copyright">Copyright ©2020 All rights reserved</p>
  </footer>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  margin-top: 27px;
}

.link {
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  color: black;
}

.icons {
  display: flex;
  gap: 35px;
}

.icon {
  width: 30px;
  height: 30px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 80px;
  gap: 26px;
}

.copyright {
  color: #21243d;
  font-size: 14px;
  font-weight: 400;
}
</style>
