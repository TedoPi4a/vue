<template>
  <div>
  <div class="navbar">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/feed">Feed</router-link>
    <router-link class="link" to="/register">Register</router-link>
    <router-link class="link" to="/sign-in">Sign In</router-link>
    <button class="button-3" @click="handleSignOut" v-if="isLoggedIn"> ZATVARAI VRATATA <br>(logout)</button>
  </div>
  <div class="container">
    <router-view class="router"/>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';

const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
#app{
  font-size: 2em;
  position: relative;
}


/* CSS */
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: .4em 1em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}


.router{
  position: relative;
}

.link{
  margin: 0 2em;
  position: relative;
}
.container{
  display: flex;
  justify-items: center;
  justify-content: center;
  margin-top: 4em;
}


.navbar{
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(37, 37, 37);
  width: 100%;
  height: 2em
}
</style>