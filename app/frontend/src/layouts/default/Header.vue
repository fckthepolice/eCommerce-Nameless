<template>
    <v-toolbar color="#354C3C" class="w-100">
        <v-toolbar-title>
            <v-btn icon to="/home">
                <img class="brand" src="/icons/nameless-icon-white.svg">
            </v-btn>
        </v-toolbar-title>
        <v-btn icon v-for="item in menu" :key="item.path" :to="item.path">
            <img class="icon-img" :src="`${item.src}`">
        </v-btn>
    </v-toolbar>
</template>

<style scoped>
    .brand{
        height: 2em;
    }
    .icon-img{
        height: 1.4em;
    }
</style>

<script>
    export default{
        name: 'headerView',
        data(){
            return{
                menu: [
                    {
                        path: '/bag',
                        src: '/icons/shopping-bag-icon-white.svg'
                    },
                    {
                        path: '/map',
                        src: '/icons/map-icon-white.svg'
                    },
                    {
                        path: '/user',
                        src: '/icons/user-icon-white.svg'
                    }
                ]
            }
        }
    }
</script>