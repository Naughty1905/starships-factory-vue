<template>
    <div class="people">
        <div class="container-fluid clearfix">
            <div class="row">
<!--                <div class="col-sm-4" v-for="order in orders">-->
                    <div class="card bg-light">
                        <div class="card-body">
                            <h2>Orders should be place here</h2>
                        </div>
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Orders',

        data () {
            return {
                order: {}
            }
        },
        methods: {
            loadOrders() {
            //    здесь должен быть метод который подгружает заказы из бд
            }
        },
        mounted() {
            this.loadOrders();
        },
    }
</script>
