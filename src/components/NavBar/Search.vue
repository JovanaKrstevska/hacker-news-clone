<template>
    <div class="searchBar">
        <img class="search-icon" src="../../assets/search-icon.png" alt="search-icon">
        <input class="search" type="search" placeholder="Search stories by title, url or author" @keyup.enter="handleSearch" v-model="searchQuery">
    </div>
</template>

<script>
import {ref, defineComponent} from 'vue';
export default defineComponent({
    name: 'Search',
    setup(_, { emit }) {
    const searchQuery = ref('');

    const handleSearch = () => {
      emit('search', searchQuery.value);
    };

    return {
      searchQuery,
      handleSearch,
    };
  },

})
</script>

<style>
    .searchBar{
        display: flex;
        align-items: center;
        border: 2px solid #ddd;
        border-radius: 30px;
        padding: 5px 10px;
        width: 60%;
        height: 40px;
        position: relative;
        left: 1.5%;
        top: 20px;
    }
    .search{
        border: none;
        outline: none;
        flex-grow: 1;
        font-size: 18px;
        color: #333;
    }
    .search::placeholder{
        color: #bbb;
        text-align: left;
    }
    .search-icon{
        width: 4%;
        font-size: 18px;
        margin-right: 10px;
    }
</style>