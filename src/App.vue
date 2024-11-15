<template>
  <div id="app">
    <NavBar @search="updateSearchQuery"/>
    <MainLayout :searchQuery="searchQuery"/>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar/NavBar.vue';
import MainLayout from './layouts/MainLayout.vue';

const searchQuery = ref('');

const updateSearchQuery = (query) => {
  searchQuery.value = query;
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
