import { peoplesStore, peoplesActions } from './peoples'
import { vehiclesStore, vehiclesActions } from './vehicles'
import { planetsStore, planetsActions } from './planets'
import { speciesActions, speciesStore } from './species';
import { favoritosActions, favoritosStore } from './favoritos';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/*
			characters: [
			],*/
			...peoplesStore,
			...vehiclesStore,
			...planetsStore,
			...speciesStore,
			...favoritosStore
		},
		actions: {
			/*
			fetchGetCharacter: async() => {
				const store = getStore();
				let response = await fetch("https://www.swapi.tech/api/people")
				response = await response.json()
				setStore({
					...store,
					characters: response
				});
			},*/
			...peoplesActions(getStore, getActions, setStore),
			...vehiclesActions(getStore, getActions, setStore),
			...planetsActions(getStore, getActions, setStore),
			...speciesActions(getStore, getActions, setStore),
			...favoritosActions(getStore, getActions, setStore)
		}
	};
};

export default getState;
