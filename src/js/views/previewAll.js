import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {Context} from '../store/appContext'

export default function PreviewItems(props){
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()
	const URL = 'https://www.swapi.tech/api'
	return (
		<Fragment>
			{props.items.map((item,index)=>{
				let itsFavorite = store.favoritos.some((val) => val.ident == item.url.substr(URL.length).replace(item.uid,"") + item.uid)
				return(
					<div key={index} className="list-group-item col border-0">
						<div className="card m-auto p-0" style={{width: "18rem"}}>
							<img src={`${item.url.includes("people")? `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg` : `https://starwars-visualguide.com/assets/img/${item.url.substr(URL.length)}.jpg` }`}
							onError={(e)=>{e.target.onerror = null; e.target.src=`https://picsum.photos/id/1022/600/400`}}/>
							<div className="card-body d-flex flex-column" style={{paddingRight : "2.4rem"}}>
								<h5 className="card-title" style={{height: "2.5rem"}}>{item.name}</h5>
								<div className="d-flex justify-content-between">
									<button onClick = {() => {
										navigate (item.url.substr(URL.length));
										}}
										className="btn btn-primary"> Detalles 
									</button >
									<button onClick = {() => actions.addFavorites(item.url.substr(URL.length).replace(item.uid,""), item)} className = "border-0 bg-transparent fs-3 text-warning p-0"> 
										<i className = {`${itsFavorite? "fa-solid":"fa-regular"} fa-bookmark`}/>
									</button>
								</div>
							</div>
						</div>
					</div>	
				)
			})}
		</Fragment>
	)
}