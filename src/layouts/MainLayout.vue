<template>
    <div class="mainContainer">
      <Menu  @updateFilter="updateFilterLabel" />
      <Filter :selectedLabel="selectedLabel" @updateFilter="updateFilter" />
      <MainNews :filter="selectedFilter" :searchQuery="searchQuery"/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Menu from '@/components/Menu/Menu.vue';
  import Filter from '@/components/Filter/Filter.vue';
  import MainNews from '@/components/MainNews/MainNews.vue';
  
  const selectedFilter = ref({
    filter: 'All',
    order: 'Popularity',
    time: 'All time',
  });
  
    const selectedLabel = ref('All');

        const props = defineProps({
      searchQuery: {
        type: String,
        default: '',
      },
    });
    const updateFilterLabel = (filterData) => {
        selectedLabel.value = filterData;
    };
    const updateFilter = (filterData) => {
        selectedFilter.value = filterData;
    };
  </script>
  

<style>
    .mainContainer{
        border: none;
        background-color: rgba(237, 233, 233, 0.424);
        height: 100vh;
        margin: auto;
    }
</style>