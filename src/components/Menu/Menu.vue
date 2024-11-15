<template>
  <aside class="menuContainer">
    <ul v-if="menuItems.length > 0">
      <li 
        v-for="(item, index) in menuItems" 
        :key="index" 
        :class="{'clicked': selectedItem === index}" 
        @click="selectItem(index, item.label)"
      >
        <img :src="require(`@/assets/icons/${item.icon}`)" :alt="item.label" />
        {{ item.label }}
      </li>
    </ul>
    <p v-else>No menu items available</p>
  </aside>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['updateFilter']); 

const selectedItem = ref(null);

const menuItems = ref([
  { label: 'All', icon: 'all-icon.png' },
  { label: 'Hot', icon: 'hot-icon.png' },
  { label: 'Show HN', icon: 'shox-icon.png' },
  { label: 'Ask HN', icon: 'ask-hn.png' },
  { label: 'Polls', icon: 'polls-icon.png' },
  { label: 'Jobs', icon: 'jobs-icon.png' },
  { label: 'Shipow', icon: 'shipow-icon.png' },
  { label: 'Starred', icon: 'starred-icon.png' },
]);

const selectItem = (index, label) => {
  selectedItem.value = index; 
  emit('updateFilter', label); 
};
</script>
  
  <style scoped>
  .menuContainer {
    background-color: rgba(197, 194, 194, 0.051);
    display: flex;
    flex-direction: column;
    width: 14%;
    height: 100vh;
    position: relative;
    left: 0.1%;
  }
  
  ul {
    list-style-type: none;
    padding-left: 15%;
    padding-top: 5%;
  }
  
  li {
    position: relative;
    right: 18%;
    display: flex;
    flex-direction: row;
    width: 117.5%;
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    height: 30px;
    cursor: pointer;
  }
  
  li img {
    width: 15%;
    height: 90%;
    position: relative;
    bottom: 15%;
    left: 2%;
    padding-right: 5%;
  }
  
  .clicked {
    background-color: rgb(213, 212, 212);
    color: black;
  }
  
  p {
    text-align: center;
    color: red;
  }
  </style>
  