export const peoplesStore={
    peoples:[],
		peoplePages:0,
		peopleTotal:0,
		peopleLimit:12,
		peopleCurrentPage:1
}

export function peoplesActions(getStore, getActions, setStore){
	const baseURL = "https://www.swapi.tech/api/people/";
	return {
		loadPeoples:async()=>{
			try {
				const store = getStore()
				let results = await fetch(`${baseURL}?page=${store.peopleCurrentPage}&limit=${store.peopleLimit}`)
				if(results.ok) results= await results.json()
				else return;
				setStore({
					...store,
					peoples : results.results,
					peoplePages:results.total_pages,
					peopleTotal:results.total_records
				})
			}
			catch (error){
				console.error(error)
			}
		},
		loadPeople: async(uid) => {
			console.log("Loading people...")
			try {
				let result = await fetch(	)
				if(result.ok) result = await result.json()
				else return;
				const store = getStore()
				console.log({result})
				setStore({
					...store,
					people : result.result
				});
			}
			catch (error){
				console.error ({error})
			}
		},
		goToPagePeoples: async(pageNumber,pageLimit=0)=>{
			const store = getStore()
			setStore({
				...store,
				peopleCurrentPage:pageNumber,
				peopleLimit:pageLimit==0?store.peopleLimit:pageLimit
			})
			const actions=getActions()
			try {
				await actions.loadPeoples()
				return true
			} catch (error) {
				return false				
			}
		}
	}	
}