import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'
import styles from "../../styles/demo.module.css"

export default function Favoritos() {
	const {store, actions} = useContext(Context)
	const URL = 'https://www.swapi.tech/api'
	return (
		<Fragment>
			{store.favoritos? (
				<div className="dropdown">
					<button className={`btn btn-secondary dropdown-toggle ${styles.FavMenu}`} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{store.favoritos.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
							{store.favoritos.length!=0? store.favoritos.map((favorito,index)=>{
								return (
									<li className="d-flex" onClick={(e) => e.stopPropagation()} key={index}>
										<Link to={favorito.url.substr(URL.length)} className="dropdown-item p-1 m-auto">
											{favorito.name}
										</Link>
										<button onClick = {() => actions.deleteFavorites(favorito.name)} className = "border-0 bg-transparent fs-3 text-warning p-1"> 
											<i className="fa-solid fa-delete-left"></i>
										</button>
									</li>
								)
							}):
								<div className="text-center">Vacio</div>
							}
					</ul>
			</div>
			): ""}
		</Fragment>
	)
}