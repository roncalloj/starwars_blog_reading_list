export const speciesStore={
    species: [],
		speciePages:0,
		specieTotal:0,
		specieLimit:12,
		specieCurrentPage:1
}

export function speciesActions( getStore, getActions, setStore){
	const baseURL = "https://www.swapi.tech/api/species/";
	return {
		loadSpecies:async()=>{
			try {
				const store=getStore()
				let results= await fetch(`${baseURL}?page=${store.specieCurrentPage}&limit=${store.specieLimit}`)
				if(results.ok) results= await results.json()
				else return
				setStore({
						...store,
						species: results.results,
						speciePages: results.total_pages,
						specieTotal: results.total_records
				})
			}
			catch (error){
				console.error(error)
			}
		},
		loadSpecie: async(uid) => {
			console.log("Loading specie...")
			try {
				let result = await fetch(`${baseURL}${uid}`)
				if(result.ok) result = await result.json()
				else return;
				const store=getStore()
				console.log({result})
				setStore({
					...store,
					specie: result.result
				});
			}
			catch (error){
				console.error ({error})
			}
		},
		goToPageSpecies: async(pageNumber,pageLimit=0)=>{
			const store = getStore()
			setStore({
				...store,
				specieCurrentPage:pageNumber,
				specieLimit:pageLimit==0?store.specieLimit:pageLimit
			})
			const actions=getActions()
			try {
				await actions.loadSpecies()
				return true
			} catch (error) {
				return false				
			}
		}
	}
}