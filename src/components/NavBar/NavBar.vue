<template>
    <nav class="navContainer">
        <img class="logo" src="../../assets/logo.png" alt="logo">
        <h2 class="title">Search Hacker News</h2>
        <Search @search="searchHandler"/>
        <p>by</p>
        <img class="algolia-logo" src="../../assets/algolia-logo.png" alt="algolia-logo">
        <img class="settings-icon" src="../../assets/settings-icon.png" alt="settings-icon">
    </nav>
</template>

<script>
import Search from './Search.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    components: {Search},
    setup(props, { emit }) {
    const searchHandler = (query) => {
      emit('search', query);
    };

    return {
      searchHandler,
    };
}
})
</script>

<style scoped>
    .navContainer{
        display: flex;
        flex-direction: row;
    }
    .logo{
        width: 5%;
        height: 1%;
        padding-right: 0.5%;
        padding-top: 0.3%;
    }
    .title{
        color: rgb(198, 196, 196);
        width: 9%;
        text-align: left;
        font-weight: lighter;
    }
    p{
        color: rgb(198, 196, 196);
        position: relative;
        left: 2%;
        top: 25px;
    }
    .algolia-logo{
        width: 4.5%;
        height: 5%;
        position: relative;
        left: 2.5%;
        top: 21px;
    }
    .settings-icon{
        width: 3%;
        height: 35px;
        position: relative;
        left: 14.7%;
        top: 30px;
        transform: rotate(180deg);
    }
</style>