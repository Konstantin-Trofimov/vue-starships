<template>
    <div>
        <input 
            class="search" 
            type="text"
            v-model.trim="userValue"
            @input="findStarshipByName()"
        >

        <ul class="list">
            <li 
                v-for="(starship, index) in paginatedItems"
                :key="starship"
                @click="toStarshipInfo(+index)"
            >
            {{ starship.name }}
            </li>
        </ul>

        <div class="pagination">
            <button 
                class="pagination__page"
                @click="pageNumber > 1 ? pageNumber-- : false"
                >
                prev
                </button>
            <div 
                class="pagination__page"
                :class="{'pagination__page_selected': page == pageNumber}"
                v-for="page in pages"
                :key="page"
                @click="pageClick(page)"
            >
            {{page}}
            </div>
            <button 
                class="pagination__page"
                @click="pageNumber < pages ? pageNumber++ : false"
                >
                next
                </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
		name: 'StarshipsList',
        data() {
            return {
                pageNumber: 1, 
                itemsPerPage: 5,
                userValue: '',
                searchResult: []
            }
        },
        methods: {
            toStarshipInfo(id) {
                this.$router.push({
                    name: 'starship',
                    query: { id },
                })
            },
            pageClick(page) {
                this.pageNumber = page;
                this.findStarshipByName();
            },
            findStarshipByName() {
                this.searchResult = [];
                
                this.GET_DATA.forEach(starship => {
                    if (starship.name.toLowerCase().includes(this.userValue.toLowerCase()) || starship.url.includes(this.userValue.toLowerCase())) {
                        this.searchResult.push(starship);
                    }
                })
            },
            
        },
        computed: {
            ...mapGetters(['GET_DATA']),
            pages() {
                return Math.ceil(this.searchResult.length / this.itemsPerPage); 
            },
            paginatedItems() {
                let from = (this.pageNumber - 1) * this.itemsPerPage;
                let to = from + this.itemsPerPage;
    
                if (this.searchResult.length >= this.itemsPerPage) {
                    return this.searchResult.slice(from, to);
                }
                else {
                    return this.searchResult;
                }  
            }
        },
        mounted() {
            this.findStarshipByName();
        }
	}
</script>

<style lang="scss">

    .search {
        display: block;
        font-size: 1.5em;
        border: solid 0.2em #ffff00;
        color: #ffff00;
        background: transparent;
        padding: 0.5em;
        margin: 0 auto 1em;
        outline: none;
    }

    .list {
        list-style-type: none;
        margin: 0  0 3.5vh;

        li {
            text-align: center;
            color: #ffff00;
            font-size: 2.5em;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.4s;

            &:hover {
                text-shadow: #FC0 0.1em 0 0.4em;
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;

        button {
            background-color: transparent;
        }

        &__page {
            padding: 0.3em;
            border: solid 0.2em #ffff00;
            color: #ffff00;
            font-size: 1.5em;
            margin:0 0.1em 0 0.1em;
            cursor: pointer;

            &_selected {
                background-color: #bdb76b;
            }

            &:hover {
                box-shadow: #FC0 0.1em 0 0.3em;
                text-shadow:#FC0 0.1em 0 0.3em;
            }
        }
    }

</style>
