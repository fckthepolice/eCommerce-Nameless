<template>
    <v-container fluid class="search-menu d-flex justify-center">
        <v-list class="d-flex" lines="one">
            <v-list-item v-for="item in options" :key="item.title" :title="item.title"></v-list-item>
        </v-list>
    </v-container>
</template>

<style>
    .search-menu{
        background: aqua;
        
    }
</style>

<script>
    export default{
        name: 'menuView',
        data(){
            return{
                options: [
                    {
                        title: 'CAMISETAS'
                    },
                    {
                        title: 'CHOMBAS'
                    }
                ]
            }
        }
    }
</script>