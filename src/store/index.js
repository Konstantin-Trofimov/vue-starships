import { createStore } from 'vuex'

export default createStore({
	state: {
		data: [],
	},
	mutations: {
		SET_DATA(state, data) {
			state.data = data;
		},
	},
	actions: {
		async FEATCH_DATA_TO_API(ctx) {
			const url = 'https://swapi.dev/api/starships';
			const res = await fetch(url);
			const data = await res.json();
			
			ctx.commit('SET_DATA', data.results);
			return data;
		},
	},
	getters: {
		GET_DATA(state) {
			return state.data;
		},
	}
})
