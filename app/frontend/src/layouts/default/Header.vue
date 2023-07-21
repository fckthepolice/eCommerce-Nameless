<template>
    <v-app-bar color="#354C3C" class="h-auto w-100">
        <v-container class="d-flex align-center justify-space-between h-100" fluid>
            <v-app-bar-title>
                <v-btn icon to="/home">
                    <img class="brand" src="/icons/nameless-icon-white.svg">
                </v-btn>
            </v-app-bar-title>
            <v-btn icon v-for="item in menu" :key="item.path" :to="item.path">
                <img class="icon-img" :src="`${item.src}`">
            </v-btn>
        </v-container>
    </v-app-bar>
</template>

<style>
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