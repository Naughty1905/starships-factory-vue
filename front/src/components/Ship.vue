<template>
    <div class="ships">
        <div class="ships-header">
            <p>Starship class</p>
            <p>Hyperdrive_rating</p>
            <p>MGLT</p>
            <p>PK</p>
        </div>
        <div class="ships-body">
            <SRow
                    v-for="row in paginatedShips"
                    :row_data="row"
            />
        </div>
        <div class="ships-pagination">
            <div class="page"
                v-for="page in pages"
                 :key="page"
                 @click="pageClick(page)"
            >{{page}}
            </div>
        </div>
    </div>
</template>

<script>
    import SRow from "./SRow";

    export default {
        name: "Ships",
        props: {
            ships_data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        components: {
            SRow
        },
        data() {
            return {
                shipsPerPage: 8,
                pageNumber: 1
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.ships_data.length / 8)
            },
            paginatedShips(){
                let from = (this.pageNumber-1)*this.shipsPerPage;
                let to = from+ this.shipsPerPage;
                return this.ships_data.slice(from,to);
            }
        },
        methods:{
            pageClick(page){
                this.pageNumber=page;
            }
        }
    }
</script>

<style>
    .ships {
        max-width: 900px;
        margin: 0 auto;
    }

    .ships-header {
        display: flex;
        flex-basis: 20%;
        justify-content: space-around;
        text-align: left;
        border-bottom: 1px solid floralwhite;
        color: aliceblue;
    }
    .ships-pagination{
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
    }
    .page{
        padding: 8px;
        margin-right: 10px;
        border: 1px solid white;
    }
    .page:hover{
        background: #72de26;
        cursor: pointer;
    }
</style>
