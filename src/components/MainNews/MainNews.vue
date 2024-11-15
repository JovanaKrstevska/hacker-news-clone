<template>
  <div class="newsListContainer">
    <p v-if="error">{{ error }}</p>
    <ul v-if="newsItems.length">
      <li v-for="item in newsItems" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
    <p v-else-if="!error">Loading...</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  filter: {
    type: Object,
    default: () => ({
      filter: 'All',
      order: 'Popularity',
      time: 'All time',
    }),
  },
  searchQuery: {
    type: String,
    default: '',
  },
});

const newsItems = ref([]);
const error = ref(null);

const fetchData = async () => {
  const { filter, order, time } = props.filter;
  const searchQuery = props.searchQuery;

  try {
    let apiUrl = `https://hn.algolia.com/api/v1/search?tags=front_page`;

    if (filter === 'Ask HN') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=ask_hn`;
    } else if (filter === 'Show HN') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=show_hn`;
    } else if (filter === 'Jobs') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=job`;
    } else if (filter === 'Polls') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=poll`;
    } else if (filter === 'Stories') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=story`;
    } else if (filter === 'Comments') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=story&query=comments`;
    } else if (filter === 'Launch HN') {
      apiUrl = `https://hn.algolia.com/api/v1/search?tags=launch_hn`;
    }

    if (searchQuery) {
      apiUrl += `&query=${searchQuery}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    newsItems.value = data.hits;
  } catch (err) {
    error.value = 'Failed to load news items. Please try again later.';
  }
};

watch(
  () => [props.filter, props.searchQuery],
  () => {
    fetchData();
  },
  { immediate: true }
);
</script>

<style scoped>
.newsListContainer {
  padding: 20px;
  border: 1px solid black;
  width: 83%;
  position: relative;
  left: 14.2%;
  bottom: 99.7%;
}
ul {
  list-style-type: none;
}
</style>
