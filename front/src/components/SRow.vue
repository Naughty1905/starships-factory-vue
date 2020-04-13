<template>
    <div class="ships-body-row">
        <div class="row row-class">
{{row_data.fields.starship_class}}
        </div>
        <div class="row row-rating">
{{row_data.fields.hyperdrive_rating}}
        </div>
        <div class="row row-mglt">
{{row_data.fields.MGLT}}
        </div>
        <div class="row row-pk">
{{row_data.pk}}
        </div>
        <button class="pay-button">Buy</button>
    </div>
</template>

<script>
    export default {
        name: "SRow",
        props: {
            row_data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }
    }
</script>

<style>
    .ships-body-row{
        display: flex;
        justify-content: space-around;
        color: white;

    }
    .row{
        text-align: left;
        padding: 8px 16px;
        flex-basis: 20%;
        color: white;

    }
    .pay-button {
        position: relative;
        display: inline-block;
        font-family: Arial,Helvetica,FreeSans,"Liberation Sans","Nimbus Sans L",sans-serif;
        font-size: 1.5em;
        font-weight: 700;
        color: rgb(245,245,245);
        text-shadow: 0 -1px rgba(0,0,0,.1);
        text-decoration: none;
        user-select: none;
        padding: .3em 1em;
        outline: none;
        border: none;
        border-radius: 3px;
        background: #0c9c0d linear-gradient(#82d18d, #0c9c0d);
        box-shadow: inset #72de26 0 -1px 1px, inset 0 1px 1px #98ff98, #3caa3c 0 0 0 1px, rgba(0,0,0,.3) 0 2px 5px;
        -webkit-animation: pulsate 1.2s linear infinite;
        animation: pulsate 1.2s linear infinite;
    }
    .pay-button:hover {
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
        cursor: pointer;
    }
    .pay-button:active {
        top: 1px;
        color: #fff;
        text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff;
        box-shadow: 0 -1px 3px rgba(0,0,0,.3), 0 1px 1px #fff, inset 0 1px 2px rgba(0,0,0,.8), inset 0 -1px 0 rgba(0,0,0,.05);
    }
    @-webkit-keyframes pulsate {
        50% {color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff;}
    }
    @keyframes pulsate {
        50% {color: #fff; text-shadow: 0 -1px rgba(0,0,0,.3), 0 0 5px #ffd, 0 0 8px #fff;}
    }
</style>
