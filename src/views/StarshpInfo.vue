<template>
    <div class="info">
        <ul>
            <li>
                Name: 
                <span>{{ itemData.name }}</span>
            </li>
            <li>
                Model: 
                <span>{{ itemData.model }}</span>
            </li>
            <li>
                Manufacturer: 
                <span>{{ itemData.manufacturer }}</span>
                </li>
            <li>
                Cost in credits: 
                <span>{{ itemData.cost_in_credits }}</span>
            </li>
            <li>
                Length: 
                <span>{{ itemData.length }}</span>
            </li>
            <li>
                MGLT: 
                <span>{{ itemData.MGLT }}</span>
            </li>
            <li>
                Cargo capacity: 
                <span>{{ itemData.cargo_capacity }}</span>
            </li>
            <li>
                Consumables: 
                <span>{{ itemData.consumables }}</span>
            </li>
            <li>
                Crew:
                <span>{{ itemData.crew }}</span>
            </li>
            <li>
                Passengers: 
                <span>{{ itemData.passengers }}</span>
            </li>
            <li>
                Hyperdrive rating: 
                <span>{{ itemData.hyperdrive_rating }}</span>
            </li>
            <li>
                Max atmosphering speed: 
                <span>{{ itemData.max_atmosphering_speed }}</span>
            </li>
            <li>
                Starship class: 
                <span>{{ itemData.starship_class }}</span>
            </li>
            <li>
                Created: 
                <span>{{ itemData.created }}</span>
            </li>
            <li>
                Edited: 
                <span>{{ itemData.edited }}</span>
            </li>
            <li>
                Url: 
                <span>{{ itemData.url }}</span>
            </li>
            <li v-if="itemData.pilots.length">
                Pilots:
                <span 
                    v-for="(pilot, index) in itemData.pilots"
                    :key="index"
                    >
                    {{ pilot }}
                </span>
            </li>
            <li v-if="itemData.films.length">
                Films:
                <span 
                    v-for="(film, index) in itemData.films"
                    :key="index"
                    >
                    {{ film }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'StarshipInfo',
    computed: {
        ...mapGetters(['GET_DATA']),

        itemData() {
            let result = {};
            let vm = this;
            
            this.GET_DATA.map(function(item, index) {
                if (index == vm.$route.query.id) {
                    result = item;
                }
            })
            
            return result;
        }
    }
}


</script>

<style lang="scss">
    .info {
        margin: 0.5em;
        padding: 1em;
        border: 0.3em solid #ffff00;
        border-radius: 0.5em;

        ul {
            list-style-type: none;

            li {
                display: flex;
                justify-content: space-between;
                flex-direction: column; 
                color: #ffd700;   
                font-size: 1.4em;

                span {
                    color: #ffff00;
                    padding: 0.2em 0 0.2em 0.5em;
                    font-weight: 700;
                }
            }
        }
    }
</style>