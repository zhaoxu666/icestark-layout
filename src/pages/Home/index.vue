<template>
  <div class="home">
    Home page
    <p><el-link type="primary" @click="innerJump">About</el-link></p>
    <p><el-link type="primary" @click="outerJump">Seller</el-link></p>
    <el-button @click="handleWaiter">向子应用传值 'EN'</el-button>
    <p>接收子应用传过来的值： {{lang}}</p>
  </div>
</template>
<script>
import { store, event } from '@ice/stark-data';
export default {
  data() {
    return {
      lang: ''
    }
  },
  methods: {
    innerJump() {
      this.$router.push('/about')
    },
    outerJump() {
      this.$router.push('/seller')
    },
    handleWaiter() {
      store.set('language', 'EN')
      this.lang = 'EN'
    }
  },
  created() {
     store.on(
      "language",
      (lang) => {
        console.log(`current language is ${lang}`);
        this.lang = lang
      },
      true
    );
  }
}
</script>