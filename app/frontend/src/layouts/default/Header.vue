<template>
    <v-toolbar color="#354C3C" class="w-100">
        <v-toolbar-title>
            <v-btn icon to="/home">
                <img class="brand" src="/icons/nameless-icon-white.svg">
            </v-btn>
        </v-toolbar-title>
        <div class="icons-xl w-25 d-flex justify-space-around">
            <v-btn icon to="/map">
                <img class="icon-img" src="/icons/map-icon-white.svg">
            </v-btn>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <img class="icon-img" src="/icons/shopping-bag-icon-white.svg">
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in bag" :key="i">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <img class="icon-img" src="/icons/user-icon-white.svg">
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in sesion" :key="i" :to="item.path">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
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
                sesion:[
                    {
                        path: 'https://www.instagram.com/',
                        title: 'Iniciar sesión'
                    },
                    {
                        path: 'https://www.facebook.com/',
                        title: 'Regristarse'
                    }
                ],
                bag:[
                    {
                        title: 'Bolso de compras'
                    }
                ]
                // menu: [
                //     {
                //         path: '/bag',
                //         src: '/icons/shopping-bag-icon-white.svg'
                //     },
                //     {
                //         path: '/map',
                //         src: '/icons/map-icon-white.svg'
                //     },
                //     {
                //         path: '/user',
                //         src: '/icons/user-icon-white.svg'
                //     }
                // ]
            }
        }
    }
</script>