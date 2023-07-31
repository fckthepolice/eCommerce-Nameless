<template>
    <div class="search-menu w-100 d-flex justify-center align-center">
        <ul class="d-flex">
            <li v-for="item in options" :key="item.title" :title="item.title">
                <a :href="item.path">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<style>
    @import url(/fonts/fonts.css);
    .search-menu{
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        height: 35px;
    }
    ul{
        list-style: none;
    }
    li{
        margin-left: 1em;
        font-size: 0.8rem;
        font-family: 'Chillax-Regular';
    }
    a{
        text-decoration: none;
        color: #1c1c1c;
    }
</style>

<script>
    export default{
        name: 'menuView',
        data(){
            return{
                options: [
                    {
                        path: '/bag',
                        title: 'CAMISETAS'
                    },
                    {
                        path: '/home',
                        title: 'CHOMBAS'
                    }
                ]
            }
        }
    }
</script>