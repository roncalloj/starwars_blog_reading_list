export const vehiclesStore={
    vehicles: [],
		vehiclePages:0,
		vehicleTotal:0,
		vehicleLimit:12,
		vehicleCurrentPage:1
}

export function vehiclesActions( getStore, getActions, setStore){
	const baseURL = "https://www.swapi.tech/api/vehicles/";
	return {
		loadVehicles:async()=>{
			try {
				const store=getStore()
				let results= await fetch(`${baseURL}?page=${store.vehicleCurrentPage}&limit=${store.vehicleLimit}`)
				if(results.ok) results= await results.json()
				else return
				setStore({
						...store,
						vehicles: results. results,
						vehiclePages: results.total_pages,
						vehicleTotal: results.total_records
				})
			}
			catch (error){
				console.error(error)
			}
		},
		loadVehicle: async(uid) => {
			console.log("Loading vehicle...")
			try {
				let result = await fetch(`${baseURL}${uid}`)
				if(result.ok) result = await result.json()
				else return;
				const store=getStore()
				console.log({result})
				setStore({
					...store,
					vehicle: result.result
				});
			}
			catch (error){
				console.error ({error})
			}
		},
		goToPageVehicles: async(pageNumber,pageLimit=0)=>{
			const store = getStore()
			setStore({
				...store,
				vehicleCurrentPage:pageNumber,
				vehicleLimit:pageLimit==0?store.vehicleLimit:pageLimit
			})
			const actions=getActions()
			try {
				await actions.loadVehicles()
				return true
			} catch (error) {
				return false				
			}
		}
	}
}