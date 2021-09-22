<template>
	<div class="wrapper">
		<router-view v-if="!isLoading"/>
	</div> 
</template>

<script>

import { mapActions } from 'vuex'

export default {
		name: 'App',
		data() {
			return {
				isLoading: true,

			}
		},
		methods: {
			...mapActions(['FEATCH_DATA_TO_API']),		
		},
		mounted() {
			this.FEATCH_DATA_TO_API().then(response => {
					if (response) {
						this.isLoading = false
				}
			})
		}
	}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

	* {
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #000;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 3em;
	}
</style>
