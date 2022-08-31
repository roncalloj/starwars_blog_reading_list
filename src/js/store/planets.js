export const planetsStore={
	planets:[],
	planetPages:0,
	planetTotal:0,
	planetLimit:12,
	planetCurrentPage:1
}

export function planetsActions(getStore, getActions, setStore){
	const baseURL = "https://www.swapi.tech/api/planets/";
	return {
		loadPlanets: async() => {
			try {
				const store = getStore()
				let results = await fetch(`${baseURL}?page=${store.planetCurrentPage}&limit=${store.planetLimit}`)
				if(results.ok) results = await results.json()
				else return;
				setStore({
					...store,
					planets: results.results,
					planetPages:results.total_pages,
					planetTotal:results.total_records
				});
			}
			catch (error){
				console.error(error)
			}
		},
		loadPlanet: async(uid) => {
			console.log("Loading planet...")
			try {
				let result = await fetch(`${baseURL}${uid}`)
				if(result.ok) result = await result.json()
				else return;
				const store = getStore()
				console.log({result})
				setStore({
					...store,
					planet: result.result
				});
			}
			catch (error){
				console.error ({error})
			}
		},
		goToPagePlanets: async(pageNumber,pageLimit=0)=>{
			const store = getStore()
			setStore({
				...store,
				planetCurrentPage:pageNumber,
				planetLimit:pageLimit==0?store.planetLimit:pageLimit
			})
			const actions=getActions()
			try {
				await actions.loadPlanets()
				return true
			} catch (error) {
				return false				
			}
		}
	}
}
