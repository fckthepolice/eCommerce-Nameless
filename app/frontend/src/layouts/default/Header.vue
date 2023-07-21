<template>
    <v-app-bar color="#354C3C">
        <v-app-bar-title>
            <v-img src="../../assets/icons/nameless-icon-white.svg" max-height="2rem"></v-img>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="item in menu" :key="item.path" :to="item.path">
            <v-img :src="item.src" max-height="2rem"></v-img>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default{
        name: 'headerView',
        data(){
            return{
                menu: [
                    {
                        path: '/bag',
                        src: '../../assets/icons/shopping-bag-icon-white.svg'
                    },
                    {
                        path: '/map',
                        src: '../../assets/icons/map-icon-white.svg'
                    },
                    {
                        path: '/user',
                        src: '../../assets/icons/user-icon-white.svg'
                    }
                ]
            }
        }
    }
</script>