export const favoritosStore={
    favoritos:[]
}

export function favoritosActions(getStore, getActions, setStore){
	return {
		addFavorites: (type="", newFavorite)=>{
			const store = getStore()
			const actions = getActions()
			if(store.favoritos.length < 5){
				for (let i=0; i<store.favoritos.length; i++) {
					if (newFavorite.name == store.favoritos[i].name){
						return actions.deleteFavorites(newFavorite.name)
					}
				}
				const favorito = {
					url:newFavorite.url,
					name:newFavorite.name,
					ident: type  + newFavorite.uid}
				store.favoritos = [...store.favoritos, favorito]
				setStore(store)
			}
			console.log(store.favoritos)
		},
		deleteFavorites: (name) => {
			const store = getStore()
			setStore({
				favoritos : store.favoritos.filter(item => item.name != name)
			})
			console.log(store.favoritos)
		}
	}
}