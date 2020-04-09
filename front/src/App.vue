<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img
                        src="data:image/png;base64,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"></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/spaceship">Spaceships</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/order">Order</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/ship">Ship</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view :ships_data="SHIPS"></router-view>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import Ship from './components/Ship';

    export default {
        name: 'app',
        components: {
            Ship
        },
        computed: {
            ...mapGetters([
                'SHIPS'
            ])
        },
        // data: () => {
        //   return(
        //
        //   )
        // },
        methods: {
            ...mapActions([
                'GET_SHIPS_FROM_API'
            ])
        },
        mounted() {
            this.GET_SHIPS_FROM_API()
        }
    }
</script>

<style lang="css">
    @import 'assets/css/style.css';
</style>


