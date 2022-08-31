import React, {useContext} from 'react'
import {Context} from '../../store/appContext'

import PreviewAll from "../../views/previewAll.js";

export default function Vehicles() {
	const {store, actions} = useContext(Context)

	for (var i = 1; i<=(Math.round(store.vehicleTotal/12)); i++){
		var Pages = [...Pages,i]
	}

	return (
		<div>
			<h1 className="text-start m-3rem" style={{margin: "1rem"}}>Vehicles</h1>
			<div className="row row-cols-1 row-cols-md-4 g-4 p-0 m-0">
				<PreviewAll items={store.vehicles}/>
			</div>
			<div className="m-4">
				<nav aria-label="Page navigation example">
					<ul className="pagination d-flex justify-content-center">
						{Pages? Pages.map((page, index) => {
							if (page != null) {
								return (
									<li key={index} className="page-item">
										<button className="page-link" onClick={() => actions.goToPageVehicles(page)}>{page}</button>
									</li>
								)
							}
						}
						):""}
					</ul>
				</nav>
			</div>
		</div>
	)
};