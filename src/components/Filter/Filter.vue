<template>
    <div class="filterContainer">

      <p>{{ selectedLabel }}</p>
      <div class="searchByFilter">
        <p>in</p>
        <select class="selection" v-model="selectedFilter" @change="updateFilter">
          <option>All</option>
          <option>Stories</option>
          <option>Comments</option>
          <option>Ask HN</option>
          <option>Show HN</option>
          <option>Launch HN</option>
          <option>Jobs</option>
          <option>Polls</option>
        </select>
        <p>by</p>
        <select class="selection" v-model="selectedOrder" @change="updateFilter">
          <option>Popularity</option>
          <option>Date</option>
        </select>
        <p>for</p>
        <select class="selection" v-model="selectedTime" @change="updateFilter">
          <option>All time</option>
          <option>Last 24h</option>
          <option>Past Week</option>
          <option>Past Month</option>
          <option>Past Year</option>
          <option>Custom range</option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    selectedLabel: {
      type: String,
      required: true,
    },
  });
  
  const emit = defineEmits();
  
  const selectedFilter = ref('All');
  const selectedOrder = ref('Popularity');
  const selectedTime = ref('All time');
  
  const updateFilter = () => {

    let apiUrl = `https://hn.algolia.com/api/v1/search?tags=story`; 

  if (selectedFilter.value === 'Ask HN') {
    apiUrl = `https://hn.algolia.com/api/v1/search?tags=ask_hn`;
  } else if (selectedFilter.value === 'Show HN') {
    apiUrl = `https://hn.algolia.com/api/v1/search?tags=show_hn`;
  } else if (selectedFilter.value === 'Jobs') {
    apiUrl = `https://hn.algolia.com/api/v1/search?tags=job`;
  } else if (selectedFilter.value === 'Polls') {
    apiUrl = `https://hn.algolia.com/api/v1/search?tags=poll`;
  } else if (selectedFilter.value === 'Stories') {
    apiUrl = `https://hn.algolia.com/api/v1/search?tags=story`; 
  }

  if (selectedOrder.value === 'Date') {
    apiUrl += `&sort=date`; 
  } else if (selectedOrder.value === 'Popularity') {
    apiUrl += `&sort=desc`;
  }

  if (selectedTime.value !== 'All time') {
    if (selectedTime.value === 'Last 24h') {
      apiUrl += `&created_at>=${new Date().getTime() - 24 * 60 * 60 * 1000}`; 
    } else if (selectedTime.value === 'Past Week') {
      apiUrl += `&created_at>=${new Date().getTime() - 7 * 24 * 60 * 60 * 1000}`; 
    } else if (selectedTime.value === 'Past Month') {
      apiUrl += `&created_at>=${new Date().getTime() - 30 * 24 * 60 * 60 * 1000}`; 
    } else if (selectedTime.value === 'Past Year') {
      apiUrl += `&created_at>=${new Date().getTime() - 365 * 24 * 60 * 60 * 1000}`; 
    }
  }
    
    emit('updateFilter', {
      filter: selectedFilter.value,
      order: selectedOrder.value,
      time: selectedTime.value,
      apiUrl,
    });
  };
  </script>


<style scoped>
    .filterContainer{
        background-color: rgba(236, 233, 233, 0.518);
        border-bottom: 1px groove rgb(223, 222, 222);
        border-top: 1px groove rgb(223, 222, 222);
        position: relative;
        bottom: 99.5%;
        left: 14.1%;
        width: 83.8%;
        text-align: left;
        font-size: 30px;
        padding-left: 2%;
        display: flex;
        flex-direction: row;
    }
    .searchByFilter{
        width: 50%;
        height: 50px;
        position: relative;
        left: 1.5%;
        top: 18px;
        display: flex;
        flex-direction: row;
    }
    .searchByFilter p{
        color: rgb(198, 196, 196);
        font-size: 17px;
        padding-right: 4%;
    }
    .selection{
        position: relative;
        right: 3%;
        top: 20%;
        width: 13%;
        height: 60%;
        background-color: rgba(250, 243, 243, 0.919);
    }
</style>