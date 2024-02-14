<template>
  <div class="container form_container">
    <form @submit="submitHandler" class="form">
      <label class="form_header">Authorization</label>
      <label class="error">{{ error }}</label>
      <div class="input_container">
        <label class="label">Login</label>
        <input
          class="input"
          type="text"
          name="login"
          :value="login"
          @change="
            (e) => {
              login = e.target.value
            }
          "
        />
      </div>
      <div class="input_container">
        <label class="label">Password</label>
        <input
          class="input"
          type="password"
          name="password"
          :value="password"
          @change="
            (e) => {
              password = e.target.value
            }
          "
        />
      </div>
      <input type="submit" value="Submit" class="submit" />
    </form>
  </div>
</template>
<script setup>
import router from '@/router'
import axios from 'axios'
import { ref, onMounted } from 'vue'

let login = ''
let password = ''
let error = ref('')

onMounted(() => {
  if (localStorage.getItem('token')) {
    router.push('/profile')
  }
})

async function submitHandler(e) {
  e.preventDefault()
  error.value = ''
  try {
    let res = await axios.post('https://dummyjson.com/auth/login', {
      username: login,
      password: password
    })
    console.log(res)
    localStorage.setItem('token', res.data.token)
    router.push('/profile')
  } catch (e) {
    console.log(e)
    error.value = e.response.data.message
  }
}
</script>
<style scoped>
.form {
  box-shadow:
    0px 2.75px 9px 0px #00000030,
    0px 0.25px 3px 0px #0000000a;
  width: 335px;
  height: 230px;
  border-radius: 10px;
  margin-top: 160px;
  padding: 16px;
  padding-bottom: 43px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
}

.form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.input {
  box-shadow:
    0px 2.75px 9px 0px #00000030,
    0px 0.25px 3px 0px #0000000a;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  outline: none;
  width: 152px;
}

.form_header {
  align-self: flex-start;
  font-size: 16px;
  opacity: 0.87;
}

.label {
  opacity: 0.6;
  font-size: 14px;
  font-weight: 400;
}

.input_container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.submit {
  opacity: 0.6;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.error {
  position: absolute;
  top: 16px;
  right: 13px;
  color: #ff0000;
}
</style>
