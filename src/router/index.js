import { createRouter, createWebHistory } from 'vue-router'
import StarshipsList from '../views/StarshipsList.vue'
import StarshipInfo from '../views/StarshpInfo.vue'

const routes = [
	{
		path: '/',
		name: 'StarshipsList',
		component: StarshipsList
	},
	{
		path: '/starship',
		name: 'starship',
		component: StarshipInfo
	}
  
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
